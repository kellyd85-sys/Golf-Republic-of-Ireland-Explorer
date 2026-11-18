"""
Build data.js for the Golf Course Finder from your QGIS outputs. Uses only standard Python.
    python build_finder_data.py GolfCourseMCE.gpkg OD_matix.csv Edited_BuiltupAreas.shp
- Courses: GolfCourseMCE.gpkg (layer golfcoursep18, ITM). Repeated names (a course split by a county boundary) are merged.
- Towns: the shapefile's point order matches the OD matrix's destination order, so names come from the matrix.
  Repeated town names get "(near <closest other town>)".
- Drive times: OD matrix total_cost (seconds) -> minutes, matched to towns by position.
Then paste data.js into the page in place of the existing "const DATA=..." line.
"""
import sqlite3, struct, csv, json, math, collections, sys
def itm_to_wgs(E,N):
    a=6378137.0; f=1/298.257222101; k0=0.99982; lat0=math.radians(53.5); lon0=math.radians(-8); FE=600000; FN=750000
    b=a*(1-f); e2=(a*a-b*b)/(a*a); n=(a-b)/(a+b)
    def M(phi):
        return b*k0*((1+n+1.25*n*n+1.25*n**3)*(phi-lat0)-(3*n+3*n*n+21/8*n**3)*math.sin(phi-lat0)*math.cos(phi+lat0)
          +(15/8*n*n+15/8*n**3)*math.sin(2*(phi-lat0))*math.cos(2*(phi+lat0))-35/24*n**3*math.sin(3*(phi-lat0))*math.cos(3*(phi+lat0)))
    phi=lat0; m=0
    while True:
        phi=(N-FN-m)/(a*k0)+phi; m=M(phi)
        if abs(N-FN-m)<1e-5: break
    s=math.sin(phi); nu=a*k0/math.sqrt(1-e2*s*s); rho=a*k0*(1-e2)/(1-e2*s*s)**1.5; eta2=nu/rho-1
    t=math.tan(phi); sec=1/math.cos(phi)
    VII=t/(2*rho*nu); VIII=t/(24*rho*nu**3)*(5+3*t*t+eta2-9*t*t*eta2); IX=t/(720*rho*nu**5)*(61+90*t*t+45*t**4)
    X=sec/nu; XI=sec/(6*nu**3)*(nu/rho+2*t*t); XII=sec/(120*nu**5)*(5+28*t*t+24*t**4); XIIA=sec/(5040*nu**7)*(61+662*t*t+1320*t**4+720*t**6)
    dE=E-FE
    lat=phi-VII*dE**2+VIII*dE**4-IX*dE**6
    lon=lon0+X*dE-XI*dE**3+XII*dE**5-XIIA*dE**7
    return math.degrees(lat), math.degrees(lon)
def read_points(path):
    d=open(path,'rb').read(); i=100; pts=[]
    while i<len(d):
        num,ln=struct.unpack('>2i',d[i:i+8]); st=struct.unpack('<i',d[i+8:i+12])[0]
        if st==1: pts.append(struct.unpack('<2d',d[i+12:i+28]))
        else: pts.append(None)
        i+=8+ln*2
    return pts

GPKG, OD, SHP = (sys.argv[1:4] if len(sys.argv) >= 4 else ('GolfCourseMCE.gpkg', 'OD_matix.csv', 'Edited_BuiltupAreas.shp'))
c=sqlite3.connect(GPKG)
cols=('name,geom,"Category o",COUNTY,"Top 100 Go",Size,Area_ha,S_Quiet,S_Env,S_PT,CLASS_PT,In_SAC,In_SPA,TownURBAN_,Town_km,MCE_Bal,'
      'distance,Elev_mean,_mean,_max,"Class Desc",_15T1_1AGE,_30T1_1AGE,_60T1_1AGE,_15name_2_,_30name_co,_60name_co,_30DMDN_30,'
      'SAC_ITM__1,SPA_ITM__1,MCE_Conv,MCE_nocar,"S-Access",s_cover')
