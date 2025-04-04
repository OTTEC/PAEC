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
var format_Plantesfibres_1 = new ol.format.GeoJSON();
var features_Plantesfibres_1 = format_Plantesfibres_1.readFeatures(json_Plantesfibres_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plantesfibres_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plantesfibres_1.addFeatures(features_Plantesfibres_1);
var lyr_Plantesfibres_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plantesfibres_1, 
                style: style_Plantesfibres_1,
                popuplayertitle: 'Plantes à fibres',
                interactive: true,
                title: '<img src="styles/legend/Plantesfibres_1.png" /> Plantes à fibres'
            });
var format_Protagineux_2 = new ol.format.GeoJSON();
var features_Protagineux_2 = format_Protagineux_2.readFeatures(json_Protagineux_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Protagineux_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Protagineux_2.addFeatures(features_Protagineux_2);
var lyr_Protagineux_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Protagineux_2, 
                style: style_Protagineux_2,
                popuplayertitle: 'Protéagineux',
                interactive: true,
                title: '<img src="styles/legend/Protagineux_2.png" /> Protéagineux'
            });
var format_Autresolagineux_3 = new ol.format.GeoJSON();
var features_Autresolagineux_3 = format_Autresolagineux_3.readFeatures(json_Autresolagineux_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Autresolagineux_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Autresolagineux_3.addFeatures(features_Autresolagineux_3);
var lyr_Autresolagineux_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Autresolagineux_3, 
                style: style_Autresolagineux_3,
                popuplayertitle: 'Autres oléagineux',
                interactive: true,
                title: '<img src="styles/legend/Autresolagineux_3.png" /> Autres oléagineux'
            });
var format_Tournesol_4 = new ol.format.GeoJSON();
var features_Tournesol_4 = format_Tournesol_4.readFeatures(json_Tournesol_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tournesol_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tournesol_4.addFeatures(features_Tournesol_4);
var lyr_Tournesol_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tournesol_4, 
                style: style_Tournesol_4,
                popuplayertitle: 'Tournesol',
                interactive: true,
                title: '<img src="styles/legend/Tournesol_4.png" /> Tournesol'
            });
var format_Colza_5 = new ol.format.GeoJSON();
var features_Colza_5 = format_Colza_5.readFeatures(json_Colza_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colza_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colza_5.addFeatures(features_Colza_5);
var lyr_Colza_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colza_5, 
                style: style_Colza_5,
                popuplayertitle: 'Colza',
                interactive: true,
                title: '<img src="styles/legend/Colza_5.png" /> Colza'
            });
var format_Autrescrales_6 = new ol.format.GeoJSON();
var features_Autrescrales_6 = format_Autrescrales_6.readFeatures(json_Autrescrales_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Autrescrales_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Autrescrales_6.addFeatures(features_Autrescrales_6);
var lyr_Autrescrales_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Autrescrales_6, 
                style: style_Autrescrales_6,
                popuplayertitle: 'Autres céréales',
                interactive: true,
                title: '<img src="styles/legend/Autrescrales_6.png" /> Autres céréales'
            });
var format_Orge_7 = new ol.format.GeoJSON();
var features_Orge_7 = format_Orge_7.readFeatures(json_Orge_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Orge_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Orge_7.addFeatures(features_Orge_7);
var lyr_Orge_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Orge_7, 
                style: style_Orge_7,
                popuplayertitle: 'Orge',
                interactive: true,
                title: '<img src="styles/legend/Orge_7.png" /> Orge'
            });
var format_Divers_8 = new ol.format.GeoJSON();
var features_Divers_8 = format_Divers_8.readFeatures(json_Divers_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Divers_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Divers_8.addFeatures(features_Divers_8);
var lyr_Divers_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Divers_8, 
                style: style_Divers_8,
                popuplayertitle: 'Divers',
                interactive: true,
                title: '<img src="styles/legend/Divers_8.png" /> Divers'
            });
