
function addNewGeofence() {
    var createGeofenceView = document.getElementById("createGeofenceView");
    var manageGeofenceTable = document.getElementById("manageGeofenceTable");
    if (createGeofenceView.style.display !== "grid") {
        createGeofenceView.style.display = "grid";
        manageGeofenceTable.style.display = "none";
    }
}

function cancelManageView() {
    var createGeofenceView = document.getElementById("createGeofenceView");
    var manageGeofenceTable = document.getElementById("manageGeofenceTable");
    if (manageGeofenceTable.style.display === "none") {
        manageGeofenceTable.style.display = "table";
        createGeofenceView.style.display = "none";
    }
}