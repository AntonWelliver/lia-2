/* var toggle = false; */
/* var box = document.getElementById("box");
var test1 = document.getElementById('showTest'); */

/* function manualtest() {
  var text2 = $('#showTest');
  var test1 = $('#imageLink2');
  console.log(test1);
  $("div[id*='box']").hide();
  var images = $( "img[name*='images']" );
  images.each(function(index) {
    console.log("hej");
    if ($(test1).val(text2)) {
      console.log("hej2");
      $(text2).show();
    }
  });
} */

function manualLarm(){
  //fadeTimer
  $('#showPicAlarm').fadeIn(1000);
  $('#textAlarm').fadeIn(1000);

  //Picture hide
  $('#showPicUser').hide()
  $('#showPicContacts').hide()
  $('#showPicPlaces').hide()
  $('#showPicHistory').hide()
  $('#showPicGeofence').hide()

  //Text hide
  $('#textContact').hide()
  $('#textUser').hide()
  $('#textHistory').hide()
  $('#textPlaces').hide()
  $('#textGeofence').hide()

 //Icons HeaderText
 $('#userHeaderText').css("color", "white")
 $('#contactHeaderText').css("color", "white")
 $('#placesHeaderText').css("color", "white")
 $('#historyHeaderText').css("color", "white")
 $('#geofenceHeaderText').css("color", "white")
  
  //Show
  $('#showPicAlarm').show()
  $('#textAlarm').show()
  $('#larmHeaderText').css("color", "#2192fe")

  
}

function manualUser(){
  //fadeTimer
  $('#showPicUser').fadeIn(1000);
  $('#textUser').fadeIn(1000);

  //Picture hide
  $('#showPicAlarm').hide()
  $('#showPicContacts').hide()
  $('#showPicPlaces').hide()
  $('#showPicHistory').hide()
  $('#showPicGeofence').hide()

  //Text hide
  $('#textContact').hide()
  $('#textAlarm').hide()
  $('#textPlaces').hide()
  $('#textHistory').hide()
  $('#textGeofence').hide()

  //Icons HeaderText
  $('#larmHeaderText').css("color", "white")
  $('#contactHeaderText').css("color", "white")
  $('#placesHeaderText').css("color", "white")
  $('#historyHeaderText').css("color", "white")
  $('#geofenceHeaderText').css("color", "white")

  //show
  $('#showPicUser').show()
  $('#textUser').show()
  $('#userHeaderText').css("color", "#2192fe")
}

function manualContacts(){
  //fadeTimer
  $('#showPicContacts').fadeIn(1000);
  $('#textContact').fadeIn(1000);

  //Picture hide
  $('#showPicUser').hide()
  $('#showPicAlarm').hide()
  $('#showPicPlaces').hide()
  $('#showPicHistory').hide()
  $('#showPicGeofence').hide()

  //Text hide
  $('#textAlarm').hide()
  $('#textUser').hide()
  $('#textPlaces').hide()
  $('#textHistory').hide()
  $('#textGeofence').hide()

  //Icons HeaderText
  $('#larmHeaderText').css("color", "white")
  $('#userHeaderText').css("color", "white")
  $('#placesHeaderText').css("color", "white")
  $('#historyHeaderText').css("color", "white")
  $('#geofenceHeaderText').css("color", "white")

  //show
  $('#textContact').show()
  $('#showPicContacts').show()
  $('#contactHeaderText').css("color", "#2192fe")

}

function manualPlaces(){
  //fadeTimer
  $('#showPicPlaces').fadeIn(1000);
  $('#textPlaces').fadeIn(1000);

  //Picture hide
  $('#showPicUser').hide()
  $('#showPicAlarm').hide()
  $('#showPicContacts').hide()
  $('#showPicHistory').hide()
  $('#showPicGeofence').hide()

  //Text hide
  $('#textContact').hide()
  $('#textAlarm').hide()
  $('#textUser').hide()
  $('#textHistory').hide()
  $('#textGeofence').hide()

  //Icons HeaderText
  $('#larmHeaderText').css("color", "white")
  $('#userHeaderText').css("color", "white")
  $('#contactHeaderText').css("color", "white")
  $('#historyHeaderText').css("color", "white")
  $('#geofenceHeaderText').css("color", "white")

  //Show
  $('#showPicPlaces').show()
  $('#textPlaces').show()
  $('#placesHeaderText').css("color", "#2192fe")
  
}

function manualHistory(){
  //fadeTimer
  $('#showPicHistory').fadeIn(1000);
  $('#textHistory').fadeIn(1000);

  //Picture hide
  $('#showPicUser').hide()
  $('#showPicAlarm').hide()
  $('#showPicContacts').hide()
  $('#showPicPlaces').hide()
  $('#showPicGeofence').hide()

  //Text hide
  $('#textContact').hide()
  $('#textAlarm').hide()
  $('#textUser').hide()
  $('#textPlaces').hide()
  $('#textGeofence').hide()

  //Icons HeaderText
  $('#larmHeaderText').css("color", "white")
  $('#userHeaderText').css("color", "white")
  $('#contactHeaderText').css("color", "white")
  $('#placesHeaderText').css("color", "white")
  $('#geofenceHeaderText').css("color", "white")
  

  //show
  $('#showPicHistory').show()
  $('#textHistory').show()
  $('#historyHeaderText').css("color", "#2192fe")
  
}

function manualGeofence(){
  //fadeTimer
  $('#showPicGeofence').fadeIn(1000);
  $('#textGeofence').fadeIn(1000);

  //Picture hide
  $('#showPicUser').hide()
  $('#showPicAlarm').hide()
  $('#showPicContacts').hide()
  $('#showPicPlaces').hide()
  $('#showPicHistory').hide()

  //Text hide
  $('#textContact').hide()
  $('#textAlarm').hide()
  $('#textUser').hide()
  $('#textPlaces').hide()
  $('#textHistory').hide()

  //Icons HeaderText
  $('#larmHeaderText').css("color", "white")
  $('#userHeaderText').css("color", "white")
  $('#contactHeaderText').css("color", "white")
  $('#placesHeaderText').css("color", "white")
  $('#historyHeaderText').css("color", "white")
  

  //show
  $('#showPicGeofence').show()
  $('#textGeofence').show()
  $('#geofenceHeaderText').css("color", "#2192fe")
  
}
