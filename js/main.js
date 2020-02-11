



//Function

mapboxgl.accessToken = 'pk.eyJ1IjoibGFyc24iLCJhIjoiY2s2YzByNTh4MDZjdTNxb21lMjY3NjBnMSJ9.bbEbVqLCn7Oco1FXsI1nFQ'; // token key
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', //hosted style id
    center: [11.975482095909456, 57.69282011876044], // starting position
    zoom: 17 // starting zoom
    
});

var draw = new MapboxDraw({
    displayControlsDefault: false,
    controls: {
        polygon: true,
        trash: true
    }
});
var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
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


    
            var scale = new mapboxgl.ScaleControl({
        maxWidth: 80,
                unit: 'imperial'
            });
            map.addControl(scale);

            scale.setUnit('metric');

            //scale unit menu
            
            
            
            map.on('mousemove', function(e) {
        document.getElementById('info').innerHTML =
        // e.point is the x, y coordinates of the mousemove event relative
        // to the top-left corner of the map
        JSON.stringify(e.point) +
        '<br />' +
        // e.lngLat is the longitude, latitude geographical position of the event
        JSON.stringify(e.lngLat.wrap());
    });
   /*  map.addControl(geocoder); */
    
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
    

     map.addControl(new RulerControl());
map.on('ruler.on', () => console.log('ruler: on'));
map.on('ruler.off', () => console.log('ruler: off'));
    
    // with miles:
    
    
    map.addControl(draw, 'top-left');
    /* map.addControl(new CompassControl(), 'bottom-right'); */

    map.on('draw.create', updateArea);
    map.on('draw.delete', updateArea);
    map.on('draw.update', updateArea);


function updateArea(e) {
    var data = draw.getAll();
    var answer = document.getElementById('calculated-area');
    if (data.features.length > 0) {
        var area = turf.area(data);
        // restrict to area to 2 decimal points
        var rounded_area = Math.round(area * 100) / 100;
        answer.innerHTML =
            '<p><strong>' +
            rounded_area +
            '</strong></p><p>111square meters</p>';
    } else {
        answer.innerHTML = '';
        if (e.type !== 'draw.delete')
            alert('Use the draw tools to draw a polygon!');
    }
}




/* Display none grid */
/* function addNewGeofence() {
    var createGeofenceView = document.getElementById("createGeofenceView");
    var manageGeofenceTable = document.getElementById("manageGeofenceTable");
    var statusDataHeader = document.getElementById("statusdataheader");
    var mapData = document.getElementById("map");
    map.on('load', () => {
        map.resize();
    });  
    if (createGeofenceView.style.display !== "grid") {
        createGeofenceView.style.display = "grid";
        manageGeofenceTable.style.display = "none";
        statusDataHeader.style.display = "none";
        setTimeout(function()
        { 
            map.on('load', () => {
                map.resize();
            });  
            mapData.style.position = "absolute";
            mapData.style.left = "0px"; 
            mapData.style.height = "100%";
            mapData.style.width = "100%";
            

        }, 1000);
        
    }
    

} */

/* function cancelManageView() {
    var createGeofenceView = document.getElementById("createGeofenceView");
    var manageGeofenceTable = document.getElementById("manageGeofenceTable");
    var statusDataHeader = document.getElementById("statusdataheader");
    if (manageGeofenceTable.style.display === "none") {
        manageGeofenceTable.style.display = "table";
        createGeofenceView.style.display = "none";
        statusDataHeader.style.display = "grid";
    }
    
}  */
