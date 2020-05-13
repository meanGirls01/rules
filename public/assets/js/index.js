$(document).ready(function () {
    let search = $('#search');
    let input = $('.input');

    search.on('click', function (event) {
        event.preventDefault();
        let searchTerm = input.val().trim();

        $.get('/api/games').then(function (data) {
            if (searchTerm = data) {
            $('.card').text(data);
            };
        });
    })


})