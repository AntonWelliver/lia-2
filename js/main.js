

//Function mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoibGFyc24iLCJhIjoiY2s2YzByNTh4MDZjdTNxb21lMjY3NjBnMSJ9.bbEbVqLCn7Oco1FXsI1nFQ'; // token key

//set out the map
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', //hosted style id
    center: [11.975482095909456, 57.69282011876044], // starting position
    zoom: 17, // starting zoom
});

/* if(urlValue = sessionStorage.urlValue){

    
var urlValue = {
    "url": sessionStorage.urlValue
    
} 
var nameValue = {
    "name": sessionStorage.nameValue
} */
var storedEditPolygonArray = JSON.parse(sessionStorage.getItem("polygon1"));
console.log(storedEditPolygonArray)

map.on('load', function() {
    map.addSource('maine', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'geometry': {
                'type': 'Polygon',
                'coordinates':[ storedEditPolygonArray
                                                          
                ]
                  
             }
        }
    
    });
        map.addLayer({
        'id': 'maine',
        'type': 'fill',
        'source': 'maine',
        'layout': {},
        'paint': {
        'fill-color': '#088',
        'fill-opacity': 0.8
        }
        });
    });

          
//Get image
map.on('load', function() {
    map.addSource("floor", {
        "type": "image",
        "url": "/images/testpicture.png",
        
        "coordinates": [
            [11.974295724725835, 57.69314253574006],
            [11.97447451130472, 57.69293917032387],
            [11.974237061813596, 57.692879489508265],
            [11.974058126076898, 57.69308278208518]
        ],
        
    });
     
        //new input map autoFly to destination
        var updateLat = parseFloat(document.getElementById("latitudeInput").value);
        var updateLng = parseFloat(document.getElementById("longitudeInput").value);
        map.flyTo({ center: [updateLng, updateLat] });
        

    map.addLayer({
        "id": "floor",
        "source": "floor",
        "type": "raster",
        'layout': {
            'visibility': 'visible'
        },
        "paint": {
            "raster-opacity": 1
        },
    });
});

// Add layer box
var toggleableLayerIds = ["floor"];

for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];
    
    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.id = 'toggleLayer';    
    link.textContent = id;
    
    link.onclick = function(e) {
        var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();
        
        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            
            this.className = 'false';
            } 
            else {
            
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
            }
    };
    
    var layers = document.getElementById('menupicture');
    layers.style.display = "none";
    layers.appendChild(link);
}


//Polygon control 
var draw = new MapboxDraw({
    displayControlsDefault: false,
    controls: {
        polygon: true,
        trash: true,
        activateUIButton: true
    }
});

map.on('draw.modechange', (e) => {
  const data = draw.getAll();
  if (draw.getMode() == 'draw_polygon') {
      var pids = []
      var polygonIds = []
      const polygon = data.features[data.features.length - 1].id
      data.features.forEach((f) => {
          if (f.geometry.type === 'Polygon' && f.id !== polygon) {
              pids.push(f.id)
              polygonIds.push(f.id)
      }
    })
    draw.delete(polygonIds)
    draw.delete(pids)
  }
});



//Add marker 
/* var marker = new mapboxgl.Marker({
    draggable: true,
    color: "blue",
})
  .setLngLat([11.975482095909456, 57.69282011876044])
  marker.addTo(map); */

