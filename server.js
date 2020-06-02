const axios = require('axios');
const express = require('express');
const config = require('config');
const connectDB = require('./config/db');
const auth = require('./middleware/auth');
const User = require('./model/User');

const PORT = 5000 || process.env.PORT;

const app = express();

app.use(express.json());

connectDB();

// @route   /popular
// @info    Get the most popular movies
// @access  Public
app.get('/popular', async (req, res) => {
  const response = await axios.get(
    `${config.get('MovieDB.BaseURL')}/movie/popular?api_key=${config.get(
      'MovieDB.API_Key'
    )}&language=en-US&page=1`
  );

  res.json(response.data);
});

// @route   /search
// @info    Search movies by title
// @access  Public
app.get('/search', async (req, res) => {
  try {
    const { searchTerm } = req.body;

    const response = await axios.get(
      `${config.get('MovieDB.BaseURL')}/search/movie?api_key=${config.get(
        'MovieDB.API_Key'
      )}&language=en-US&query=${searchTerm}&page=1&include_adult=false`
    );

    res.json(response.data);
  } catch (err) {
    console.log(err.message);
  }
});

// @route   /details
// @info    Get movie details with movie id
// @access  Public
app.get('/details', async (req, res) => {
  try {
    const { movieID } = req.body;

    const response = await axios.get(
      `${config.get('MovieDB.BaseURL')}/movie/${movieID}?api_key=${config.get(
        'MovieDB.API_Key'
      )}&language=en-US`
    );

    res.json(response.data);
  } catch (err) {
    console.log(err.message);
  }
});

// @route   /register
// @info    Register a new user
// @access  Public
app.post('/register', async (req, res) => {
  try {
    const { username } = req.body;

    const newUser = new User({
      username,
    });

    await newUser.save();

    res.json(newUser);
  } catch (err) {
    console.log(err.message);
  }
});

// @route   /add
// @info    Add movie to a user's watchlist
// @access  TODO: Change to private route
app.post('/add', auth, async (req, res) => {
  try {
    const newMovie = req.body;

    const currUser = await User.findOne({ username: req.user });

    currUser.watchList.push(newMovie);

    await currUser.save();

    res.json(currUser.watchList);
  } catch (err) {
    console.log(err.message);
  }
});

// TODO:
/*
  Implement authentication process
  */

app.listen(PORT, () => {
  console.log(`Server Started At ${PORT}`);
});
