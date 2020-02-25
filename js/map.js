//Function mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoibGFyc24iLCJhIjoiY2s2YzByNTh4MDZjdTNxb21lMjY3NjBnMSJ9.bbEbVqLCn7Oco1FXsI1nFQ'; // token key

//set out the map
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', //hosted style id
    center: [11.975482095909456, 57.69282011876044], // starting position
    zoom: 17, // starting zoom

});