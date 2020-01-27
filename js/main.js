
function toggleDropdown() {
    document.getElementById("placeDropdownMenu").classList.toggle("show");
}

window.onclick = function (e) {
    e.preventDefault();

    if (!e.target.matches('.dropbtn')) {
        var placeDropdownMenu = document.getElementsByClassName("placeDropdownMenu");
        var i;
        for (i = 0; i < placeDropdownMenu.length; i++) {
            var openDropdown = placeDropdownMenu[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function addNewGeofence() {
    var createGeofenceView = document.getElementById("createGeofenceView");
    var manageGeofenceTable = document.getElementById("manageGeofenceTable");
    if (createGeofenceView.style.display === "none") {
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