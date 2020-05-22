var OpenLayers = ol;
var featureLayer;
var map;

function init() {  
  
  map = new OpenLayers.Map({
	  target: "map",
	  view: new ol.View({
	       center: ol.proj.transform([13.03,47.8], 'EPSG:4326', 'EPSG:900913'),
		  zoom: 15
	  })
  });
  
  var UNIGIS_map = new ol.layer.Tile({source: new ol.source.OSM()});
  map.addLayer(UNIGIS_map);
  
  featureLayer = new ol.source.Vector({});
  featuresVector = new OpenLayers.layer.Vector({
	  source: featureLayer
  });
  map.addLayer(featuresVector);
}
