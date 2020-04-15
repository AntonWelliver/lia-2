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
  
  //Show
  $('#showPicAlarm').show()
  $('#textAlarm').show()
  
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

  //show
  $('#showPicUser').show()
  $('#textUser').show()
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

  //show
  $('#textContact').show()
  $('#showPicContacts').show()
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

  //Show
  $('#showPicPlaces').show()
  $('#textPlaces').show()
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

  //show
  $('#showPicHistory').show()
  $('#textHistory').show()
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

  //show
  $('#showPicGeofence').show()
  $('#textGeofence').show()
  
}
