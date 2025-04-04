var wms_layers = [];


        var lyr_BDOrthoIGN_0 = new ol.layer.Tile({
            'title': 'BDOrtho IGN',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://openstreetmap.fr/bdortho">BDOrtho IGN</a>',
                url: 'https://proxy-ign.openstreetmap.fr/94GjiyqD/bdortho/{z}/{x}/{y}.jpg'
            })
        });
var format_Codeculture_1 = new ol.format.GeoJSON();
var features_Codeculture_1 = format_Codeculture_1.readFeatures(json_Codeculture_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codeculture_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codeculture_1.addFeatures(features_Codeculture_1);
var lyr_Codeculture_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codeculture_1, 
                style: style_Codeculture_1,
                popuplayertitle: 'Code culture',
                interactive: true,
    title: 'Code culture<br />\
    <img src="styles/legend/Codeculture_1_0.png" /> Blé tendre<br />\
    <img src="styles/legend/Codeculture_1_1.png" /> Gel<br />\
    <img src="styles/legend/Codeculture_1_2.png" /> Légumineuses à grains<br />\
    <img src="styles/legend/Codeculture_1_3.png" /> Fourrage<br />\
    <img src="styles/legend/Codeculture_1_4.png" /> Estives et landes<br />\
    <img src="styles/legend/Codeculture_1_5.png" /> Prairies permanentes<br />\
    <img src="styles/legend/Codeculture_1_6.png" /> Prairies temporaires<br />\
    <img src="styles/legend/Codeculture_1_7.png" /> Maïs grain et ensilage<br />\
    <img src="styles/legend/Codeculture_1_8.png" /> Vergers<br />\
    <img src="styles/legend/Codeculture_1_9.png" /> Vignes<br />\
    <img src="styles/legend/Codeculture_1_10.png" /> Autres cultures industrielles<br />\
    <img src="styles/legend/Codeculture_1_11.png" /> Légumes ou fleurs<br />\
    <img src="styles/legend/Codeculture_1_12.png" /> Divers<br />\
    <img src="styles/legend/Codeculture_1_13.png" /> Orge<br />\
    <img src="styles/legend/Codeculture_1_14.png" /> Autres céréales<br />\
    <img src="styles/legend/Codeculture_1_15.png" /> Colza<br />\
    <img src="styles/legend/Codeculture_1_16.png" /> Tournesol<br />\
    <img src="styles/legend/Codeculture_1_17.png" /> Autres oléagineux<br />\
    <img src="styles/legend/Codeculture_1_18.png" /> Protéagineux<br />\
    <img src="styles/legend/Codeculture_1_19.png" /> Plantes à fibres<br />' });
var format_PETRduPaysdeBray_2 = new ol.format.GeoJSON();
var features_PETRduPaysdeBray_2 = format_PETRduPaysdeBray_2.readFeatures(json_PETRduPaysdeBray_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PETRduPaysdeBray_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETRduPaysdeBray_2.addFeatures(features_PETRduPaysdeBray_2);
var lyr_PETRduPaysdeBray_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PETRduPaysdeBray_2, 
                style: style_PETRduPaysdeBray_2,
                popuplayertitle: 'PETR du Pays de Bray',
                interactive: true,
                title: '<img src="styles/legend/PETRduPaysdeBray_2.png" /> PETR du Pays de Bray'
            });
var format_SMBVdelaBresle_3 = new ol.format.GeoJSON();
var features_SMBVdelaBresle_3 = format_SMBVdelaBresle_3.readFeatures(json_SMBVdelaBresle_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMBVdelaBresle_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMBVdelaBresle_3.addFeatures(features_SMBVdelaBresle_3);
var lyr_SMBVdelaBresle_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMBVdelaBresle_3, 
                style: style_SMBVdelaBresle_3,
                popuplayertitle: 'SMBV de la Bresle',
                interactive: true,
                title: '<img src="styles/legend/SMBVdelaBresle_3.png" /> SMBV de la Bresle'
            });
var format_SMBVdelYres_4 = new ol.format.GeoJSON();
var features_SMBVdelYres_4 = format_SMBVdelYres_4.readFeatures(json_SMBVdelYres_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMBVdelYres_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMBVdelYres_4.addFeatures(features_SMBVdelYres_4);
var lyr_SMBVdelYres_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMBVdelYres_4, 
                style: style_SMBVdelYres_4,
                popuplayertitle: 'SMBV de l\'Yères',
                interactive: true,
                title: '<img src="styles/legend/SMBVdelYres_4.png" /> SMBV de l\'Yères'
            });
