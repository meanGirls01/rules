$(document).ready(function () {
  let burger = document.querySelector('.navbar-burger');
  let menu = document.querySelector('.navbar-menu');
  burger.addEventListener('click', function () {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });

  let submit = $('.submit');
  let cancel = $('.cancel');

  submit.on('click', function (event) {
    event.preventDefault();

    let newGame = {
      title: $('#name-input').val().trim(),
      description: $('.description-input').val().trim(),
      country_origin: $('#dropdown').val().trim(),
      category: $('#category-input').val().trim(),
      instructions: $('.instructions-input').val().trim(),
    };

    $.post('/api/newgame', newGame)
      .then(function (data) {
        console.log(data);
        window.location.replace('/all');
      });

    $('.name-input').val('');
    $('.description-input').val('');
    $('#dropdown').val('');
    $('.category-input').val('');
    $('.instructions-input').val('');
  });

});