def centre(b):
    flags=b[3]; et=(flags>>1)&7; fmt='<4d' if flags&1 else '>4d'
    x0,x1,y0,y1=struct.unpack(fmt,b[8:40]); return (x0+x1)/2,(y0+y1)/2
courses={}; 
for r in c.execute(f'select {cols} from golfcoursep18 order by fid'):
    (name,geom,typ,county,top,size,area,q,env,pt,ptc,sac,spa,town,tkm,mce,
     coast_m,elev,slope,slope_max,cover,p15,p30,p60,n15,n30,n60,dem30,sac_pct,spa_pct,mce_conv,mce_nocar,acc,scover)=r
    rnd=lambda v,d=0: None if v is None else (round(v) if d==0 else round(v,d))
    if name in courses:   # same course split across a county boundary
        if county.title() not in courses[name]['county']: courses[name]['county']+=' / '+county.title()
        continue
    E,N=centre(geom); lat,lon=itm_to_wgs(E,N)
    courses[name]=dict(name=name,type=typ.lower(),county=county.title(),top100=top=='Yes',size=size,area=round(area),
        quiet=None if q is None else round(q,3),env=round(env,3),pt=pt,ptClass=ptc,sac=sac=='Yes',spa=spa=='Yes',
        town=town,town_km=tkm,lat=round(lat,5),lon=round(lon,5),
        coast_km=rnd(coast_m/1000,1), elev=rnd(elev), slope=rnd(slope,1), slope_max=rnd(slope_max,1), cover=cover,
        pop15=rnd(p15), pop30=rnd(p30), pop60=rnd(p60), n15=rnd(n15), n30=rnd(n30), n60=rnd(n60), demand30=dem30,
        sac_pct=rnd(sac_pct,1), spa_pct=rnd(spa_pct,1), access=rnd(acc,3), cover_s=rnd(scover,3),
        mce_bal=rnd(mce,3), mce_conv=rnd(mce_conv,3), mce_nocar=rnd(mce_nocar,3))
# towns: shapefile point order == OD destination order
pts=read_points(SHP)
rows=collections.defaultdict(list)
with open(OD,encoding='utf-8') as f:
    for r in csv.DictReader(f): rows[r['origin_id']].append(r)
seq=[r['destination_id'] for r in next(iter(rows.values()))]
assert len(seq)==len(pts)
towns=[]
for i,(n,p) in enumerate(zip(seq,pts)):
    la,lo=itm_to_wgs(*p); towns.append(dict(name=n,lat=round(la,5),lon=round(lo,5)))
cnt=collections.Counter(seq)
clist=list(courses.values())
def nearest_county(t):
    best=min(clist,key=lambda c:(c['lat']-t['lat'])**2+((c['lon']-t['lon'])*0.6)**2); return best['county'].split(' / ')[0]
uniq=[t for t in towns if cnt[t['name']]==1]
def near_town(t):
    return min(uniq,key=lambda u:(u['lat']-t['lat'])**2+((u['lon']-t['lon'])*0.6)**2)['name']
for t in towns:
    if cnt[t['name']]>1: t['name']=f"{t['name']} (near {near_town(t)})"
# make any still-identical labels unique
lab=collections.Counter(t['name'] for t in towns); k=collections.Counter()
for t in towns:
    if lab[t['name']]>1: k[t['name']]+=1; t['name']+=f" {k[t['name']]}"
# minutes matrix by POSITION (towns) x course order
idx={c['name']:i for i,c in enumerate(clist)}
M=[[None]*len(clist) for _ in towns]
for cname,rs in rows.items():
    if cname not in idx: continue
    j=idx[cname]
    for i,r in enumerate(rs):
        v=r['total_cost'].strip(); M[i][j]=None if not v else round(float(v)/60)
no_drive=[c['name'] for i,c in enumerate(clist) if all(M[t][i] is None for t in range(len(towns)))]
data=dict(courses=clist,towns=towns,minutes=M)
open('data.js','w',encoding='utf-8').write('const DATA='+json.dumps(data,ensure_ascii=False,separators=(',',':'))+';')
print(len(clist),'courses',len(towns),'towns; no drive route:',len(no_drive))
print([t['name'] for t in towns if '(' in t['name']])
print(no_drive)