var format_Lgumesoufleurs_9 = new ol.format.GeoJSON();
var features_Lgumesoufleurs_9 = format_Lgumesoufleurs_9.readFeatures(json_Lgumesoufleurs_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lgumesoufleurs_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lgumesoufleurs_9.addFeatures(features_Lgumesoufleurs_9);
var lyr_Lgumesoufleurs_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lgumesoufleurs_9, 
                style: style_Lgumesoufleurs_9,
                popuplayertitle: 'Légumes ou fleurs',
                interactive: true,
                title: '<img src="styles/legend/Lgumesoufleurs_9.png" /> Légumes ou fleurs'
            });
var format_Autresculturesindustrielles_10 = new ol.format.GeoJSON();
var features_Autresculturesindustrielles_10 = format_Autresculturesindustrielles_10.readFeatures(json_Autresculturesindustrielles_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Autresculturesindustrielles_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Autresculturesindustrielles_10.addFeatures(features_Autresculturesindustrielles_10);
var lyr_Autresculturesindustrielles_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Autresculturesindustrielles_10, 
                style: style_Autresculturesindustrielles_10,
                popuplayertitle: 'Autres cultures industrielles',
                interactive: true,
                title: '<img src="styles/legend/Autresculturesindustrielles_10.png" /> Autres cultures industrielles'
            });
var format_Vignes_11 = new ol.format.GeoJSON();
var features_Vignes_11 = format_Vignes_11.readFeatures(json_Vignes_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vignes_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vignes_11.addFeatures(features_Vignes_11);
var lyr_Vignes_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vignes_11, 
                style: style_Vignes_11,
                popuplayertitle: 'Vignes',
                interactive: true,
                title: '<img src="styles/legend/Vignes_11.png" /> Vignes'
            });
var format_Vergers_12 = new ol.format.GeoJSON();
var features_Vergers_12 = format_Vergers_12.readFeatures(json_Vergers_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vergers_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vergers_12.addFeatures(features_Vergers_12);
var lyr_Vergers_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vergers_12, 
                style: style_Vergers_12,
                popuplayertitle: 'Vergers',
                interactive: true,
                title: '<img src="styles/legend/Vergers_12.png" /> Vergers'
            });
var format_Masgrainetensilage_13 = new ol.format.GeoJSON();
var features_Masgrainetensilage_13 = format_Masgrainetensilage_13.readFeatures(json_Masgrainetensilage_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Masgrainetensilage_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Masgrainetensilage_13.addFeatures(features_Masgrainetensilage_13);
var lyr_Masgrainetensilage_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Masgrainetensilage_13, 
                style: style_Masgrainetensilage_13,
                popuplayertitle: 'Maïs grain et ensilage',
                interactive: true,
                title: '<img src="styles/legend/Masgrainetensilage_13.png" /> Maïs grain et ensilage'
            });
var format_Prairiestemporaires_14 = new ol.format.GeoJSON();
var features_Prairiestemporaires_14 = format_Prairiestemporaires_14.readFeatures(json_Prairiestemporaires_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prairiestemporaires_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prairiestemporaires_14.addFeatures(features_Prairiestemporaires_14);
var lyr_Prairiestemporaires_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prairiestemporaires_14, 
                style: style_Prairiestemporaires_14,
                popuplayertitle: 'Prairies temporaires',
                interactive: true,
                title: '<img src="styles/legend/Prairiestemporaires_14.png" /> Prairies temporaires'
            });
var format_Prairiespermanentes_15 = new ol.format.GeoJSON();
var features_Prairiespermanentes_15 = format_Prairiespermanentes_15.readFeatures(json_Prairiespermanentes_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prairiespermanentes_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prairiespermanentes_15.addFeatures(features_Prairiespermanentes_15);
var lyr_Prairiespermanentes_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prairiespermanentes_15, 
                style: style_Prairiespermanentes_15,
                popuplayertitle: 'Prairies permanentes',
                interactive: true,
                title: '<img src="styles/legend/Prairiespermanentes_15.png" /> Prairies permanentes'
            });
