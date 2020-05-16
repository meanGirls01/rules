// code that runs when document is ready
$(document).ready(function () {

  // activates nav bar to be functional
  let burger = document.querySelector('.navbar-burger');
  let menu = document.querySelector('.navbar-menu');
  burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });

  // grabbing elements from addGame.html
  let submit = $('.submit');

  // adding event listener to submit button
  submit.on('click', (event) => {
    event.preventDefault();

    // object for new games setting key values equal to user input
    let newGame = {
      title: $('#name-input').val().trim(),
      description: $('.description-input').val().trim(),
      country_origin: $('#dropdown').val().trim(),
      category: $('#category-input').val().trim(),
      instructions: $('.instructions-input').val().trim(),
    };

    // post call to add new game(s) to database
    $.post('/api/newgame', newGame);
    // .then(function (data) {
    // });

    // emptying values after inputs are submitted
    $('.name-input').val('');
    $('.description-input').val('');
    $('#dropdown').val('');
    $('.category-input').val('');
    $('.instructions-input').val('');
  });
});