//Set search geocoder
var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    marker: false,
    placeholder: "Adress",
    countries: 'SE',
    minLength: 2,
    
        flyTo: {
            bearing: 0,
            // These options control the flight curve, making it move
            // slowly and zoom out almost completely before starting
            // to pan.
            speed: 1.5, // make the flying slow
            curve: 1, // change the speed at which it zooms out
            // This can be any easing function: it takes a number between
            // 0 and 1 and returns another number between 0 and 1.
            easing: function(t) {
                return t;
            }
        },
    mapboxgl: mapboxgl
    });
    
        geocoder.on('loading', function(){
                var optionValue = document.getElementById('selectID');
                if(myCircle.options.test.boolean === true){
                    myCircle.options.test.boolean = false;
                    myCircle.remove(map);
                }  
                else if(optionValue.value == 'polygon'){
                    
                }
                /* document.getElementById("radiusInput").value = 0;
                document.getElementById("latitudeInput").value = "";
                document.getElementById("longitudeInput").value = ""; */

             
        })
    

    geocoder.on('result', function(ev) {
                
        var lngArray = ev.result.geometry.coordinates[0];
        var latArray = ev.result.geometry.coordinates[1];
        
            var myCircleInput =  new MapboxCircle({lat: latArray, lng: lngArray}, 100, {
                editable: true,
                minRadius: 1,
                maxRadius: 2000000,
                fillColor: 'royalblue',
                fillOpacity: 0.2,
                strokeColor: "red",
                strokeOpacity: 0.5,
                strokeWeight: 1.3,
                "paint": {
                    "circle-opacity": 10,
                    "circle-stroke-width": 10,
                    "circle-stroke-color": "red"
                },
                "test":{
                    "boolean": false,
                }
            })
            var inputText = document.getElementsByClassName('mapboxgl-ctrl-geocoder--input');
            document.getElementById("radiusInput").value = 100;
            document.getElementById("latitudeInput").value = latArray;
            document.getElementById("longitudeInput").value = lngArray;
            document.getElementById('addressInput').value = inputText[0].value;
            
            var optionValue = document.getElementById('selectID');
            
            inputText[0].value = "Sök igen på en adress";
            
           
           
           if(optionValue.value == "circle"){
               myCircleInput.addTo(map);
            }
            
            else if(optionValue.value == "polygon"){
                /* myCircleInput.remove(map); */
                console.log("Polygon ON")
                

            }else{
                myCircleInput.addTo(map);
            }
                            
            
            myCircle = myCircleInput;
            myCircle.options.test.boolean = true;
         
            
            myCircleInput.on('centerchanged', function (circleObj) {
                console.log('New center:', circleObj.getCenter());
                var lngLat = circleObj.getCenter()
                lngLat.lng = lngLat.lng.toString(); 
                var stringLngLat =  JSON.stringify(lngLat);
                var single = JSON.parse(stringLngLat)
                document.getElementById('longitudeInput').value = single.lng; 
                document.getElementById('latitudeInput').value = single.lat; 
                
            });
            //Get radius when change the circle diameter
            myCircleInput.on('radiuschanged', function (circleObj) {
                document.getElementById('radiusInput').value = circleObj.getRadius(); 
            });

            myCircleInput.on('click', function (mapMouseEvent) {
                console.log('Click:', mapMouseEvent.point);
            });
            //Get lnglat when rickclick
            myCircleInput.on('contextmenu', function (mapMouseEvent) {
            var lngLat = mapMouseEvent.lngLat;
            lngLat.lng = lngLat.lng.toString(); 
            var stringLngLat =  JSON.stringify(lngLat);
            var single = JSON.parse(stringLngLat)
            document.getElementById('longitudeInput').value = single.lng; 
            document.getElementById('latitudeInput').value = single.lat; 
                console.log('Right-click:', mapMouseEvent.lngLat);
            }); 
    })
    
    geocoder.on('clear', function(ev) {
        /* document.getElementById('addressInput').value = ""; */
        /* document.getElementById("radiusInput").value = 0;
        document.getElementById("latitudeInput").value = "";
        document.getElementById("longitudeInput").value = ""; */
        /* myCircle.remove(map);
        var optionValue = document.getElementById('selectID');
        if(optionValue.value === 'circle'){
            myCircle.remove(map);
            
            
        }else if(optionValue.value === 'polygon'){
            console.log('test9999')
        }else{
            console.log("test101010")
        } */
    }) 
    

    
            //To See Scale
            /* var scale = new mapboxgl.ScaleControl({
                maxWidth: 80,
                unit: 'imperial'
            });
            map.addControl(scale);
            
            scale.setUnit('metric'); */
            
            //scale unit menu
            
            
            
            //Circle 
             var myCircle = new MapboxCircle({lat: 57.69282011876044, lng: 11.975482095909456},100, {
                editable: true,
                
                minRadius: 1,
                maxRadius: 2000000,
                fillColor: 'royalblue',
                fillOpacity: 0.2,
                
                strokeColor: "red",
                strokeOpacity: 0.5,
                strokeWeight: 1.3,
                "paint": {
                    "circle-opacity": 10,
                    "circle-stroke-width": 10,
                    "circle-stroke-color": "red"
                },
                "test":{
                    "boolean": false,
                }
            })
           
            myCircle.options.test.boolean = true; 
            document.getElementById("radiusInput").value = 100;
            document.getElementById("latitudeInput").value = 57.69282011876044;
            document.getElementById("longitudeInput").value = 11.975482095909456;
            
            myCircle.addTo(map);
            //Get lnglat when new postion on circle 
         myCircle.on('centerchanged', function (circleObj) {
                var lngLat = circleObj.getCenter()
                lngLat.lng = lngLat.lng.toString(); 
                var stringLngLat =  JSON.stringify(lngLat);
                var single = JSON.parse(stringLngLat)
                document.getElementById('longitudeInput').value = single.lng; 
                document.getElementById('latitudeInput').value = single.lat; 
                
            });
            //Get radius when change the circle diameter
        myCircle.on('radiuschanged', function (circleObj) {
                document.getElementById('radiusInput').value = circleObj.getRadius(); 
            });

        myCircle.on('click', function (mapMouseEvent) {
                console.log('Click:', mapMouseEvent.point);
            });
            //Get lnglat when rickclick
        myCircle.on('contextmenu', function (mapMouseEvent) {
            var lngLat = mapMouseEvent.lngLat;
            lngLat.lng = lngLat.lng.toString(); 
            var stringLngLat =  JSON.stringify(lngLat);
            var single = JSON.parse(stringLngLat)
            document.getElementById('longitudeInput').value = single.lng; 
            document.getElementById('latitudeInput').value = single.lat; 
                console.log('Right-click:', mapMouseEvent.lngLat);
            }); 
            //New value for radius input
            function radiusOnchange(){
                var updateRadius = document.getElementById("radiusInput");
                myCircle.setRadius(updateRadius.value); 
                
            };
            function latOnchange(){
                var updateLat = parseFloat(document.getElementById("latitudeInput").value);
                var updateLng = parseFloat(document.getElementById("longitudeInput").value);
                myCircle.setCenter({lat:updateLat , lng:updateLng});
            };
            
            function lngOnchange(){
                var updateLat = parseFloat(document.getElementById("latitudeInput").value);
                var updateLng = parseFloat(document.getElementById("longitudeInput").value);
                myCircle.setCenter({lat:updateLat , lng:updateLng});
            };

            //Hide circle when polygon option on
            function swapType() {
                
                if(document.getElementById('selectID').value == "circle"){
                    myCircle.addTo(map);
                    map.removeControl(draw, 'top-left');
                    map.getContainer().classList.remove("mouse-add");
                    myCircle.options.test.boolean = true;
                    document.getElementById("radiusInput").style.display = "block"; 
                    console.log("circle");                  
                    sessionStorage.removeItem("polygon");             
                    sessionStorage.removeItem("polygon1");             
                    
                } 
                
                 else{
                    map.addControl(draw, 'top-left');
                    
                    myCircle.remove(map);
                    myCircle.options.test.boolean = false;              
                    document.getElementById("radiusInput").style.display = "none";
                    draw.changeMode('draw_polygon');                   
                    
                }  
                           
            }

            //Add your own icon to the map with a class
            class MapboxGLButtonControl {
            constructor({
                className = "",
                title = "",
                eventHandler = evtHndlr
            }) {
                this._className = className;
                this._title = title;
                this._eventHandler = eventHandler;
            }
            
            onAdd(map) {
                this._btn = document.createElement("button");
                
                this._btn.className = "mapboxgl-ctrl-icon" + " " + this._className;
                this._btn.type = "button";
                this._btn.title = this._title;
                this._btn.id = "toggleMarker"
                this._btn.value = "1"
                this._btn.onclick = this._eventHandler;
                
                this._container = document.createElement("div");
                this._container.className = "mapboxgl-ctrl-group mapboxgl-ctrl";
                this._container.appendChild(this._btn);
                
                return this._container;
            }
            
            onRemove() {
                this._container.parentNode.removeChild(this._container);
                this._map = undefined;
            }
        }

            class TylerMenu {
            constructor({
                className = "",
                title = "",
                eventHandler = evtHndlr
            }) {
                this._className = className;
                this._title = title;
                this._eventHandler = eventHandler;
            }
            
            onAdd(map) {
                this._btn = document.createElement("button");
                
                this._btn.className = "mapboxgl-ctrl-icon" + " " + this._className;
                this._btn.type = "button";
                this._btn.title = this._title;
                this._btn.id = "toggleMenuTyler"
                this._btn.value = "1"
                this._btn.onclick = this._eventHandler;
                
                this._container = document.createElement("div");
                this._container.className = "mapboxgl-ctrl-group mapboxgl-ctrl";
                this._container.appendChild(this._btn);
                
                return this._container;
            }
            
            onRemove() {
                this._container.parentNode.removeChild(this._container);
                this._map = undefined;
            }
        }
            class RulerPoint {
            constructor({
                className = "",
                title = "",
                eventHandler = evtHndlr
            }) {
                this._className = className;
                this._title = title;
                this._eventHandler = eventHandler;
            }
            
            onAdd(map) {
                this._btn = document.createElement("button");
                
                this._btn.className = "mapboxgl-ctrl-icon" + " " + this._className;
                this._btn.type = "button";
                this._btn.title = this._title;
                this._btn.id = "rulerPoint"
                this._btn.value = "1"
                this._btn.onclick = this._eventHandler;
                
                this._container = document.createElement("div");
                this._container.className = "mapboxgl-ctrl-group mapboxgl-ctrl";
                this._container.appendChild(this._btn);
                
                return this._container;
            }
            
            onRemove() {
                this._container.parentNode.removeChild(this._container);
                this._map = undefined;
            }
        }
       
        /* function one (event) {     
            var markerValue = document.getElementById("toggleMarker");
            var inputText = document.getElementsByClassName('mapboxgl-ctrl-geocoder--input');
            console.log("event number 1", event);
                if(markerValue.value=="1"){
                    markerValue.value = "2";
                    myCircle.addTo(map);
                    
                    
                    
                } 
                else {
                    inputText[0].value = ""
                    markerValue.value = "1"
                    myCircle.remove(map);
                    
                    
                }
        } */
        function two (event){
            console.log("function two Menutyler", event);
            var markerValue = document.getElementById("toggleMenuTyler");
            
            if(markerValue.value=="1"){
                markerValue.value = "2";
                
                
                layers.style.display = "block";
                
            }
           
            else {
                markerValue.value = "1"
                /* ctrlPoint.remove(map); */
                layers.style.display = "none";
                
            }
        }
       
        function three (event){
            console.log("function three RulerPoint", event);
            var rulerValue = document.getElementById("rulerPoint");
            
    
            if(rulerValue.value == "1"){
                rulerValue.value = "2";
                    console.log("ruler1")
                    ruler();
                    
            }else{
                console.log("ruler2")
                rulerValue.value = "1";
                
            }
        }
        
        //Get Icons from css circle
        /* var ctrlPoint = new MapboxGLButtonControl({
            className: "mapbox-gl-draw_point",
            title: "Circle tool (p)",
            eventHandler: one,
            
        }); */
        //Get icons from css Menu
        var menuPoint = new TylerMenu({
            className: "mapbox-gl-menu_point",
            title: "Menu Point",          
            eventHandler: two,
            
        });
        var rulerPoint = new RulerPoint({
            className: "mapbox-gl-ruler_point",
            title: "Ruler Point",          
            eventHandler: three,
            
        });
        
        //MapControl Icons added to map
        
    
        /* map.addControl(geocoder, 'top-left'); */
        document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
        
        map.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                trackUserLocation: true,
               
            })
            );
            
                
              
            
        map.addControl(new mapboxgl.FullscreenControl());
       
        map.addControl(new mapboxgl.NavigationControl({visualizePitch: true}));
        map.addControl(menuPoint);
        /* map.addControl(ctrlPoint); */


       /*  map.addControl(rulerPoint); */



        /* map.addControl(new RulerControl(), 'top-right');
        map.on('ruler.on', () => console.log('ruler: on'));
        map.on('ruler.off', () => console.log('ruler: off')); */

        //Button toggle for show advance settings and resize container div
        
        function cogTools(){
            var settingToggle = document.getElementsByClassName("settings");
            
            if(settingToggle.value == "1" ){
                settingToggle.value = "2";
                document.getElementById("container").style.height = "450px";
                
              
                document.getElementById("latitudeInput").style.display = "none"
                document.getElementById("longitudeInput").style.display = "none"
                document.getElementById("placeInput").style.display = "none"
                document.getElementById("floorInput").style.display = "none"
                document.getElementById("departmentInput").style.display = "none"
                
            }else{
                settingToggle.value = "1";
                document.getElementById("container").style.height = "700px";
              

                document.getElementById("latitudeInput").style.display = "block"
                document.getElementById("longitudeInput").style.display = "block"
                document.getElementById("placeInput").style.display = "block"
                document.getElementById("floorInput").style.display = "block"
                document.getElementById("departmentInput").style.display = "block"
            }
        }
        
        //Console log out the coordinates for drawing out polygon all the points
        map.on('draw.create', updateArea);
        map.on('draw.update', updateArea);
        map.on('draw.delete', updateArea);
        

            function updateArea(e){
                var data = draw.getAll().features[0].geometry.coordinates;
                console.log(draw.getAll().features)
                          
                arrayContent = data.flat();
                polygonArray = arrayContent;             
                    
                  /* var featureIds = draw.add({ type: 'Polygon', coordinates: [JSON.parse(sessionStorage.getItem("polygon1"))] });
                    var pointId = featureIds[0];
                    console.log(draw.get(pointId)); */
                /* arrayContent.forEach( (item,i) => arrayContent[i] = item + 10); */
                /* console.log(polygonArray); */
                sessionStorage.setItem('polygon', JSON.stringify(arrayContent))
                var storedPolygonArray = JSON.parse(sessionStorage.getItem("polygon")); 
                console.log(storedPolygonArray);
                var updateLat = parseFloat(document.getElementById("latitudeInput").value);
                var updateLng = parseFloat(document.getElementById("longitudeInput").value);
                
                
                
                    var feature = {
                        id: 'unique-id',
                        type: 'Feature',
                        properties: {
                            lat: updateLat,
                            lng: updateLng,
                            geopoint: [updateLat, updateLng]
                        },
                        geometry: { type: 'Polygon', coordinates: [storedPolygonArray] }
                      };
                      
                      var polygonLat = feature.properties.lat
                      var polygonlng = feature.properties.lng
                      
                      sessionStorage.setItem('polygonLat', JSON.stringify(polygonLat))
                      var polygonLatTest = JSON.parse(sessionStorage.getItem("polygonLat")); 
                        console.log(polygonLatTest);
                      sessionStorage.setItem('polygonLng', JSON.stringify(polygonlng))
                      var polygonLngTest = JSON.parse(sessionStorage.getItem("polygonLng")); 
                        console.log(polygonLngTest);
    
                    }


        var distanceContainer = document.getElementById('distance');
 
     