var format_Estivesetlandes_16 = new ol.format.GeoJSON();
var features_Estivesetlandes_16 = format_Estivesetlandes_16.readFeatures(json_Estivesetlandes_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estivesetlandes_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estivesetlandes_16.addFeatures(features_Estivesetlandes_16);
var lyr_Estivesetlandes_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estivesetlandes_16, 
                style: style_Estivesetlandes_16,
                popuplayertitle: 'Estives et landes',
                interactive: true,
                title: '<img src="styles/legend/Estivesetlandes_16.png" /> Estives et landes'
            });
var format_Fourrage_17 = new ol.format.GeoJSON();
var features_Fourrage_17 = format_Fourrage_17.readFeatures(json_Fourrage_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fourrage_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fourrage_17.addFeatures(features_Fourrage_17);
var lyr_Fourrage_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fourrage_17, 
                style: style_Fourrage_17,
                popuplayertitle: 'Fourrage',
                interactive: true,
                title: '<img src="styles/legend/Fourrage_17.png" /> Fourrage'
            });
var format_Lgumineusesgrains_18 = new ol.format.GeoJSON();
var features_Lgumineusesgrains_18 = format_Lgumineusesgrains_18.readFeatures(json_Lgumineusesgrains_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lgumineusesgrains_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lgumineusesgrains_18.addFeatures(features_Lgumineusesgrains_18);
var lyr_Lgumineusesgrains_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lgumineusesgrains_18, 
                style: style_Lgumineusesgrains_18,
                popuplayertitle: 'Légumineuses à grains',
                interactive: true,
                title: '<img src="styles/legend/Lgumineusesgrains_18.png" /> Légumineuses à grains'
            });
var format_Gel_19 = new ol.format.GeoJSON();
var features_Gel_19 = format_Gel_19.readFeatures(json_Gel_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gel_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gel_19.addFeatures(features_Gel_19);
var lyr_Gel_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gel_19, 
                style: style_Gel_19,
                popuplayertitle: 'Gel',
                interactive: true,
                title: '<img src="styles/legend/Gel_19.png" /> Gel'
            });
var format_Bltendre_20 = new ol.format.GeoJSON();
var features_Bltendre_20 = format_Bltendre_20.readFeatures(json_Bltendre_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bltendre_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bltendre_20.addFeatures(features_Bltendre_20);
var lyr_Bltendre_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bltendre_20, 
                style: style_Bltendre_20,
                popuplayertitle: 'Blé tendre',
                interactive: true,
                title: '<img src="styles/legend/Bltendre_20.png" /> Blé tendre'
            });
var format_PETRduPaysdeBray_21 = new ol.format.GeoJSON();
var features_PETRduPaysdeBray_21 = format_PETRduPaysdeBray_21.readFeatures(json_PETRduPaysdeBray_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PETRduPaysdeBray_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETRduPaysdeBray_21.addFeatures(features_PETRduPaysdeBray_21);
var lyr_PETRduPaysdeBray_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PETRduPaysdeBray_21, 
                style: style_PETRduPaysdeBray_21,
                popuplayertitle: 'PETR du Pays de Bray',
                interactive: true,
                title: '<img src="styles/legend/PETRduPaysdeBray_21.png" /> PETR du Pays de Bray'
            });
var format_SMBVdelaBresle_22 = new ol.format.GeoJSON();
var features_SMBVdelaBresle_22 = format_SMBVdelaBresle_22.readFeatures(json_SMBVdelaBresle_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMBVdelaBresle_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMBVdelaBresle_22.addFeatures(features_SMBVdelaBresle_22);
var lyr_SMBVdelaBresle_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMBVdelaBresle_22, 
                style: style_SMBVdelaBresle_22,
                popuplayertitle: 'SMBV de la Bresle',
                interactive: true,
                title: '<img src="styles/legend/SMBVdelaBresle_22.png" /> SMBV de la Bresle'
            });
