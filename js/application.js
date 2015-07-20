$(document).ready(function() {
  var index = false;

  $('input').keypress(function(e) {
    if(e.keyCode == 13) {
      var title = $('input')[0].value;
      $.ajax({
        type: "GET",
        url: "http://www.omdbapi.com/?t="+title+"&y=&plot=short&r=json",
        dataType: "JSON",
        success: function(response) {
          if(index) {
              $('p').remove();
              $('img').remove();
          }
          $('.container').append('<p>Movie Title: '+response.Title+'</p><p>Genre: '+response.Genre+'</p><p>Runtime: '+response.Runtime+'</p><p>Movie Plot: '+response.Plot+'</p>');
          console.log(response);
          index = true;
        },
        error: function() {console.log('url');}
    });
    }
  });



});