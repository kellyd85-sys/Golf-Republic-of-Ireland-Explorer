var wms_layers = [];

var format_Ireland_Boundary_0 = new ol.format.GeoJSON();
var features_Ireland_Boundary_0 = format_Ireland_Boundary_0.readFeatures(json_Ireland_Boundary_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ireland_Boundary_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ireland_Boundary_0.addFeatures(features_Ireland_Boundary_0);
var lyr_Ireland_Boundary_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ireland_Boundary_0, 
                style: style_Ireland_Boundary_0,
                popuplayertitle: 'Ireland_Boundary ',
                interactive: false,
                title: '<img src="styles/legend/Ireland_Boundary_0.png" /> Ireland_Boundary '
            });
var format_GolfCourseMCEgolfcoursep18_1 = new ol.format.GeoJSON();
var features_GolfCourseMCEgolfcoursep18_1 = format_GolfCourseMCEgolfcoursep18_1.readFeatures(json_GolfCourseMCEgolfcoursep18_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GolfCourseMCEgolfcoursep18_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GolfCourseMCEgolfcoursep18_1.addFeatures(features_GolfCourseMCEgolfcoursep18_1);
var lyr_GolfCourseMCEgolfcoursep18_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GolfCourseMCEgolfcoursep18_1, 
                style: style_GolfCourseMCEgolfcoursep18_1,
                popuplayertitle: 'GolfCourseMCE — golfcoursep18',
                interactive: true,
    title: 'GolfCourseMCE — golfcoursep18<br />\
    <img src="styles/legend/GolfCourseMCEgolfcoursep18_1_0.png" /> Heathland<br />\
    <img src="styles/legend/GolfCourseMCEgolfcoursep18_1_1.png" /> Links<br />\
    <img src="styles/legend/GolfCourseMCEgolfcoursep18_1_2.png" /> Parkland<br />\
    <img src="styles/legend/GolfCourseMCEgolfcoursep18_1_3.png" /> Upland<br />' });
var group_InterfaceLayers = new ol.layer.Group({
                                layers: [lyr_GolfCourseMCEgolfcoursep18_1,],
                                fold: 'open',
                                title: 'Interface-Layers'});

