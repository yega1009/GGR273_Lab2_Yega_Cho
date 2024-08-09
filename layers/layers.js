var wms_layers = [];

var format_AlbertaBoundary_0 = new ol.format.GeoJSON();
var features_AlbertaBoundary_0 = format_AlbertaBoundary_0.readFeatures(json_AlbertaBoundary_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlbertaBoundary_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlbertaBoundary_0.addFeatures(features_AlbertaBoundary_0);
var lyr_AlbertaBoundary_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlbertaBoundary_0, 
                style: style_AlbertaBoundary_0,
                popuplayertitle: "AlbertaBoundary",
                interactive: false,
                title: '<img src="styles/legend/AlbertaBoundary_0.png" /> AlbertaBoundary'
            });
var format_AlbertaWaterbodies_1 = new ol.format.GeoJSON();
var features_AlbertaWaterbodies_1 = format_AlbertaWaterbodies_1.readFeatures(json_AlbertaWaterbodies_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlbertaWaterbodies_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlbertaWaterbodies_1.addFeatures(features_AlbertaWaterbodies_1);
var lyr_AlbertaWaterbodies_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlbertaWaterbodies_1, 
                style: style_AlbertaWaterbodies_1,
                popuplayertitle: "Alberta Waterbodies",
                interactive: false,
                title: '<img src="styles/legend/AlbertaWaterbodies_1.png" /> Alberta Waterbodies'
            });
var format_FishStockingPoints_2 = new ol.format.GeoJSON();
var features_FishStockingPoints_2 = format_FishStockingPoints_2.readFeatures(json_FishStockingPoints_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FishStockingPoints_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FishStockingPoints_2.addFeatures(features_FishStockingPoints_2);
var lyr_FishStockingPoints_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FishStockingPoints_2, 
                style: style_FishStockingPoints_2,
                popuplayertitle: "Fish Stocking Points",
                interactive: true,
    title: 'Fish Stocking Points<br />\
    <img src="styles/legend/FishStockingPoints_2_0.png" /> 0 - 1125<br />\
    <img src="styles/legend/FishStockingPoints_2_1.png" /> 1125 - 3000<br />\
    <img src="styles/legend/FishStockingPoints_2_2.png" /> 3000 - 6400<br />\
    <img src="styles/legend/FishStockingPoints_2_3.png" /> 6400 - 11500<br />\
    <img src="styles/legend/FishStockingPoints_2_4.png" /> 11500 - 20000<br />\
    <img src="styles/legend/FishStockingPoints_2_5.png" /> 20000 - 35000<br />\
    <img src="styles/legend/FishStockingPoints_2_6.png" /> 35000 - 60000<br />\
    <img src="styles/legend/FishStockingPoints_2_7.png" /> 60000 - 110000<br />'
        });

lyr_AlbertaBoundary_0.setVisible(true);lyr_AlbertaWaterbodies_1.setVisible(true);lyr_FishStockingPoints_2.setVisible(true);
var layersList = [lyr_AlbertaBoundary_0,lyr_AlbertaWaterbodies_1,lyr_FishStockingPoints_2];
lyr_AlbertaBoundary_0.set('fieldAliases', {'PRUID': 'PRUID', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_AlbertaWaterbodies_1.set('fieldAliases', {'HYDROUID': 'HYDROUID', 'NAME': 'NAME', 'RANK': 'RANK', 'PRUID': 'PRUID', 'PRUID_2': 'PRUID_2', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_FishStockingPoints_2.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'WATERBODY': 'WATERBODY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SPECIES': 'SPECIES', 'GENOTYPE': 'GENOTYPE', 'STOCKED': 'STOCKED', 'STOCKNUM': 'STOCKNUM', 'PLANNED_ST': 'PLANNED_ST', 'Map Auth_2': 'Map Auth_2', 'MapAuthor': 'MapAuthor', 'NumStock': 'NumStock', });
lyr_AlbertaBoundary_0.set('fieldImages', {'PRUID': 'TextEdit', 'DGUID': 'TextEdit', 'PRNAME': 'TextEdit', 'PRENAME': 'TextEdit', 'PRFNAME': 'TextEdit', 'PREABBR': 'TextEdit', 'PRFABBR': 'TextEdit', 'LANDAREA': 'TextEdit', });
lyr_AlbertaWaterbodies_1.set('fieldImages', {'HYDROUID': 'TextEdit', 'NAME': 'TextEdit', 'RANK': 'Range', 'PRUID': 'TextEdit', 'PRUID_2': 'TextEdit', 'DGUID': 'TextEdit', 'PRNAME': 'TextEdit', 'PRENAME': 'TextEdit', 'PRFNAME': 'TextEdit', 'PREABBR': 'TextEdit', 'PRFABBR': 'TextEdit', 'LANDAREA': 'TextEdit', });
lyr_FishStockingPoints_2.set('fieldImages', {'DISTRICT': 'TextEdit', 'WATERBODY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SPECIES': 'TextEdit', 'GENOTYPE': 'TextEdit', 'STOCKED': 'TextEdit', 'STOCKNUM': 'TextEdit', 'PLANNED_ST': 'TextEdit', 'Map Auth_2': 'TextEdit', 'MapAuthor': 'TextEdit', 'NumStock': 'Range', });
lyr_AlbertaBoundary_0.set('fieldLabels', {'PRUID': 'no label', 'DGUID': 'no label', 'PRNAME': 'no label', 'PRENAME': 'no label', 'PRFNAME': 'no label', 'PREABBR': 'no label', 'PRFABBR': 'no label', 'LANDAREA': 'no label', });
lyr_AlbertaWaterbodies_1.set('fieldLabels', {'HYDROUID': 'no label', 'NAME': 'no label', 'RANK': 'no label', 'PRUID': 'no label', 'PRUID_2': 'no label', 'DGUID': 'no label', 'PRNAME': 'no label', 'PRENAME': 'no label', 'PRFNAME': 'no label', 'PREABBR': 'no label', 'PRFABBR': 'no label', 'LANDAREA': 'no label', });
lyr_FishStockingPoints_2.set('fieldLabels', {'DISTRICT': 'inline label - visible with data', 'WATERBODY': 'inline label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'SPECIES': 'inline label - visible with data', 'GENOTYPE': 'inline label - visible with data', 'STOCKED': 'hidden field', 'STOCKNUM': 'hidden field', 'PLANNED_ST': 'inline label - visible with data', 'Map Auth_2': 'hidden field', 'MapAuthor': 'header label - always visible', 'NumStock': 'inline label - always visible', });
lyr_FishStockingPoints_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});