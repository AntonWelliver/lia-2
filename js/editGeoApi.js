const apiEditGeofence = "https://api.proximi.fi/core/geofences/";
const AuthEditStr = 'Bearer '.concat("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlzcyI6ImQzMTI5MDM1LWI2NzYtNGU3ZC1hZTUxLWEzZTcxYzAwZGIzMSIsInR5cGUiOiJ1c2VyIiwidXNlciI6IlZlZGVmb3JzIFRlc3QgRW1hbnVlbCIsInVzZXJfaWQiOiIxMDc5NjFlMC1mNzg0LTQyOGQtYTRlNS1jMTM3MjcxMmEwMTEiLCJ0ZW5hbnRfaWQiOiJkMzEyOTAzNS1iNjc2LTRlN2QtYWU1MS1hM2U3MWMwMGRiMzEifQ.xRPfNGyo0whSAxy30LP9GBioZubNMR0j3oynl1yHYtU");

const geofenceData = {
  "name": "",
  "address": "",
  "area": {
    "lat": "",
    "lng": ""
  },
  "radius": 100,
  "type": "",
  "place_name": "",
  "floor_name": "",
  "department_name": "",
  "polygon": [

  ],
}

var arrayID = {
  "id": sessionStorage.arrayID
}


/* var editPolygon = JSON.parse(sessionStorage.getItem("polygon1")) */


/* console.log(editPolygon) */
console.log(arrayID)

axios.get(apiEditGeofence + arrayID.id, { headers: { Authorization: AuthEditStr } })

  .then(function (response) {

    console.log(response.data);
    var setPolygon = response.data.polygon
    sessionStorage.setItem("polygon1", JSON.stringify(setPolygon))

     
    /* console.log(storedEditPolygonArray); */
    
    var adress = document.getElementById("addressInput");
    adress.value = response.data.address;

    var namn = document.getElementById("nameInput");
    namn.value = response.data.name;

    var type = document.getElementById("selectID");
    type.value = response.data.type;

    var radius = document.getElementById("radiusInput");
    radius.value = response.data.radius;
    radiusOnchange();

    var latitude = document.getElementById("latitudeInput");
    latitude.value = response.data.area.lat;
    latOnchange();

    var longitude = document.getElementById("longitudeInput");
    longitude.value = response.data.area.lng;
    lngOnchange();

    var place = document.getElementById("placeInput");
    place.value = response.data.place_name;

    var floor = document.getElementById("floorInput");
    floor.value = response.data.floor_name;

    var department = document.getElementById("departmentInput");    
    department.value = response.data.department_name;
  })
  .catch(function (error) {
    console.log(error);
  })

 

  