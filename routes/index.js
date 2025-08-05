const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Intern = require('../models/Intern');

router.get('/', (req, res) => res.redirect('/login'));

// Register
router.get('/register', (req, res) => res.render('register'));

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const userExists = await Intern.findOne({ email });

  if (userExists) {
    req.flash('error', 'Email already registered');
    return res.redirect('/register');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new Intern({
    username,
    email,
    password: hashedPassword,
    referralCode: `${username.toLowerCase()}2025`,
    donationsRaised: Math.floor(Math.random() * 20000),
    rewards: ['Bronze Badge', 'Silver Badge']
  });

  await user.save();
  req.flash('success', 'Registration successful! Please login.');
  res.redirect('/login');
});

// Login
router.get('/login', (req, res) => res.render('login'));

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await Intern.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    req.flash('error', 'Invalid credentials');
    return res.redirect('/login');
  }

  req.session.user = user;
  res.redirect('/dashboard');
});

// Dashboard
router.get('/dashboard', (req, res) => {
  if (!req.session.user) return res.redirect('/login');
  res.render('dashboard', { user: req.session.user });
});

// Leaderboard
router.get('/leaderboard', async (req, res) => {
  const users = await Intern.find({}).sort({ donationsRaised: -1 });
  res.render('leaderboard', { users });
});

// Logout
router.get('/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/login'));
});

module.exports = router;
