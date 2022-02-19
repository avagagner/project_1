var map = L.map('map').setView([45.53330747166111,-122.6848378290208], 16);

  // load a tile layer
 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 50,
	ext: 'png'
}).addTo(map);

function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

var geojsonFeature = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
       "The abigial": "apartment",
        "popupContent": "<b>Apartment</b><br>The Abigial"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.68442534236152,
          45.53462601492784
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
       "Apartment": "The Ramona",
      "popupContent": "<b>Apartment</b><br>The Ramona"},
      "geometry": {
        "type": "Point",
        "coordinates": [
         -122.68544765304834,
          45.53395610510528
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
       "Apartment": "The Parker",
      "popupContent": "<b>Apartment</b><br>The Parker"},
      "geometry": {
        "type": "Point",
        "coordinates": [
         -122.68369511140362,
          45.53314983743478
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
       "Gym": "Movement Portland",
      "popupContent": "<b>Gym</b><br>Movement"},
      "geometry": {
        "type": "Point",
        "coordinates": [
        -122.68600841539424,
         45.53305775381471
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
       "Gym": "Barre3",
      "popupContent": "<b>Gym</b><br>Barre3"},
      "geometry": {
        "type": "Point",
        "coordinates": [
        -122.68166631343185,
         45.53058318529549
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
       "Food/Drink": "Ovation Coffee and Tea",
      "popupContent": "<b>Food/Drink</b><br>Oviation Coffee and Tea"},
      "geometry": {
        "type": "Point",
        "coordinates": [
       -122.68125528396799,
        45.53247739359592
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
       "Food/Drink": "Tea Bar NW",
      "popupContent": "<b>Food/Drink</b><br>Tea Bar NW"},
      "geometry": {
        "type": "Point",
        "coordinates": [
       -122.68202343833148,
        45.53156438374936
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
       "Food/Drink": "Snow Bunndy Cofee",
      "popupContent": "<b>Food/Drink</b><br>Snow Bunny Coffee"},
      "geometry": {
        "type": "Point",
        "coordinates": [
      -122.68261966294622,
       45.533047584924645
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
       "Food/Drink": "The Fields Bar and Grill",
      "popupContent": "<b>Food/Drink</b><br>The Fields Bar and Grill"},
      "geometry": {
        "type": "Point",
        "coordinates": [
      -122.6825596062627,
      45.53124470690273
        ]
      }
    },
        {
      "type": "Feature",
      "properties": {"Shape": "Interest Area","popupContent": "<b>Area of Interest</b><br>Proposed Development"},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.6843047142029,
              45.53677596024553
            ],
            [
              -122.68587112426756,
              45.53558857339719
            ],
            [
              -122.6869225502014,
              45.534220792915654
            ],
            [
              -122.68681526184082,
              45.529996997063385
            ],
            [
              -122.68042087554932,
              45.53008718818948
            ],
            [
              -122.68046379089354,
              45.531530226538074
            ],
            [
              -122.67943382263184,
              45.53348428195383
            ],
            [
              -122.6843047142029,
              45.53677596024553
            ]
          ]
        ]
      }
    },  
    {
      "type": "Feature",
      "properties": {
        "Apartment": "Modera Pearl","popupContent": "<b>Apartment</b><br>Modera Pearl"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
         -122.68480204489414,
          45.53334476246238
        ]
      }
    }
  ]
};

L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
}).addTo(map);

 // load GeoJSON from an external file
  $.getJSON("https://opendata.arcgis.com/datasets/03c7ba620be449889ae90832dae56a44_241.geojson",function(data){
    // add GeoJSON layer to the map once the file is loaded
    L.geoJson(data).addTo(map);
  });
