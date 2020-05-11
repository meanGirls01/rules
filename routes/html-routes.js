const path = require('path');

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, 'index.html'));
    });

    app.get('/about', function (req, res) {
        res.sendFile(path.join(__dirname, 'about.html'));
    });

    app.get('/addgame', function (req, res) {
        res.sendFile(path.join(__dirname, 'addGame.html'));
    });

};
