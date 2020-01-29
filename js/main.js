
function addNewGeofence() {
    console.log("hej");
    var createGeofenceView = document.getElementById("createGeofenceView");
    var manageGeofenceTable = document.getElementById("manageGeofenceTable");
    if (createGeofenceView.style.display !== "grid") {
        createGeofenceView.style.display = "grid";
        manageGeofenceTable.style.display = "none";
    } else {
        createGeofenceView.style.display = "none";
        manageGeofenceTable.style.display = "table";
    }
}

function cancelManageView() {
    var createGeofenceView = document.getElementById("createGeofenceView");
    var manageGeofenceTable = document.getElementById("manageGeofenceTable");
    if (manageGeofenceTable.style.display === "none") {
        manageGeofenceTable.style.display = "table";
        createGeofenceView.style.display = "none";
    } else {
        manageGeofenceTable.style.display = "none";
        createGeofenceView.style.display = "grid";
    }
}