var format_SMBVdelYres_23 = new ol.format.GeoJSON();
var features_SMBVdelYres_23 = format_SMBVdelYres_23.readFeatures(json_SMBVdelYres_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMBVdelYres_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMBVdelYres_23.addFeatures(features_SMBVdelYres_23);
var lyr_SMBVdelYres_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMBVdelYres_23, 
                style: style_SMBVdelYres_23,
                popuplayertitle: 'SMBV de l\'Yères',
                interactive: true,
                title: '<img src="styles/legend/SMBVdelYres_23.png" /> SMBV de l\'Yères'
            });
var format_SMBVdelArques_24 = new ol.format.GeoJSON();
var features_SMBVdelArques_24 = format_SMBVdelArques_24.readFeatures(json_SMBVdelArques_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMBVdelArques_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMBVdelArques_24.addFeatures(features_SMBVdelArques_24);
var lyr_SMBVdelArques_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMBVdelArques_24, 
                style: style_SMBVdelArques_24,
                popuplayertitle: 'SMBV de l\'Arques',
                interactive: true,
                title: '<img src="styles/legend/SMBVdelArques_24.png" /> SMBV de l\'Arques'
            });
var format_VilledeGisors_25 = new ol.format.GeoJSON();
var features_VilledeGisors_25 = format_VilledeGisors_25.readFeatures(json_VilledeGisors_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VilledeGisors_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VilledeGisors_25.addFeatures(features_VilledeGisors_25);
var lyr_VilledeGisors_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VilledeGisors_25, 
                style: style_VilledeGisors_25,
                popuplayertitle: 'Ville de Gisors',
                interactive: true,
                title: '<img src="styles/legend/VilledeGisors_25.png" /> Ville de Gisors'
            });
var format_SMBVCaillyAubetteRobec_26 = new ol.format.GeoJSON();
var features_SMBVCaillyAubetteRobec_26 = format_SMBVCaillyAubetteRobec_26.readFeatures(json_SMBVCaillyAubetteRobec_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMBVCaillyAubetteRobec_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMBVCaillyAubetteRobec_26.addFeatures(features_SMBVCaillyAubetteRobec_26);
var lyr_SMBVCaillyAubetteRobec_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMBVCaillyAubetteRobec_26, 
                style: style_SMBVCaillyAubetteRobec_26,
                popuplayertitle: 'SMBV Cailly-Aubette-Robec',
                interactive: true,
                title: '<img src="styles/legend/SMBVCaillyAubetteRobec_26.png" /> SMBV Cailly-Aubette-Robec'
            });
var format_Zoneshumides_27 = new ol.format.GeoJSON();
var features_Zoneshumides_27 = format_Zoneshumides_27.readFeatures(json_Zoneshumides_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoneshumides_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoneshumides_27.addFeatures(features_Zoneshumides_27);
var lyr_Zoneshumides_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoneshumides_27, 
                style: style_Zoneshumides_27,
                popuplayertitle: 'Zones humides',
                interactive: true,
                title: '<img src="styles/legend/Zoneshumides_27.png" /> Zones humides'
            });
var format_SitesNatura2000_28 = new ol.format.GeoJSON();
var features_SitesNatura2000_28 = format_SitesNatura2000_28.readFeatures(json_SitesNatura2000_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitesNatura2000_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitesNatura2000_28.addFeatures(features_SitesNatura2000_28);
var lyr_SitesNatura2000_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitesNatura2000_28, 
                style: style_SitesNatura2000_28,
                popuplayertitle: 'Sites Natura 2000',
                interactive: true,
                title: '<img src="styles/legend/SitesNatura2000_28.png" /> Sites Natura 2000'
            });
var format_Communes_29 = new ol.format.GeoJSON();
var features_Communes_29 = format_Communes_29.readFeatures(json_Communes_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_29.addFeatures(features_Communes_29);
var lyr_Communes_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communes_29, 
                style: style_Communes_29,
                popuplayertitle: 'Communes',
                interactive: true,
                title: '<img src="styles/legend/Communes_29.png" /> Communes'
            });
