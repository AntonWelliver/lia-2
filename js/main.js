
function addNewGeofence() {
    var createGeofenceView = document.getElementById("createGeofenceView");
    var manageGeofenceTable = document.getElementById("manageGeofenceTable");
    var statusDataHeader = document.getElementById("statusdataheader");
    if (createGeofenceView.style.display !== "grid") {
        createGeofenceView.style.display = "grid";
        manageGeofenceTable.style.display = "none";
        statusDataHeader.style.display = "none";
    }
}

function cancelManageView() {
    var createGeofenceView = document.getElementById("createGeofenceView");
    var manageGeofenceTable = document.getElementById("manageGeofenceTable");
    var statusDataHeader = document.getElementById("statusdataheader");
    if (manageGeofenceTable.style.display === "none") {
        manageGeofenceTable.style.display = "table";
        createGeofenceView.style.display = "none";
        statusDataHeader.style.display = "grid";
    }
}