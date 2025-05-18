const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { db } = require('../db/db');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  try {
    await db(); // Connect or reuse DB connection

    const { firstName, lastName, email, username, password } = req.body;

    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: 'User already exists!!' });
    }

    user = new User({
      firstName,
      lastName,
      email,
      username,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      'chetan', // Consider moving this secret to environment variables!
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token, userId: user.id });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    await db(); // Connect or reuse DB connection

    const { username, password } = req.body;

    let user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: `User doesn't exist!!` });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid username and password!!' });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      'chetan', // Move this secret to environment variables!
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token, userId: user.id });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
