$(document).ready(function () {
    let search = $('#search');
    let input = $('.input');

    search.on('click', function (event) {
        event.preventDefault();

        let searchTerm = input.val().trim();

        searchGames(searchTerm);
    })

    function searchGames(searchTerm) {
        if (searchTerm === data) {

            $.get("/api/games", function(data) {
                games = data;
                $('.card').text(data);
                
            });
            
        }
    }


})