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
  $('#showPicAlarm1').fadeIn(1000);
  $('#textAlarm1').fadeIn(1000);

  //Picture hide
  $('#showPicUser').hide()
  $('#showPicContacts').hide()
  $('#showPicPlaces').hide()
  $('#showPicHistory').hide()
  $('#showPicGeofence').hide()
  $('#showPicGeofence1').hide()
  $('#showPicGeofence2').hide()

  //Text hide
  $('#textContact').hide()
  $('#textUser').hide()
  $('#textHistory').hide()
  $('#textPlaces').hide()
  $('#textGeofence').hide()
  $('#textGeofence1').hide()
  $('#textGeofence2').hide()

 //Icons HeaderText
 $('#userHeaderText').css("color", "white")
 $('#contactHeaderText').css("color", "white")
 $('#placesHeaderText').css("color", "white")
 $('#historyHeaderText').css("color", "white")
 $('#geofenceHeaderText').css("color", "white")
  
  //Show
  $('#showPicAlarm').show()
  $('#showPicAlarm1').show()
  $('#textAlarm').show()
  $('#textAlarm1').show()
  $('#larmHeaderText').css("color", "#2192fe")

  
}

function manualUser(){
  //fadeTimer
  $('#showPicUser').fadeIn(1000);
  $('#textUser').fadeIn(1000);

  //Picture hide
  $('#showPicAlarm').hide()
  $('#showPicAlarm1').hide()
  $('#showPicContacts').hide()
  $('#showPicPlaces').hide()
  $('#showPicHistory').hide()
  $('#showPicGeofence').hide()
  $('#showPicGeofence1').hide()
  $('#showPicGeofence2').hide()
  

  //Text hide
  $('#textContact').hide()
  $('#textAlarm').hide()
  $('#textAlarm1').hide()
  $('#textPlaces').hide()
  $('#textHistory').hide()
  $('#textGeofence').hide()
  $('#textGeofence1').hide()
  $('#textGeofence2').hide()

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
  $('#showPicAlarm1').hide()
  $('#showPicPlaces').hide()
  $('#showPicHistory').hide()
  $('#showPicGeofence').hide()
  $('#showPicGeofence1').hide()
  $('#showPicGeofence2').hide()

  //Text hide
  $('#textAlarm').hide()
  $('#textAlarm1').hide()
  $('#textUser').hide()
  $('#textPlaces').hide()
  $('#textHistory').hide()
  $('#textGeofence').hide()
  $('#textGeofence1').hide()
  $('#textGeofence2').hide()

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
  $('#showPicAlarm1').hide()
  $('#showPicContacts').hide()
  $('#showPicHistory').hide()
  $('#showPicGeofence').hide()
  $('#showPicGeofence1').hide()
  $('#showPicGeofence2').hide()

  //Text hide
  $('#textContact').hide()
  $('#textAlarm').hide()
  $('#textAlarm1').hide()
  $('#textUser').hide()
  $('#textHistory').hide()
  $('#textGeofence').hide()
  $('#textGeofence1').hide()
  $('#textGeofence2').hide()

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
  $('#showPicAlarm1').hide()
  $('#showPicContacts').hide()
  $('#showPicPlaces').hide()
  $('#showPicGeofence').hide()
  $('#showPicGeofence1').hide()
  $('#showPicGeofence2').hide()

  //Text hide
  $('#textContact').hide()
  $('#textAlarm').hide()
  $('#textAlarm1').hide()
  $('#textUser').hide()
  $('#textPlaces').hide()
  $('#textGeofence').hide()
  $('#textGeofence1').hide()
  $('#textGeofence2').hide()

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
  $('#showPicGeofence1').fadeIn(1000);
  $('#showPicGeofence2').fadeIn(1000);
  $('#textGeofence').fadeIn(1000);
  $('#textGeofence1').fadeIn(1000);
  $('#textGeofence2').fadeIn(1000);

  //Picture hide
  $('#showPicUser').hide()
  $('#showPicAlarm').hide()
  $('#showPicAlarm1').hide()
  $('#showPicContacts').hide()
  $('#showPicPlaces').hide()
  $('#showPicHistory').hide()
  $('#showPicGeofence1').hide()
  $('#showPicGeofence2').hide()

  //Text hide
  $('#textContact').hide()
  $('#textAlarm').hide()
  $('#textAlarm1').hide()
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
  $('#showPicGeofence1').show()
  $('#showPicGeofence2').show()

  $('#textGeofence').show()
  $('#textGeofence1').show()
  $('#textGeofence2').show()

  $('#geofenceHeaderText').css("color", "#2192fe")
  
}
