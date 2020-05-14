$(document).ready(function () {
  $('.collapsible').collapsible();
  let search = $('#search');
  let input = $('.input');

  search.on('click', function (event) {
    event.preventDefault();
    let searchTerm = input.val().trim();

    $.get('/api/games', function (data) {
      if ((searchTerm = data)) {
        console.log(data);
        $('.game-title').text(data.title);
        $('category').text(data.category);
        $('country').text(data.country_origin);
        $('game-description').text(data.description);
        $('game-instructions').text(data.instructions);
      }
    });
  });
});
