// // Board Game Atlas
// // client_id = Bg9YHLTA27
// var APIKey = 'Bg9YHLTA27';
// var ids= 'SVQRjsXrhj'
// var URLBase= 'https://www.boardgameatlas.com/api/search?'
// var gameURL= 'https:www.boardgameatlas.com/api/search?monopoly&client_id= Bg9YHLTA27'


// // Game API call:
// function searchGame(game) {
// 	var gameURL = 'https://www.boardgameatlas.com/api/search?'
//          +
// 		ids +
// 		game +
//         '&client_id= Bg9YHLTA27' 
//         ;

// 	$.ajax({ url: gameURL, method: 'GET' })
// 	.then(function(response) {
// 		// EMPTY DIVS BEFORE NEW SEARCH ENTERED:
// 		$('#userInput').empty();
// 	});	
	



// $(document).ready(function () {
// // On Click Function
// 	$('#searchBtn').on('click', function(event) {
// 	event.preventDefault();
// 	var userInput = $('#userInput')
// 		.val()
// 		.trim();
// 	searchGame(userInput);
	
// 	})
// });
