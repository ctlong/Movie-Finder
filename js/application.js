$(document).ready(function() {
  var index = false;
  var input = $('input')[0];
  var timer;

  function shift() {
    $('.main').animate({
      'margin-top':'30px'}, 600);
  }

  function loading(num) {
    $('.loading').append('<h6></h6>')
    if(num == 6) {
      $('.loading').remove();
      clearInterval(timer);
    }
  }

  function main() {
    var title = input.value;
    $.ajax({
      type: "GET",
      url: "http://www.omdbapi.com/?t="+title+"&y=&plot=short&r=json",
      dataType: "JSON",
      success: function(response) {
        $('.second').append('<div class="col-xs-6"><img src="'+response.Poster+'"></div><div class="col-xs-6"><p><strong>Title</strong>&nbsp;&nbsp;'+response.Title+'</p><p><strong>Year</strong>&nbsp;&nbsp;'+response.Year+'</p><p><strong>Rated</strong>&nbsp;&nbsp;'+response.Rated+'</p><p><strong>Released</strong>&nbsp;&nbsp;'+response.Released+'</p><p><strong>Runtime</strong>&nbsp;&nbsp;'+response.Runtime+'</p><p><strong>Genre</strong>&nbsp;&nbsp;'+response.Genre+'</p><p><strong>Director</strong>&nbsp;&nbsp;'+response.Director+'</p><p><strong>Writer</strong>&nbsp;&nbsp;'+response.Writer+'</p><p><strong>Actors</strong>&nbsp;&nbsp;'+response.Actors+'</p><p><strong>Language</strong>&nbsp;&nbsp;'+response.Language+'</p><p><strong>Country</strong>&nbsp;&nbsp;'+response.Country+'</p><p><strong>Awards</strong>&nbsp;&nbsp;'+response.Awards+'</p></div>');
        index = true;
      }
    });
  }

  $('input').keypress(function(e) {
    if(e.keyCode == 13) {
      if(index) {
        $('.second').remove();
        $('.row').append('<div class="col-xs-12 loading"></div>');
        $('.row').append('<div class="col-xs-12 second"></div>');
        $('.second').hide();
      }
      main();
      shift();
      var num = 0;
      timer = setInterval(function() {
        loading(num);
        num++;
      },500);
      setTimeout(function() {
        $('.second').show();
      },3600);
    }
  });



});