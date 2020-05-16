const path = require('path');
let isAuthenticated = require('../config/middleware/isAuthenticated');

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/about.html'));
  });

  app.get('/addGame', isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, '../public/addGame.html'));
  });

  app.get('/all', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/all.html'));
  });

  app.get('/signup', function (req, res) {
    // If the user already has an account send them to the members page
    res.sendFile(path.join(__dirname, '../public/signup.html'));
  });

  app.get('/login', function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect('/member');
    }
    res.sendFile(path.join(__dirname, '../public/login.html'));
  });
  // Route for logging user out
  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get('/member', isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, '../public/member.html'));
  });
};
