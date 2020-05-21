// code that runs when document is ready
$(document).ready(function () {

  // activates nav bar to be functional

  let burger = document.querySelector('.navbar-burger');
  let menu = document.querySelector('.navbar-menu');
  burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });

  $.get('/api/user_data').then(function (data) {
    console.log(data);
    $('.member-name').text(data.username);
  });

  // grabbing elements from index.html

  let search = $('#search');
  let input = $('.input');

  // adding event listener to search button
  search.on('click', event => {
    event.preventDefault();

    $('#put-cards-here').empty();

    // replacing the image on the screen for the cards
    $('#screenlogo').attr('style', ' display:none');

    // variable for value of search term
    let searchTerm = input.val().trim();

    $.get('/api/games/' + searchTerm, function (data) {
    // get call to retrieve data selected from api using search term value
      if (data.length !== 0) {
        for (var i = 0; i < data.length; i++) {

          // template literal for printing data to page
          let collapsible = `<ul class="collapsible popout">
    <li>
        <div class="collapsible-header has-text-weight-bold" style="display:flex; justify-content: space-between;">${data[i].title} <span class="has-text-right has-text-black has-text-weight-light">${data[i].User.username}</span></div>
        <div class="collapsible-body"><span>
        <p class="category-country">Category: ${data[i].category}</p>
        <p class="category-country">Country of Origin: ${data[i].country_origin}</p>
        </span>
        </div>
    </li>
    <li>
        <div class="collapsible-header">Description:</div>
        <div class="collapsible-body"><span>${data[i].description}</span>
        </div>
    </li>
    <li>
        <div class="collapsible-header">Rules:</div>
        <div class="collapsible-body"><span>${data[i].instructions}</span>
        </div>
    </li>
</ul>`;
          $('#put-cards-here').append(collapsible);
          $('.collapsible').collapsible();
        }
      } else {
        $('#put-cards-here').addClass('.no-games').text('No games found!');
      }
    });

    input.val('');

  });
});
