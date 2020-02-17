/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function sortDropdown() {
    document.getElementById("mySortDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches(".sortdropbtn")) {
        var mySortDropdown = document.getElementById("mySortDropdown");
        if (mySortDropdown.classList.contains("show")) {
            mySortDropdown.classList.remove("show");
        }
    }
    var filterDropdown = document.getElementById("myFilterDropdown");
    if (!e.target.matches(".filterdropbtn")) {
        filterDropdown.style.display = "none";
    }
}

function filterDropdown() {
    var filterDropdown = document.getElementById("myFilterDropdown");
    if (filterDropdown.style.display === "block") {
        filterDropdown.style.display = "none";
    } else {
        filterDropdown.style.display = "block";
    }
}

function filterFunction() {
    var input, filter, div, a, i;
    input = document.getElementById("filterInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myFilterDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
