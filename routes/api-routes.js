const db = require('../models');

module.exports = function (app) {
    // POST route for saving a new game. You can create a game using the data on req.body
    app.post('/api/SOMETHING', function (req, res) {
        db.Games.create(req.body)
        .then(function(dbGame){
            res.json(dbGame);
          })
            .catch(function(err) {
                res.json(err);
            })
    });

    // DELETE route for deleting game. You can access the game's id in req.params.id
    app.delete('/api/SOMETHING/:id', function (req, res) {
        db.Games.destroy( {
            where: {
               id: req.params.id 
            }
        })
        .then(function(){
            res.json(true);
          })
            .catch(function(err) {
                res.json(err);
            })
    });

    // PUT route for updating game. The updated game will be available in req.body
    app.put('/api/SOMETHING/:id', function (req, res) {
        db.Games.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(function(dbGame){
            res.json(dbGame);
          })
            .catch(function(err) {
                res.json(err);
            })
        });
};
