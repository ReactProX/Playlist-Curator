//onclick for btnAdd button to push user subreddits into checkboxes
$("#btnAdd").on("click", function(){
    var musicSub = $("#newSub").val().trim();
    var timeframe = $("#timeframe").val();
    
    if(!musicSub){

    }
    else{
        $("#newSub").val("")
        $("#checkboxSub").prepend('<p>' +
            '<label>' +
              '<input type="checkbox" />' +
              '<span>' + musicSub + "  in the " + timeframe + '</span>' +
            '</label>' +
          '</p>')
    };
});

//interactive element functionality
$(document).ready(function(){
    $('select').formSelect();
  });

$(document).ready(function(){
    $('.sidenav').sidenav();
});