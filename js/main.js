
 /* var theMarker = {}; */

//Function mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoibGFyc24iLCJhIjoiY2s2YzByNTh4MDZjdTNxb21lMjY3NjBnMSJ9.bbEbVqLCn7Oco1FXsI1nFQ'; // token key

//set out the map
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', //hosted style id
    center: [11.975482095909456, 57.69282011876044], // starting position
    zoom: 17, // starting zoom
      
});
//Get image
map.on('load', function() {
    map.addSource("Floor", {
        "type": "image",
        "url": "/images/testpicture.png",
        
        "coordinates": [
            [11.974295724725835, 57.69314253574006],
            [11.97447451130472, 57.69293917032387],
            [11.974237061813596, 57.692879489508265],
            [11.974058126076898, 57.69308278208518]
        ],
        
    });

    map.addLayer({
        "id": "Floor",
        "source": "Floor",
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
var toggleableLayerIds = ['Floor'];

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
        trash: true
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
    clearOnBlur: true,
    /* collapsed: true, */
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
                    console.log('Circle OFF Map');
                }  
                else if(optionValue.value == 'polygon'){
                    console.log('polygon ON');
                }

             
        })
    

    geocoder.on('result', function(ev) {
        
        /* console.log(ev.result); */
        
        var lngArray = ev.result.geometry.coordinates[0];
        var latArray = ev.result.geometry.coordinates[1];

        /* console.log(lngArray);
        console.log(latArray); */
        
        
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

            var optionValue = document.getElementById('selectID');

            inputText[0].value = "Sök igen på en adress";

           
           
           if(optionValue.value == "circle"){

               myCircleInput.addTo(map);
               
               console.log("Circle ON")
            }
            
            else if(optionValue.value == "polygon"){
                /* myCircleInput.remove(map); */
                
                console.log("Polygon ON")
                
            }else{

                myCircleInput.addTo(map);
                
                console.log("Added 1 more Circle")
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
                console.log('New radius (once!):', circleObj.getRadius());
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
    
    /* geocoder.on('clear', function(ev) {
        myCircle.remove(map);
        var optionValue = document.getElementById('selectID');
        if(optionValue.value === 'circle'){
            myCircle.remove(map);
            
            
        }else if(optionValue.value === 'polygon'){
            console.log('test9999')
        }else{
            console.log("test101010")
        }
    }) */
    

    
            //To See Scale
            /* var scale = new mapboxgl.ScaleControl({
                maxWidth: 80,
                unit: 'imperial'
            });
            map.addControl(scale);
            
            scale.setUnit('metric'); */
            
            //scale unit menu
            /* var radius = document.getElementById('radiusInput').value;
            var lang = document.getElementById('longitudeInput').value;
            var laty = document.getElementById('latitudeInput').value; */
            
                
            //Circle 
             var myCircle = new MapboxCircle({lat: 57.69282011876044, lng: 11.975482095909456}, 100, {
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
            myCircle.addTo(map);
            //Get lnglat when new postion on circle 
         myCircle.on('centerchanged', function (circleObj) {
                console.log('New center:', circleObj.getCenter());
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
                console.log('New radius (once!):', circleObj.getRadius());
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
            
            
            //Hide circle when polygon option on
            function swapType() {
                /* var inputText = document.getElementsByClassName('mapboxgl-ctrl-geocoder--input'); */
                if(document.getElementById('selectID').value == "circle"){
                    myCircle.addTo(map);
                    map.removeControl(draw, 'top-left');
                    myCircle.options.test.boolean = true;
                    document.getElementById('radiusInput').value = "100"; 
                    
                }  else{
                    map.addControl(draw, 'top-left');
                    myCircle.remove(map);
                    myCircle.options.test.boolean = false;              
                    document.getElementById("radiusInput").value = "";

                }  
                for (var i = 0; i < selectID.length; i++) {
                    selectID[i].on = swapType;
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
       /*  function one (event) {     
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
                
                /* ctrlPoint.addTo(map); */
                layers.style.display = "block";
                
            }else {
                markerValue.value = "1"
                /* ctrlPoint.remove(map); */
                layers.style.display = "none";
                
            }
        }
        
        //Get Icons from css circle
       /*  var ctrlPoint = new MapboxGLButtonControl({
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
        
        //MapControl Icons added to map
        
        map.addControl(geocoder);
        map.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                trackUserLocation: true
                
            })
            );
        map.addControl(new mapboxgl.FullscreenControl());
        map.addControl(new mapboxgl.NavigationControl());
        map.addControl(menuPoint);
        /* map.addControl(ctrlPoint, 'top-left');
        map.addControl(draw, 'top-left'); */
        
        
        
        /* map.addControl(new CompassControl(), 'bottom-right'); */
        
/*          map.on('draw.create', updateArea); 
          map.on('draw.delete', updateArea);
        map.on('draw.update', updateArea); 
        
        
         function updateArea(e) {
            var data = draw.getAll();
            var answer = document.getElementById('radiusInput');
            if (data.features.length > 0) {
                var area = turf.area(data);
                // restrict to area to 2 decimal points
                var rounded_area = Math.round(area * 100) / 100;
                answer.innerText =
                '<number><strong>' +
                rounded_area +
                '</strong></number>';
            } else {
                answer.innerHTML = '';
                if (e.type !== 'draw.delete')
                alert('Use the draw tools to draw a polygon!');
    }
}  */

