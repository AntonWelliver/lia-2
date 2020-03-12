const apiGeofence = "https://api.proximi.fi/core/geofences/";
const AuthStr = 'Bearer '.concat("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlzcyI6ImM4OTA0YzkyLTlmN2MtNGE3Yy1iZDZjLTZiMjBiMTczZDEwZSIsInR5cGUiOiJ1c2VyIiwidXNlciI6IlZlZGVmb3JzIEVtYW51ZWwiLCJ1c2VyX2lkIjoiN2VmNTI2MzctZGFmNy00ZGRlLTljMjAtNGIwNmZhMjJhNTIyIiwidGVuYW50X2lkIjoiYzg5MDRjOTItOWY3Yy00YTdjLWJkNmMtNmIyMGIxNzNkMTBlIn0.mYpZ--Ecuzc37FHCh4oyGj1gdy_CEpvOhQg0vTS0alE");

/* const axiosConfig = {
  headers: {
      'Content-Type': 'application/json'
      
  }
}; */

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

console.log(geofenceData);

function inputCheck(){

  var NameInput = document.getElementById("nameInput").value;
  geofenceData["name"]=NameInput;

  var AddressInput = document.getElementById("addressInput").value;
  geofenceData["address"]=AddressInput;

  var TypeInput = document.getElementById("selectID").value;
  geofenceData["type"]=TypeInput;

  var LatitudeInput = document.getElementById("latitudeInput").value;
  geofenceData.area.lat=LatitudeInput;

  var LongitudeInput = document.getElementById("longitudeInput").value;
  geofenceData.area.lng=LongitudeInput;
  
  var RadiusInput = document.getElementById("radiusInput").value;
  geofenceData["radius"]=RadiusInput;

  var PlaceInput = document.getElementById("placeInput").value;
  geofenceData["place_name"]=PlaceInput;

  var FloorInput = document.getElementById("floorInput").value;
  geofenceData["floor_name"]=FloorInput;

  var DepartmentInput = document.getElementById("departmentInput").value;
  geofenceData["department_name"]=DepartmentInput;

  axios.post(apiGeofence, geofenceData, {
    headers: { Authorization: AuthStr }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
      console.log(error.response);
  })
  setTimeout(function(){ 
    window.location.href = "/index.html" 
  }, 1000);
}