var format_SMBVdelArques_5 = new ol.format.GeoJSON();
var features_SMBVdelArques_5 = format_SMBVdelArques_5.readFeatures(json_SMBVdelArques_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMBVdelArques_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMBVdelArques_5.addFeatures(features_SMBVdelArques_5);
var lyr_SMBVdelArques_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMBVdelArques_5, 
                style: style_SMBVdelArques_5,
                popuplayertitle: 'SMBV de l\'Arques',
                interactive: true,
                title: '<img src="styles/legend/SMBVdelArques_5.png" /> SMBV de l\'Arques'
            });
var format_VilledeGisors_6 = new ol.format.GeoJSON();
var features_VilledeGisors_6 = format_VilledeGisors_6.readFeatures(json_VilledeGisors_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VilledeGisors_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VilledeGisors_6.addFeatures(features_VilledeGisors_6);
var lyr_VilledeGisors_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VilledeGisors_6, 
                style: style_VilledeGisors_6,
                popuplayertitle: 'Ville de Gisors',
                interactive: true,
                title: '<img src="styles/legend/VilledeGisors_6.png" /> Ville de Gisors'
            });
var format_SMBVCaillyAubetteRobec_7 = new ol.format.GeoJSON();
var features_SMBVCaillyAubetteRobec_7 = format_SMBVCaillyAubetteRobec_7.readFeatures(json_SMBVCaillyAubetteRobec_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMBVCaillyAubetteRobec_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMBVCaillyAubetteRobec_7.addFeatures(features_SMBVCaillyAubetteRobec_7);
var lyr_SMBVCaillyAubetteRobec_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMBVCaillyAubetteRobec_7, 
                style: style_SMBVCaillyAubetteRobec_7,
                popuplayertitle: 'SMBV Cailly-Aubette-Robec',
                interactive: true,
                title: '<img src="styles/legend/SMBVCaillyAubetteRobec_7.png" /> SMBV Cailly-Aubette-Robec'
            });
var format_Zoneshumides_8 = new ol.format.GeoJSON();
var features_Zoneshumides_8 = format_Zoneshumides_8.readFeatures(json_Zoneshumides_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoneshumides_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoneshumides_8.addFeatures(features_Zoneshumides_8);
var lyr_Zoneshumides_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoneshumides_8, 
                style: style_Zoneshumides_8,
                popuplayertitle: 'Zones humides',
                interactive: true,
                title: '<img src="styles/legend/Zoneshumides_8.png" /> Zones humides'
            });
var format_SitesNatura2000_9 = new ol.format.GeoJSON();
var features_SitesNatura2000_9 = format_SitesNatura2000_9.readFeatures(json_SitesNatura2000_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitesNatura2000_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitesNatura2000_9.addFeatures(features_SitesNatura2000_9);
var lyr_SitesNatura2000_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitesNatura2000_9, 
                style: style_SitesNatura2000_9,
                popuplayertitle: 'Sites Natura 2000',
                interactive: true,
                title: '<img src="styles/legend/SitesNatura2000_9.png" /> Sites Natura 2000'
            });
var format_Communes_10 = new ol.format.GeoJSON();
var features_Communes_10 = format_Communes_10.readFeatures(json_Communes_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_10.addFeatures(features_Communes_10);
var lyr_Communes_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communes_10, 
                style: style_Communes_10,
                popuplayertitle: 'Communes',
                interactive: true,
                title: '<img src="styles/legend/Communes_10.png" /> Communes'
            });
var format_PETRduPaysdeBray_11 = new ol.format.GeoJSON();
var features_PETRduPaysdeBray_11 = format_PETRduPaysdeBray_11.readFeatures(json_PETRduPaysdeBray_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PETRduPaysdeBray_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETRduPaysdeBray_11.addFeatures(features_PETRduPaysdeBray_11);
var lyr_PETRduPaysdeBray_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PETRduPaysdeBray_11, 
                style: style_PETRduPaysdeBray_11,
                popuplayertitle: 'PETR du Pays de Bray',
                interactive: false,
                title: '<img src="styles/legend/PETRduPaysdeBray_11.png" /> PETR du Pays de Bray'
            });
var format_Masque_12 = new ol.format.GeoJSON();
var features_Masque_12 = format_Masque_12.readFeatures(json_Masque_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Masque_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Masque_12.addFeatures(features_Masque_12);
var lyr_Masque_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Masque_12, 
                style: style_Masque_12,
                popuplayertitle: 'Masque',
                interactive: false,
                title: '<img src="styles/legend/Masque_12.png" /> Masque'
            });
