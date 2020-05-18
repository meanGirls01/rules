// code that runs when document is ready
$(document).ready(function () {
  // activates nav bar to be functional
  let burger = document.querySelector('.navbar-burger');
  let menu = document.querySelector('.navbar-menu');
  burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });

  // grabbing elements from index.html
  let search = $('#search');
  let input = $('.input');

  // adding event listener to search button
  search.on('click', event => {
    event.preventDefault();

    // replacing the image on the screen for the cards
    $('#screenlogo').attr('style', ' display:none');

    // variable for value of search term
    let searchTerm = input.val().trim();

    // get call to retrieve data selected from api using search term value
    $.get('/api/' + searchTerm, data => {
      if (data.length !== 0) {
        for (var i = 0; i < data.length; i++) {
          // template literal for printing data to page
          let collapsible = `<ul class="collapsible popout">
    <li>
        <div class="collapsible-header">${data[i].title}</div>
        <div class="collapsible-body"><span>
        <h4>Category: ${data[i].category}</h4>
        <h4>Country of Origin: ${data[i].country_origin}</h4>
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
  });
});