lyr_Ireland_Boundary_0.setVisible(true);lyr_GolfCourseMCEgolfcoursep18_1.setVisible(true);
var layersList = [lyr_Ireland_Boundary_0,group_InterfaceLayers];
lyr_Ireland_Boundary_0.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ED_ID': 'ED_ID', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY': 'COUNTY', 'CONTAE': 'CONTAE', 'PROVINCE': 'PROVINCE', 'CENTROID_X': 'CENTROID_X', 'CENTROID_Y': 'CENTROID_Y', 'GUID_': 'GUID_', 'CSOED_3409': 'CSOED_3409', 'OSIED_3441': 'OSIED_3441', 'CSOED_34_1': 'CSOED_34_1', 'GEOGID': 'GEOGID', 'T1_1AGETM': 'T1_1AGETM', 'T1_1AGETF': 'T1_1AGETF', 'T1_1AGETT': 'T1_1AGETT', 'T6_8_O': 'T6_8_O', 'T6_8_TA': 'T6_8_TA', 'T6_8_UHH': 'T6_8_UHH', 'T6_8_OVD': 'T6_8_OVD', 'T6_8_T': 'T6_8_T', 'EDarea': 'EDarea', });
lyr_GolfCourseMCEgolfcoursep18_1.set('fieldAliases', {'fid': 'fid', 'leisure': 'leisure', 'name': 'name', 'Area_ha': 'Area_ha', 'Size': 'Size', 'Overlap_ha': 'Overlap_ha', 'Top 100 Go': 'Top 100 Go', 'distance': 'distance', 'Distance f': 'Distance f', '_mean': '_mean', '_max': '_max', 'Class Desc': 'Class Desc', 'Elev_mean': 'Elev_mean', 'Category o': 'Category o', 'COUNTY': 'COUNTY', 'TownURBAN_': 'TownURBAN_', 'TownT1_1AG': 'TownT1_1AG', 'distance_2': 'distance_2', 'Town_km': 'Town_km', 'sum': 'sum', 'Pop_10km': 'Pop_10km', 'SAC_ITM_20': 'SAC_ITM_20', 'SAC_ITM__1': 'SAC_ITM__1', 'SPA_ITM_20': 'SPA_ITM_20', 'SPA_ITM__1': 'SPA_ITM__1', 'In_SAC': 'In_SAC', 'In_SPA': 'In_SPA', 'CLASS_PT': 'CLASS_PT', 'departur_2': 'departur_2', '_15T1_1AGE': '_15T1_1AGE', '_15name_2_': '_15name_2_', '_15DMND_15': '_15DMND_15', '_30T1_1AGE': '_30T1_1AGE', '_30name_co': '_30name_co', '_30DMDN_30': '_30DMDN_30', '_60name_co': '_60name_co', '_60T1_1AGE': '_60T1_1AGE', '_60DMND_60': '_60DMND_60', 'S-Access': 'S-Access', 'S_Quiet': 'S_Quiet', 'S_PT': 'S_PT', 's_cover': 's_cover', 'S_Env': 'S_Env', 'MCE_Bal': 'MCE_Bal', 'MCE_Conv': 'MCE_Conv', 'MCE_nocar': 'MCE_nocar', 'MCE_Scenic': 'MCE_Scenic', });
lyr_Ireland_Boundary_0.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ED_ID': 'TextEdit', 'ED_ENGLISH': 'TextEdit', 'ED_GAEILGE': 'TextEdit', 'COUNTY': 'TextEdit', 'CONTAE': 'TextEdit', 'PROVINCE': 'TextEdit', 'CENTROID_X': 'TextEdit', 'CENTROID_Y': 'TextEdit', 'GUID_': 'TextEdit', 'CSOED_3409': 'TextEdit', 'OSIED_3441': 'TextEdit', 'CSOED_34_1': 'TextEdit', 'GEOGID': 'TextEdit', 'T1_1AGETM': 'TextEdit', 'T1_1AGETF': 'TextEdit', 'T1_1AGETT': 'TextEdit', 'T6_8_O': 'TextEdit', 'T6_8_TA': 'TextEdit', 'T6_8_UHH': 'TextEdit', 'T6_8_OVD': 'TextEdit', 'T6_8_T': 'TextEdit', 'EDarea': 'TextEdit', });
lyr_GolfCourseMCEgolfcoursep18_1.set('fieldImages', {'fid': 'TextEdit', 'leisure': 'TextEdit', 'name': 'TextEdit', 'Area_ha': 'TextEdit', 'Size': 'TextEdit', 'Overlap_ha': 'TextEdit', 'Top 100 Go': 'TextEdit', 'distance': 'TextEdit', 'Distance f': 'TextEdit', '_mean': 'TextEdit', '_max': 'TextEdit', 'Class Desc': 'TextEdit', 'Elev_mean': 'TextEdit', 'Category o': 'TextEdit', 'COUNTY': 'TextEdit', 'TownURBAN_': 'TextEdit', 'TownT1_1AG': 'TextEdit', 'distance_2': 'TextEdit', 'Town_km': 'TextEdit', 'sum': 'TextEdit', 'Pop_10km': 'TextEdit', 'SAC_ITM_20': 'TextEdit', 'SAC_ITM__1': 'TextEdit', 'SPA_ITM_20': 'TextEdit', 'SPA_ITM__1': 'TextEdit', 'In_SAC': 'TextEdit', 'In_SPA': 'TextEdit', 'CLASS_PT': 'TextEdit', 'departur_2': 'TextEdit', '_15T1_1AGE': 'TextEdit', '_15name_2_': 'TextEdit', '_15DMND_15': 'TextEdit', '_30T1_1AGE': 'TextEdit', '_30name_co': 'TextEdit', '_30DMDN_30': 'TextEdit', '_60name_co': 'TextEdit', '_60T1_1AGE': 'TextEdit', '_60DMND_60': 'TextEdit', 'S-Access': 'TextEdit', 'S_Quiet': 'TextEdit', 'S_PT': 'TextEdit', 's_cover': 'TextEdit', 'S_Env': 'TextEdit', 'MCE_Bal': 'TextEdit', 'MCE_Conv': 'TextEdit', 'MCE_nocar': 'TextEdit', 'MCE_Scenic': 'TextEdit', });
lyr_Ireland_Boundary_0.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'no label', 'ED_ID': 'no label', 'ED_ENGLISH': 'no label', 'ED_GAEILGE': 'no label', 'COUNTY': 'no label', 'CONTAE': 'no label', 'PROVINCE': 'no label', 'CENTROID_X': 'no label', 'CENTROID_Y': 'no label', 'GUID_': 'no label', 'CSOED_3409': 'no label', 'OSIED_3441': 'no label', 'CSOED_34_1': 'no label', 'GEOGID': 'no label', 'T1_1AGETM': 'no label', 'T1_1AGETF': 'no label', 'T1_1AGETT': 'no label', 'T6_8_O': 'no label', 'T6_8_TA': 'no label', 'T6_8_UHH': 'no label', 'T6_8_OVD': 'no label', 'T6_8_T': 'no label', 'EDarea': 'no label', });
lyr_GolfCourseMCEgolfcoursep18_1.set('fieldLabels', {'fid': 'hidden field', 'leisure': 'hidden field', 'name': 'inline label - visible with data', 'Area_ha': 'hidden field', 'Size': 'inline label - visible with data', 'Overlap_ha': 'hidden field', 'Top 100 Go': 'hidden field', 'distance': 'hidden field', 'Distance f': 'hidden field', '_mean': 'hidden field', '_max': 'hidden field', 'Class Desc': 'hidden field', 'Elev_mean': 'hidden field', 'Category o': 'inline label - visible with data', 'COUNTY': 'inline label - visible with data', 'TownURBAN_': 'inline label - visible with data', 'TownT1_1AG': 'inline label - visible with data', 'distance_2': 'hidden field', 'Town_km': 'hidden field', 'sum': 'hidden field', 'Pop_10km': 'hidden field', 'SAC_ITM_20': 'hidden field', 'SAC_ITM__1': 'hidden field', 'SPA_ITM_20': 'hidden field', 'SPA_ITM__1': 'hidden field', 'In_SAC': 'hidden field', 'In_SPA': 'hidden field', 'CLASS_PT': 'hidden field', 'departur_2': 'hidden field', '_15T1_1AGE': 'hidden field', '_15name_2_': 'hidden field', '_15DMND_15': 'hidden field', '_30T1_1AGE': 'hidden field', '_30name_co': 'hidden field', '_30DMDN_30': 'hidden field', '_60name_co': 'hidden field', '_60T1_1AGE': 'hidden field', '_60DMND_60': 'hidden field', 'S-Access': 'hidden field', 'S_Quiet': 'hidden field', 'S_PT': 'hidden field', 's_cover': 'hidden field', 'S_Env': 'hidden field', 'MCE_Bal': 'hidden field', 'MCE_Conv': 'hidden field', 'MCE_nocar': 'hidden field', 'MCE_Scenic': 'hidden field', });
lyr_GolfCourseMCEgolfcoursep18_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});