var format_Nomdescommunes_13 = new ol.format.GeoJSON();
var features_Nomdescommunes_13 = format_Nomdescommunes_13.readFeatures(json_Nomdescommunes_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nomdescommunes_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nomdescommunes_13.addFeatures(features_Nomdescommunes_13);
var lyr_Nomdescommunes_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nomdescommunes_13, 
                style: style_Nomdescommunes_13,
                popuplayertitle: 'Nom des communes',
                interactive: true,
                title: 'Nom des communes'
            });
var group_Habillage = new ol.layer.Group({
                                layers: [lyr_Masque_12,lyr_Nomdescommunes_13,],
                                fold: "open",
                                title: 'Habillage'});
var group_Limitesadministratives = new ol.layer.Group({
                                layers: [lyr_Communes_10,lyr_PETRduPaysdeBray_11,],
                                fold: "open",
                                title: 'Limites administratives'});
var group_Zonagesenvironnementaux = new ol.layer.Group({
                                layers: [lyr_Zoneshumides_8,lyr_SitesNatura2000_9,],
                                fold: "open",
                                title: 'Zonages environnementaux'});
var group_StructuresanimatricesMAEC = new ol.layer.Group({
                                layers: [lyr_PETRduPaysdeBray_2,lyr_SMBVdelaBresle_3,lyr_SMBVdelYres_4,lyr_SMBVdelArques_5,lyr_VilledeGisors_6,lyr_SMBVCaillyAubetteRobec_7,],
                                fold: "open",
                                title: 'Structures animatrices MAEC'});
var group_Parcellesagricoles = new ol.layer.Group({
                                layers: [lyr_Codeculture_1,],
                                fold: "open",
                                title: 'Parcelles agricoles'});

