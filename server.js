const express = require('express');
const session = require('express-session');
const passport = require('./config/passport');
const compression = require('compression');


// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8000;

// compress responses
app.use(compression());

// Requiring our models for syncing
const db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// =================Routes============================================
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

// Requiring our routes
require('./routes/pass-api-routes.js')(app);
require('./routes/pass-html-routes.js')(app);

// Syncing our sequelize models and then starting our Express app

db.sequelize.sync({}).then(function () {
  app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
  });
});
