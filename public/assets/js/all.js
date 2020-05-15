$(document).ready(function () {
  let burger = document.querySelector('.navbar-burger');
  let menu = document.querySelector('.navbar-menu');
  burger.addEventListener('click', function () {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });

  let all = $('#all-games');

  $.get('/api/all', function (data) {
    console.log(data);
    console.log(data.length);
    for (let i = 0; i < data.length; i++) {
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
      $(all).append(collapsible);
      $('.collapsible').collapsible();
    };
  });
});