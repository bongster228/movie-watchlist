const router = require('express').Router();
const axios = require('axios');
const config = require('config');

// @route   /api/movie/popular
// @info    Get the most popular movies
// @access  Public
router.get('/popular', async (req, res) => {
  try {
    const response = await axios.get(
      `${config.get('MovieDB.BaseURL')}/movie/popular?api_key=${config.get(
        'MovieDB.API_Key'
      )}&language=en-US&page=1`
    );

    res.json(response.data);
  } catch (err) {
    console.log(err.message);
  }
});

// @route   /api/movie/search
// @info    Search movies by title
// @access  Public
router.get('/search', async (req, res) => {
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

// @route   /api/movie/details
// @info    Get movie details with movie id
// @access  Public
router.get('/details', async (req, res) => {
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

module.exports = router;
