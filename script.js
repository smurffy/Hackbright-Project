
$(document).ready(function(){

	
 var geojsonFeatures = [{
	
	"type": "Feature",
	"properties": { 
		"name": "EARTHQUAKE"
	},
	"geometry": { 
		"type": "Point",
		"coordinates": [-120.80, 36.20]
	}
}, {
	"type": "Feature",
	"properties": { 
		"name": "EARTHQUAKE"
	},
	"geometry": { 
		"type": "Point",
		"coordinates": [-118.54,34.21]
	}
}, {
	"type": "Feature",
	"properties": { 
		"name": "EARTHQUAKE"
	},
	"geometry": { 
		"type": "Point",
		"coordinates": [-124.90, 40.40]
	}
}, {
	"type": "Feature",
	"properties": { 
		"name": "EARTHQUAKE"
	},
	"geometry": { 
		"type": "Point",
		"coordinates": [-125.50, 41.00]
	}
}, {
	"type": "Feature",
	"properties": { 
		"name": "EARTHQUAKE"
	},
	"geometry": { 
		"type": "Point",
		"coordinates": [-116.30, 33.40]
	}
}, {
	"type": "Feature",
	"properties": { 
		"name": "EARTHQUAKE"
	},
	"geometry": { 
		"type": "Point",
		"coordinates": [-118.4, 34.41]
	}
}, {
	"type": "Feature",
	"properties": { 
		"name": "EARTHQUAKE"
	},
	"geometry": { 
		"type": "Point",
		"coordinates": [-115.65, 32.55]
	}
}, {
	"type": "Feature",
	"properties": { 
		"name": "EARTHQUAKE"
	},
	"geometry": { 
		"type": "Point",
		"coordinates": [-118.54, 34.21]
	}
}, {
	"type": "Feature",
	"properties": { 
		"name": "EARTHQUAKE"
	},
	"geometry": { 
		"type": "Point",
		"coordinates": [-120.60, 36.10]
	}
}, {
	"type": "Feature",
	"properties": { 
		"name": "EARTHQUAKE"
	},
	"geometry": { 
		"type": "Point",
		"coordinates": [-118.00, 33.70]
	}
}, {
	"type": "Feature",
	"properties": { 
		"name": "EARTHQUAKE"
	},
	"geometry": { 
		"type": "Point",
		"coordinates": [-118.10, 36.70]
	}
}, {
	"type": "Feature",
	"properties": { 
		"name": "EARTHQUAKE"
	},
	"geometry": { 
		"type": "Point",
		"coordinates": [-122.50, 38.20]
	}
}];

var mapVar = L.map('mapDiv').setView([37.774, -122.4194], 5);
//function showMap () {
	
	var tileLayer =	L.tileLayer(
	'http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.jpg',
		{
		attribution: 'map tiles by <a href="http://stamen.com">stamen design</a>, under cc by 3.0. data by <a href="http://openstreetmap.org">openstreetmap</a>, under cc by sa.',
		//maxzoom:18
		});

//}
//showMap();



var featureStyle = {
	radius: 8,
    fillColor: "red",
    color: "red",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

//function loadData () {
 var geojsonLayer = L.geoJson(geojsonFeatures, {
	pointToLayer: function (feature, latlng) {
		console.log(feature);
		console.log(latlng);
		var circle = L.circleMarker(latlng, featureStyle);
		console.log(circle);
		return circle;
	}
	//stlye: featureStyle
	//onEachFeature: function(feature, layer) { 
	//layer.bindPopup(feature.properties.name); 
	//}
});
mapVar.addLayer(tileLayer);
mapVar.addLayer(geojsonLayer);
	

//	}
//}
//loadData ();	  
	  
 });