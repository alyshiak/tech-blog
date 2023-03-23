const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');
const path = require('path');

router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: Post, User }],
    });
    const postAll = postData.map((obj) => obj.get({ plain: true }));
    res.render('post', { postAll, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/playlist');
    return;
  }

  res.render('login');
});

router.get('/logout', async (req, res) => {
  console.log('Logout route called');
  if (req.session.logged_in) {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error during logout' });
      }
      res.clearCookie('connect.sid');
      // Redirect to the login page after successfully logging out
      res.redirect('/login');
    });
  } else {
    res.status(400).json({ message: 'You are not logged in' });
  }
});


module.exports = router;