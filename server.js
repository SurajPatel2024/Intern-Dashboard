require('dotenv').config(); // Load .env variables

const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// MongoDB connect
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}); 
  
// Middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true 
}));
app.use(flash());

app.use((req, res, next) => {
  res.locals.user = req.session.user;
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
});

// Routes
const routes = require('./routes/index');
app.use('/', routes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
