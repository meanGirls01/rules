const path = require('path');

module.exports = function (app) {
    
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, 'index.html'));
    });

    app.get('/SOMETHING', function (req, res) {
        res.sendFile(path.join(__dirname, 'OTHERPAGE.html'));
    });

    app.get('/SOMETHING', function (req, res) {
        res.sendFile(path.join(__dirname, 'OTHERPAGE.html'));
    });

};
