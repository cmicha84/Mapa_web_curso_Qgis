var wms_layers = [];

var format_manzanas1_0 = new ol.format.GeoJSON();
var features_manzanas1_0 = format_manzanas1_0.readFeatures(json_manzanas1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_manzanas1_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_manzanas1_0.addFeatures(features_manzanas1_0);
var lyr_manzanas1_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_manzanas1_0, 
                style: style_manzanas1_0,
                interactive: true,
    title: 'manzanas1<br />\
    <img src="styles/legend/manzanas1_0_0.png" /> SECTOR 1<br />\
    <img src="styles/legend/manzanas1_0_1.png" /> SECTOR 18<br />\
    <img src="styles/legend/manzanas1_0_2.png" /> SECTOR 2<br />\
    <img src="styles/legend/manzanas1_0_3.png" /> SECTOR 3<br />\
    <img src="styles/legend/manzanas1_0_4.png" /> SECTOR 4<br />\
    <img src="styles/legend/manzanas1_0_5.png" /> SECTOR 7<br />\
    <img src="styles/legend/manzanas1_0_6.png" /> SECTOR 8<br />\
    <img src="styles/legend/manzanas1_0_7.png" /> <br />'
        });
var format_sectores1_1 = new ol.format.GeoJSON();
var features_sectores1_1 = format_sectores1_1.readFeatures(json_sectores1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sectores1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sectores1_1.addFeatures(features_sectores1_1);
var lyr_sectores1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sectores1_1, 
                style: style_sectores1_1,
                interactive: true,
                title: '<img src="styles/legend/sectores1_1.png" /> sectores1'
            });

lyr_manzanas1_0.setVisible(true);lyr_sectores1_1.setVisible(true);
var layersList = [lyr_manzanas1_0,lyr_sectores1_1];
lyr_manzanas1_0.set('fieldAliases', {'cod_mz': 'cod_mz', 'cod_sector': 'cod_sector', });
lyr_sectores1_1.set('fieldAliases', {'cod_sector': 'cod_sector', });
lyr_manzanas1_0.set('fieldImages', {'cod_mz': 'TextEdit', 'cod_sector': 'TextEdit', });
lyr_sectores1_1.set('fieldImages', {'cod_sector': 'TextEdit', });
lyr_manzanas1_0.set('fieldLabels', {'cod_mz': 'no label', 'cod_sector': 'no label', });
lyr_sectores1_1.set('fieldLabels', {'cod_sector': 'inline label', });
lyr_sectores1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});