const router = require('express').Router();
const axios = require('axios');
const config = require('config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const User = require('../../model/User');

// @route   /api/auth/
// @info    Authenticate user and send user info
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');

    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err.message });
  }
});

// @route   /api/auth/register
// @info    Register a new user
// @access  Public
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    let user = await User.findOne({ username });

    if (user !== null) {
      return res.status(500).send({ msg: 'User Already Exists' });
    }

    user = new User({
      username,
      password,
    });

    // Encrypt password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    // Create a token using new user's DB id
    jwt.sign(
      payload,
      config.get('jwt.secret'),
      { expiresIn: '1h' },
      (err, token) => {
        if (err) {
          return res.status(500).send({ error: err.message });
        }

        res.json({ token });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

// @route   /api/auth/login
// @info    Login the user
// @access  Public
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json('User Not Found');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json('Access Denied');
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get('jwt.secret'),
      { expiresIn: '1h' },
      (err, token) => {
        if (err) return res.status(500).send(err.message);

        res.json({ token });
      }
    );
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