var format_PETRduPaysdeBray_30 = new ol.format.GeoJSON();
var features_PETRduPaysdeBray_30 = format_PETRduPaysdeBray_30.readFeatures(json_PETRduPaysdeBray_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PETRduPaysdeBray_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETRduPaysdeBray_30.addFeatures(features_PETRduPaysdeBray_30);
var lyr_PETRduPaysdeBray_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PETRduPaysdeBray_30, 
                style: style_PETRduPaysdeBray_30,
                popuplayertitle: 'PETR du Pays de Bray',
                interactive: false,
                title: '<img src="styles/legend/PETRduPaysdeBray_30.png" /> PETR du Pays de Bray'
            });
var format_Masque_31 = new ol.format.GeoJSON();
var features_Masque_31 = format_Masque_31.readFeatures(json_Masque_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Masque_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Masque_31.addFeatures(features_Masque_31);
var lyr_Masque_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Masque_31, 
                style: style_Masque_31,
                popuplayertitle: 'Masque',
                interactive: false,
                title: '<img src="styles/legend/Masque_31.png" /> Masque'
            });
var format_Nomdescommunes_32 = new ol.format.GeoJSON();
var features_Nomdescommunes_32 = format_Nomdescommunes_32.readFeatures(json_Nomdescommunes_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nomdescommunes_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nomdescommunes_32.addFeatures(features_Nomdescommunes_32);
var lyr_Nomdescommunes_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nomdescommunes_32, 
                style: style_Nomdescommunes_32,
                popuplayertitle: 'Nom des communes',
                interactive: true,
                title: 'Nom des communes'
            });
var group_Habillage = new ol.layer.Group({
                                layers: [lyr_Masque_31,lyr_Nomdescommunes_32,],
                                fold: "open",
                                title: 'Habillage'});
var group_Limitesadministratives = new ol.layer.Group({
                                layers: [lyr_Communes_29,lyr_PETRduPaysdeBray_30,],
                                fold: "open",
                                title: 'Limites administratives'});
var group_Zonagesenvironnementaux = new ol.layer.Group({
                                layers: [lyr_Zoneshumides_27,lyr_SitesNatura2000_28,],
                                fold: "open",
                                title: 'Zonages environnementaux'});
var group_StructuresanimatricesMAEC = new ol.layer.Group({
                                layers: [lyr_PETRduPaysdeBray_21,lyr_SMBVdelaBresle_22,lyr_SMBVdelYres_23,lyr_SMBVdelArques_24,lyr_VilledeGisors_25,lyr_SMBVCaillyAubetteRobec_26,],
                                fold: "open",
                                title: 'Structures animatrices MAEC'});
var group_Parcellesagricoles = new ol.layer.Group({
                                layers: [lyr_Plantesfibres_1,lyr_Protagineux_2,lyr_Autresolagineux_3,lyr_Tournesol_4,lyr_Colza_5,lyr_Autrescrales_6,lyr_Orge_7,lyr_Divers_8,lyr_Lgumesoufleurs_9,lyr_Autresculturesindustrielles_10,lyr_Vignes_11,lyr_Vergers_12,lyr_Masgrainetensilage_13,lyr_Prairiestemporaires_14,lyr_Prairiespermanentes_15,lyr_Estivesetlandes_16,lyr_Fourrage_17,lyr_Lgumineusesgrains_18,lyr_Gel_19,lyr_Bltendre_20,],
                                fold: "open",
                                title: 'Parcelles agricoles'});