lyr_BDOrthoIGN_0.setVisible(true);lyr_Codeculture_1.setVisible(true);lyr_PETRduPaysdeBray_2.setVisible(true);lyr_SMBVdelaBresle_3.setVisible(true);lyr_SMBVdelYres_4.setVisible(true);lyr_SMBVdelArques_5.setVisible(true);lyr_VilledeGisors_6.setVisible(true);lyr_SMBVCaillyAubetteRobec_7.setVisible(true);lyr_Zoneshumides_8.setVisible(true);lyr_SitesNatura2000_9.setVisible(true);lyr_Communes_10.setVisible(true);lyr_PETRduPaysdeBray_11.setVisible(true);lyr_Masque_12.setVisible(true);lyr_Nomdescommunes_13.setVisible(true);
var layersList = [lyr_BDOrthoIGN_0,group_Parcellesagricoles,group_StructuresanimatricesMAEC,group_Zonagesenvironnementaux,group_Limitesadministratives,group_Habillage];
lyr_Codeculture_1.set('fieldAliases', {'ID_PARCEL': 'ID_PARCEL', 'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', 'CULTURE_D1': 'CULTURE_D1', 'CULTURE_D2': 'CULTURE_D2', });
lyr_PETRduPaysdeBray_2.set('fieldAliases', {'LibelleOpe': 'LibelleOpe', 'LibellePAE': 'LibellePAE', 'SurfacePAE': 'SurfacePAE', });
lyr_SMBVdelaBresle_3.set('fieldAliases', {'Libelle': 'Libelle', 'Idenr': 'Idenr', 'Surface': 'Surface', });
lyr_SMBVdelYres_4.set('fieldAliases', {'LibelleOpe': 'LibelleOpe', 'LibellePAE': 'LibellePAE', 'Surface': 'Surface', });
lyr_SMBVdelArques_5.set('fieldAliases', {'LibelleOpe': 'LibelleOpe', 'LibellePAE': 'LibellePAE', 'SurfacePAE': 'SurfacePAE', });
lyr_VilledeGisors_6.set('fieldAliases', {'LIBELLEOPE': 'LIBELLEOPE', 'LIBELLEPAE': 'LIBELLEPAE', 'Surface': 'Surface', 'Opérateur': 'Opérateur', });
lyr_SMBVCaillyAubetteRobec_7.set('fieldAliases', {'LibelleOpe': 'LibelleOpe', 'LibellePAE': 'LibellePAE', 'Champident': 'Champident', 'Surface': 'Surface', 'Nom': 'Nom', });
lyr_Zoneshumides_8.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'URLMETAD': 'URLMETAD', });
lyr_SitesNatura2000_9.set('fieldAliases', {'NOM': 'NOM', });
lyr_Communes_10.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', 'layer': 'layer', 'path': 'path', });
lyr_PETRduPaysdeBray_11.set('fieldAliases', {'ID': 'ID', 'CODE_SIREN': 'CODE_SIREN', 'NATURE': 'NATURE', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', 'layer': 'layer', 'path': 'path', });
lyr_Masque_12.set('fieldAliases', {'id': 'id', });
lyr_Nomdescommunes_13.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', 'layer': 'layer', 'path': 'path', });
lyr_Codeculture_1.set('fieldImages', {'ID_PARCEL': 'TextEdit', 'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', 'CULTURE_D1': 'TextEdit', 'CULTURE_D2': 'TextEdit', });
lyr_PETRduPaysdeBray_2.set('fieldImages', {'LibelleOpe': 'TextEdit', 'LibellePAE': 'TextEdit', 'SurfacePAE': 'TextEdit', });
lyr_SMBVdelaBresle_3.set('fieldImages', {'Libelle': 'TextEdit', 'Idenr': 'TextEdit', 'Surface': 'TextEdit', });
lyr_SMBVdelYres_4.set('fieldImages', {'LibelleOpe': 'TextEdit', 'LibellePAE': 'TextEdit', 'Surface': 'TextEdit', });
lyr_SMBVdelArques_5.set('fieldImages', {'LibelleOpe': 'TextEdit', 'LibellePAE': 'TextEdit', 'SurfacePAE': 'TextEdit', });
lyr_VilledeGisors_6.set('fieldImages', {'LIBELLEOPE': 'TextEdit', 'LIBELLEPAE': 'TextEdit', 'Surface': 'TextEdit', 'Opérateur': 'TextEdit', });
lyr_SMBVCaillyAubetteRobec_7.set('fieldImages', {'LibelleOpe': 'TextEdit', 'LibellePAE': 'TextEdit', 'Champident': 'TextEdit', 'Surface': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Zoneshumides_8.set('fieldImages', {'LIBELLE': 'TextEdit', 'URLMETAD': 'TextEdit', });
lyr_SitesNatura2000_9.set('fieldImages', {'NOM': 'TextEdit', });
lyr_Communes_10.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_PETRduPaysdeBray_11.set('fieldImages', {'ID': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'NATURE': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Masque_12.set('fieldImages', {'id': 'TextEdit', });
lyr_Nomdescommunes_13.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Codeculture_1.set('fieldLabels', {'ID_PARCEL': 'hidden field', 'SURF_PARC': 'header label - visible with data', 'CODE_CULTU': 'header label - visible with data', 'CODE_GROUP': 'hidden field', 'CULTURE_D1': 'hidden field', 'CULTURE_D2': 'hidden field', });
lyr_PETRduPaysdeBray_2.set('fieldLabels', {'LibelleOpe': 'hidden field', 'LibellePAE': 'hidden field', 'SurfacePAE': 'hidden field', });
lyr_SMBVdelaBresle_3.set('fieldLabels', {'Libelle': 'hidden field', 'Idenr': 'hidden field', 'Surface': 'hidden field', });
lyr_SMBVdelYres_4.set('fieldLabels', {'LibelleOpe': 'hidden field', 'LibellePAE': 'hidden field', 'Surface': 'hidden field', });
lyr_SMBVdelArques_5.set('fieldLabels', {'LibelleOpe': 'hidden field', 'LibellePAE': 'hidden field', 'SurfacePAE': 'hidden field', });
lyr_VilledeGisors_6.set('fieldLabels', {'LIBELLEOPE': 'hidden field', 'LIBELLEPAE': 'hidden field', 'Surface': 'hidden field', 'Opérateur': 'hidden field', });
lyr_SMBVCaillyAubetteRobec_7.set('fieldLabels', {'LibelleOpe': 'hidden field', 'LibellePAE': 'hidden field', 'Champident': 'hidden field', 'Surface': 'hidden field', 'Nom': 'hidden field', });
lyr_Zoneshumides_8.set('fieldLabels', {'LIBELLE': 'hidden field', 'URLMETAD': 'hidden field', });
lyr_SitesNatura2000_9.set('fieldLabels', {'NOM': 'hidden field', });
lyr_Communes_10.set('fieldLabels', {'ID': 'hidden field', 'INSEE_COM': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'hidden field', 'SURFACE_HA': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'hidden field', 'NOM': 'header label - visible with data', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'SIREN_EPCI': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'CODE_SIREN': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_PETRduPaysdeBray_11.set('fieldLabels', {'ID': 'hidden field', 'CODE_SIREN': 'hidden field', 'NATURE': 'hidden field', 'NOM': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Masque_12.set('fieldLabels', {'id': 'hidden field', });
lyr_Nomdescommunes_13.set('fieldLabels', {'ID': 'hidden field', 'INSEE_COM': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'hidden field', 'SURFACE_HA': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'hidden field', 'NOM': 'hidden field', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'SIREN_EPCI': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'CODE_SIREN': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Nomdescommunes_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});