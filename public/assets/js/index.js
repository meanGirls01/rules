$(document).ready(function () {
  $('.collapsible').collapsible();
  let search = $('#search');
  let input = $('.input');

  search.on('click', function (event) {
    event.preventDefault();
    let searchTerm = input.val().trim();

    $.get('/api/' + searchTerm, function (data) {
      if (data.length !== 0) {

        console.log(data);
        for (var i = 0; i < data.length; i++) {
          $('.game-title').text(data[i].title);
          $('.category').text(data[i].category);
          $('.country').text(data[i].country_origin);
          $('.game-description').text(data[i].description);
          $('.game-instructions').text(data[i].instructions);
        };

      }
    });
  });
});
