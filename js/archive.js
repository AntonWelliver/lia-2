/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function sortDropdown() {
    document.getElementById("mySortDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    e.preventDefault();
    if (!e.target.matches(".sortdropbtn")) {
        var mySortDropdown = document.getElementById("mySortDropdown");
        if (mySortDropdown.classList.contains("show")) {
            mySortDropdown.classList.remove("show");
        }
    }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function filterDropdown() {
    var filterDropdown = document.getElementById("myFilterDropdown");
    if (filterDropdown.style.display === "inline-block") {
        filterDropdown.style.display = "none";
    } else {
        filterDropdown.style.display = "inline-block";
    }
}

function filterFunction() {
    console.log("hej2");
    var input, filter, ul, li, a, i;
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

/* window.onclick = function (e) {
    e.preventDefault();
    if (!e.target.matches(".filterdropbtn")) {
        var myFilterDropdown = document.getElementById("myFilterDropdown");
        if (myFilterDropdown.style.display("inline-block")) {
            myFilterDropdown.style.display("none");
        }
    }
} */