lyr_BDOrthoIGN_0.setVisible(true);lyr_Plantesfibres_1.setVisible(true);lyr_Protagineux_2.setVisible(true);lyr_Autresolagineux_3.setVisible(true);lyr_Tournesol_4.setVisible(true);lyr_Colza_5.setVisible(true);lyr_Autrescrales_6.setVisible(true);lyr_Orge_7.setVisible(true);lyr_Divers_8.setVisible(true);lyr_Lgumesoufleurs_9.setVisible(true);lyr_Autresculturesindustrielles_10.setVisible(true);lyr_Vignes_11.setVisible(true);lyr_Vergers_12.setVisible(true);lyr_Masgrainetensilage_13.setVisible(true);lyr_Prairiestemporaires_14.setVisible(true);lyr_Prairiespermanentes_15.setVisible(true);lyr_Estivesetlandes_16.setVisible(true);lyr_Fourrage_17.setVisible(true);lyr_Lgumineusesgrains_18.setVisible(true);lyr_Gel_19.setVisible(true);lyr_Bltendre_20.setVisible(true);lyr_PETRduPaysdeBray_21.setVisible(true);lyr_SMBVdelaBresle_22.setVisible(true);lyr_SMBVdelYres_23.setVisible(true);lyr_SMBVdelArques_24.setVisible(true);lyr_VilledeGisors_25.setVisible(true);lyr_SMBVCaillyAubetteRobec_26.setVisible(true);lyr_Zoneshumides_27.setVisible(true);lyr_SitesNatura2000_28.setVisible(true);lyr_Communes_29.setVisible(true);lyr_PETRduPaysdeBray_30.setVisible(true);lyr_Masque_31.setVisible(true);lyr_Nomdescommunes_32.setVisible(true);
var layersList = [lyr_BDOrthoIGN_0,group_Parcellesagricoles,group_StructuresanimatricesMAEC,group_Zonagesenvironnementaux,group_Limitesadministratives,group_Habillage];
lyr_Plantesfibres_1.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Protagineux_2.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Autresolagineux_3.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Tournesol_4.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Colza_5.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Autrescrales_6.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Orge_7.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Divers_8.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Lgumesoufleurs_9.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Autresculturesindustrielles_10.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Vignes_11.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Vergers_12.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Masgrainetensilage_13.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Prairiestemporaires_14.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Prairiespermanentes_15.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Estivesetlandes_16.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Fourrage_17.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Lgumineusesgrains_18.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Gel_19.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Bltendre_20.set('fieldAliases', {'ID_PARCEL': 'ID_PARCEL', 'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', 'CULTURE_D1': 'CULTURE_D1', 'CULTURE_D2': 'CULTURE_D2', });
lyr_PETRduPaysdeBray_21.set('fieldAliases', {'LibelleOpe': 'LibelleOpe', 'LibellePAE': 'LibellePAE', 'SurfacePAE': 'SurfacePAE', });
lyr_SMBVdelaBresle_22.set('fieldAliases', {'Libelle': 'Libelle', 'Idenr': 'Idenr', 'Surface': 'Surface', });
lyr_SMBVdelYres_23.set('fieldAliases', {'LibelleOpe': 'LibelleOpe', 'LibellePAE': 'LibellePAE', 'Surface': 'Surface', });
lyr_SMBVdelArques_24.set('fieldAliases', {'LibelleOpe': 'LibelleOpe', 'LibellePAE': 'LibellePAE', 'SurfacePAE': 'SurfacePAE', });
lyr_VilledeGisors_25.set('fieldAliases', {'LIBELLEOPE': 'LIBELLEOPE', 'LIBELLEPAE': 'LIBELLEPAE', 'Surface': 'Surface', 'Opérateur': 'Opérateur', });
lyr_SMBVCaillyAubetteRobec_26.set('fieldAliases', {'LibelleOpe': 'LibelleOpe', 'LibellePAE': 'LibellePAE', 'Champident': 'Champident', 'Surface': 'Surface', 'Nom': 'Nom', });
lyr_Zoneshumides_27.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'URLMETAD': 'URLMETAD', });
lyr_SitesNatura2000_28.set('fieldAliases', {'NOM': 'NOM', });
lyr_Communes_29.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', 'layer': 'layer', 'path': 'path', });
lyr_PETRduPaysdeBray_30.set('fieldAliases', {'ID': 'ID', 'CODE_SIREN': 'CODE_SIREN', 'NATURE': 'NATURE', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', 'layer': 'layer', 'path': 'path', });
lyr_Masque_31.set('fieldAliases', {'id': 'id', });
lyr_Nomdescommunes_32.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', 'layer': 'layer', 'path': 'path', });
lyr_Plantesfibres_1.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Protagineux_2.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Autresolagineux_3.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Tournesol_4.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Colza_5.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Autrescrales_6.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Orge_7.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Divers_8.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Lgumesoufleurs_9.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Autresculturesindustrielles_10.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Vignes_11.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Vergers_12.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Masgrainetensilage_13.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Prairiestemporaires_14.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Prairiespermanentes_15.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Estivesetlandes_16.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Fourrage_17.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Lgumineusesgrains_18.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Gel_19.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Bltendre_20.set('fieldImages', {'ID_PARCEL': 'TextEdit', 'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', 'CULTURE_D1': 'TextEdit', 'CULTURE_D2': 'TextEdit', });
lyr_PETRduPaysdeBray_21.set('fieldImages', {'LibelleOpe': 'TextEdit', 'LibellePAE': 'TextEdit', 'SurfacePAE': 'TextEdit', });
lyr_SMBVdelaBresle_22.set('fieldImages', {'Libelle': 'TextEdit', 'Idenr': 'TextEdit', 'Surface': 'TextEdit', });
lyr_SMBVdelYres_23.set('fieldImages', {'LibelleOpe': 'TextEdit', 'LibellePAE': 'TextEdit', 'Surface': 'TextEdit', });
lyr_SMBVdelArques_24.set('fieldImages', {'LibelleOpe': 'TextEdit', 'LibellePAE': 'TextEdit', 'SurfacePAE': 'TextEdit', });
lyr_VilledeGisors_25.set('fieldImages', {'LIBELLEOPE': 'TextEdit', 'LIBELLEPAE': 'TextEdit', 'Surface': 'TextEdit', 'Opérateur': 'TextEdit', });
lyr_SMBVCaillyAubetteRobec_26.set('fieldImages', {'LibelleOpe': 'TextEdit', 'LibellePAE': 'TextEdit', 'Champident': 'TextEdit', 'Surface': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Zoneshumides_27.set('fieldImages', {'LIBELLE': 'TextEdit', 'URLMETAD': 'TextEdit', });
lyr_SitesNatura2000_28.set('fieldImages', {'NOM': 'TextEdit', });
lyr_Communes_29.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_PETRduPaysdeBray_30.set('fieldImages', {'ID': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'NATURE': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Masque_31.set('fieldImages', {'id': 'TextEdit', });
lyr_Nomdescommunes_32.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Plantesfibres_1.set('fieldLabels', {'SURF_PARC': 'header label - visible with data', 'CODE_CULTU': 'header label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Protagineux_2.set('fieldLabels', {'SURF_PARC': 'header label - visible with data', 'CODE_CULTU': 'header label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Autresolagineux_3.set('fieldLabels', {'SURF_PARC': 'header label - visible with data', 'CODE_CULTU': 'header label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Tournesol_4.set('fieldLabels', {'SURF_PARC': 'header label - visible with data', 'CODE_CULTU': 'header label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Colza_5.set('fieldLabels', {'SURF_PARC': 'header label - visible with data', 'CODE_CULTU': 'header label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Autrescrales_6.set('fieldLabels', {'SURF_PARC': 'header label - visible with data', 'CODE_CULTU': 'header label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Orge_7.set('fieldLabels', {'SURF_PARC': 'header label - visible with data', 'CODE_CULTU': 'header label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Divers_8.set('fieldLabels', {'SURF_PARC': 'header label - visible with data', 'CODE_CULTU': 'header label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Lgumesoufleurs_9.set('fieldLabels', {'SURF_PARC': 'header label - visible with data', 'CODE_CULTU': 'header label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Autresculturesindustrielles_10.set('fieldLabels', {'SURF_PARC': 'header label - always visible', 'CODE_CULTU': 'header label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Vignes_11.set('fieldLabels', {'SURF_PARC': 'header label - visible with data', 'CODE_CULTU': 'header label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Vergers_12.set('fieldLabels', {'SURF_PARC': 'header label - visible with data', 'CODE_CULTU': 'header label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Masgrainetensilage_13.set('fieldLabels', {'SURF_PARC': 'header label - visible with data', 'CODE_CULTU': 'header label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Prairiestemporaires_14.set('fieldLabels', {'SURF_PARC': 'header label - visible with data', 'CODE_CULTU': 'header label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Prairiespermanentes_15.set('fieldLabels', {'SURF_PARC': 'header label - visible with data', 'CODE_CULTU': 'header label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Estivesetlandes_16.set('fieldLabels', {'SURF_PARC': 'header label - visible with data', 'CODE_CULTU': 'header label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Fourrage_17.set('fieldLabels', {'SURF_PARC': 'header label - visible with data', 'CODE_CULTU': 'header label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Lgumineusesgrains_18.set('fieldLabels', {'SURF_PARC': 'header label - visible with data', 'CODE_CULTU': 'header label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Gel_19.set('fieldLabels', {'SURF_PARC': 'header label - visible with data', 'CODE_CULTU': 'header label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Bltendre_20.set('fieldLabels', {'ID_PARCEL': 'hidden field', 'SURF_PARC': 'header label - visible with data', 'CODE_CULTU': 'header label - visible with data', 'CODE_GROUP': 'hidden field', 'CULTURE_D1': 'hidden field', 'CULTURE_D2': 'hidden field', });
lyr_PETRduPaysdeBray_21.set('fieldLabels', {'LibelleOpe': 'hidden field', 'LibellePAE': 'hidden field', 'SurfacePAE': 'hidden field', });
lyr_SMBVdelaBresle_22.set('fieldLabels', {'Libelle': 'hidden field', 'Idenr': 'hidden field', 'Surface': 'hidden field', });
lyr_SMBVdelYres_23.set('fieldLabels', {'LibelleOpe': 'hidden field', 'LibellePAE': 'hidden field', 'Surface': 'hidden field', });
lyr_SMBVdelArques_24.set('fieldLabels', {'LibelleOpe': 'hidden field', 'LibellePAE': 'hidden field', 'SurfacePAE': 'hidden field', });
lyr_VilledeGisors_25.set('fieldLabels', {'LIBELLEOPE': 'hidden field', 'LIBELLEPAE': 'hidden field', 'Surface': 'hidden field', 'Opérateur': 'hidden field', });
lyr_SMBVCaillyAubetteRobec_26.set('fieldLabels', {'LibelleOpe': 'hidden field', 'LibellePAE': 'hidden field', 'Champident': 'hidden field', 'Surface': 'hidden field', 'Nom': 'hidden field', });
lyr_Zoneshumides_27.set('fieldLabels', {'LIBELLE': 'hidden field', 'URLMETAD': 'hidden field', });
lyr_SitesNatura2000_28.set('fieldLabels', {'NOM': 'hidden field', });
lyr_Communes_29.set('fieldLabels', {'ID': 'hidden field', 'INSEE_COM': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'hidden field', 'SURFACE_HA': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'hidden field', 'NOM': 'header label - visible with data', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'SIREN_EPCI': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'CODE_SIREN': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_PETRduPaysdeBray_30.set('fieldLabels', {'ID': 'hidden field', 'CODE_SIREN': 'hidden field', 'NATURE': 'hidden field', 'NOM': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Masque_31.set('fieldLabels', {'id': 'hidden field', });
lyr_Nomdescommunes_32.set('fieldLabels', {'ID': 'hidden field', 'INSEE_COM': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'hidden field', 'SURFACE_HA': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'hidden field', 'NOM': 'hidden field', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'SIREN_EPCI': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'CODE_SIREN': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Nomdescommunes_32.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});