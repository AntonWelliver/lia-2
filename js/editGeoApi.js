const apiEditGeofence = "https://api.proximi.fi/core/geofences/";
const AuthEditStr = 'Bearer '.concat("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlzcyI6ImM4OTA0YzkyLTlmN2MtNGE3Yy1iZDZjLTZiMjBiMTczZDEwZSIsInR5cGUiOiJ1c2VyIiwidXNlciI6IlZlZGVmb3JzIEVtYW51ZWwiLCJ1c2VyX2lkIjoiN2VmNTI2MzctZGFmNy00ZGRlLTljMjAtNGIwNmZhMjJhNTIyIiwidGVuYW50X2lkIjoiYzg5MDRjOTItOWY3Yy00YTdjLWJkNmMtNmIyMGIxNzNkMTBlIn0.mYpZ--Ecuzc37FHCh4oyGj1gdy_CEpvOhQg0vTS0alE");
/* const testID = "7c4decc3-3c1d-4e9b-a741-6724979a94a7" */


const geofenceData = {
    "name": "",
    "address": "",
    "area": {
      "lat": 57.6925358,
      "lng": 11.9742881        
    },
    "radius": 100,
    "type": "",
    "place_name": "",
    "floor_name": "",
    "department_name": ""
  }

  var test123 = {
    "id": "7c4decc3-3c1d-4e9b-a741-6724979a94a7"
  }
  
  console.log(test123);
  
  axios.get(apiEditGeofence + test123.id, { headers: { Authorization: AuthEditStr } })
  
.then(function (response) {
  /* for (var i = 0; i < response.data.length; i++) {
    newArray[i] = (response.data[i]);
  } */
  var adress = document.getElementById("addressInput");
  adress.value = response.data.address; 

  var namn = document.getElementById("nameInput");
  namn.value = response.data.name; 

  var type = document.getElementById("selectID");
  type.value = response.data.type; 

  var radius = document.getElementById("radiusInput");
  radius.value = response.data.radius; 

  var latitude = document.getElementById("latitudeInput");
  latitude.value = response.data.area.lat; 

  var longitude = document.getElementById("longitudeInput");
  longitude.value = response.data.area.lng;

  var place = document.getElementById("placeInput");
  place.value = response.data.place_name; 

  var floor = document.getElementById("floorInput");
  floor.value = response.data.floor_name; 

  var department = document.getElementById("departmentInput");
  department.value = response.data.department_name; 

  

  console.log(response);
  console.log(response.data.address);
  

  /*   function generateTable(data) {
        var getID = response.data.id;
        var test = document.getElementById(getID);
        console.log(test);
    } */
})
.catch(function (error) {
    console.log(error);
  })