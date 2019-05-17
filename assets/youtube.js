$(document).ready(function(){
    var apiKey = "AIzaSyBAwvUtLai4tWeDFXhaRP5T5yHrckg7vA0"
    var oAuth = "1039777192032-c05a83414ftc6lf2je6eb6ho2qneopev.apps.googleusercontent.com"
    // var queryAPI = "https://www.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true"
    // var queryURL = "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=SjFo6l4c-oc&key=" + apiKey
    var queryURL = "https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&mine=true&key=" + apiKey;
    

    $.ajax({
        url: "https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&mine=true&key=AIzaSyBAwvUtLai4tWeDFXhaRP5T5yHrckg7vA0",
        method: "GET",
        access_token: "1039777192032-c05a83414ftc6lf2je6eb6ho2qneopev.apps.googleusercontent.com",
        Accept: "application/json"
        
    }).then(function(response){
        console.log(response);
        // let results = response.data;
        // console.log(results);
    })

//     curl \
//   'https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&mine=true&key=[YOUR_API_KEY]' \
//   --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
//   --header 'Accept: application/json' \
//   --compressed


//   function authenticate() {
//     return gapi.auth2.getAuthInstance()
//         .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
//         .then(function() { console.log("Sign-in successful"); },
//               function(err) { console.error("Error signing in", err); });
//   }
//   function loadClient() {
//     gapi.client.setApiKey(apiKey);
//     return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//         .then(function() { console.log("GAPI client loaded for API"); },
//               function(err) { console.error("Error loading GAPI client for API", err); });
//   }
//   // Make sure the client is loaded and sign-in is complete before calling this method.
//   function execute() {
//     return gapi.client.youtube.channels.list({
//       "part": "snippet,contentDetails,statistics",
//       "mine": true
//     })
//         .then(function(response) {
//                 // Handle the results here (response.result has the parsed body).
//                 console.log("Response", response);
//               },
//               function(err) { console.error("Execute error", err); });
//   }
//   gapi.load("client:auth2", function() {
//     gapi.auth2.init({client_id: oAuth});
//   });

//   authenticate().then(loadClient);
//   execute();


{/* <button onclick="authenticate().then(loadClient)">authorize and load</button>
<button onclick="execute()">execute</button> */}

})