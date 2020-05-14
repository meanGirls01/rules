$(document).ready(function () {
  let burger = document.querySelector('.navbar-burger');
  let menu = document.querySelector('.navbar-menu');
  burger.addEventListener('click', function () {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });

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
          $('.gamedescription').text(data[i].description);
          $('.gameinstructions').text(data[i].instructions);
        }
      }
    });
  });
  // making the cards on index collapsable, has to be here because we are creating the card with string literals
  $('.collapsible').collapsible();
});
