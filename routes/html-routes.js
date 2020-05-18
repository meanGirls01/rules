const path = require('path');
let isAuthenticated = require('../config/middleware/isAuthenticated');

module.exports = (app) => {
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/about.html'));
  });

  app.get('/addGame', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/addGame.html'));
  });

  app.get('/all', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/all.html'));
  });


};
