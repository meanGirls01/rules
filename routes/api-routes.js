const db = require('../models');

module.exports = function (app) {
    app.get("/", function (req, res) {

    });

    // POST route for saving a new todo. You can create a todo using the data on req.body
    app.post("/api/SOMETHING", function (req, res) {

    });

    // DELETE route for deleting todos. You can access the todo's id in req.params.id
    app.delete("/api/SOMETHING/:id", function (req, res) {

    });

    // PUT route for updating todos. The updated todo will be available in req.body
    app.put("/api/SOMETHING", function (req, res) {

    });
}