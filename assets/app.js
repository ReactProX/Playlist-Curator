//initialize firebase
var firebaseConfig = {
  apiKey: "AIzaSyA9siLziz2yFElLNJ3d_1_6nNs42IW_jAs",
  authDomain: "minty-tracks.firebaseapp.com",
  databaseURL: "https://minty-tracks.firebaseio.com",
  projectId: "minty-tracks",
  storageBucket: "minty-tracks.appspot.com",
  messagingSenderId: "625017438260",
  appId: "1:625017438260:web:193c815376abc62b"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

//onclick for btnAdd button to push user subreddits into checkboxes
$("#btnAdd").on("click", function () {
  var musicSub = $("#newSub").val().trim();
  var timeframe = $("#timeframe").val();

  if (!musicSub) {

  }
  else {

    $("#newSub").val("")
    var newSub = {
      "musicSub": musicSub,
      "timeframe": timeframe
    };

    database.ref().push(newSub);
  };
});

//database function to populate .checkboxSub
database.ref().on("child_added", function (childSnapshot) {
  var musicSub = childSnapshot.val().musicSub;
  var timeframe = childSnapshot.val().timeframe;

  $("#checkboxSub").prepend('<p>' +
    '<label>' +
    '<input type="checkbox" class="musicSub" musicSub=' + musicSub + ' timeframe=' + timeframe + ' id="' + musicSub + "_" + timeframe + '" />' +
    '<span>' + musicSub + "  in the last " + timeframe + '</span>' +
    '</label>' +
    '</p>')
});

//onclick for search button
$("#search").on("click", function () {
  // FOR each entry in #checkboxSub
  var list_of_subs = [];
  $(".musicSub").each(function (i) {
    console.log(i);
    if ($(this).prop('checked') == true);
    {
      var ms = $(this).attr('musicSub').val();
      var tf = $(this).attr('timeframe').val();
    }
    list_of_subs.push((ms, tf));
  });

  response = reddit_call(list_of_subs);
  console.log(response);


  // ORDER MUST BE PRESERVED
  // INVOKE matts function for calling Reddit API
  // INVOKE Nicks function using matts Reddit response - STORE RESULTS
  // INVOKE the GET_BPM fxn
  // COMBINE ELEMENTS INTO MAIN WEBSITE

  // PUT his reponse to use

  // Call NICKS function with new data

});

//interactive element functionality
$(document).ready(function () {
  $('select').formSelect();
});

$(document).ready(function () {
  $('.sidenav').sidenav(); 
});


var reddit_call = function (data) {
  /*
  DESCRIPTION:
    MayAJAX?
    Take in a list of tuples and pass them as requests to the Reddit API
      - Parse response to extract any and all Youtube type links
        - There may be some regex to do this
      - Parsing of payload

  INPUTS: data - list of tuples [(sub,time),(sub,time),(sub,time),...,(sub,time)]

  RETURN:
    - return LIST: [(tube_id, artist-title), (tube_id, artist-title), ..., (tube_id, artist-title)]
  */
  return ("reddit call functioned properly")
}


// youtube link validator
function validateYouTubeUrl(url) {
  if (url != undefined || url != '') {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length == 11) {
      // Do anything for being valid
      // if need to change the url to embed url then use below line
      return (match[2]);
      //$('#ytplayerSide').attr('src', 'https://www.youtube.com/embed/' + match[2] + '?autoplay=0');
    }
    else {
      // Do anything for not being valid
    }
  }
  return (false);
}

