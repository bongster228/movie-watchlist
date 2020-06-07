const router = require('express').Router();
const axios = require('axios');
const User = require('../../model/User');
const auth = require('../../middleware/auth');

// @route   /api/user/getwatch
// @info    Get the user's watch list
// @access  Private
router.get('/getwatch', auth, async (req, res) => {
  try {
    const currUser = await User.findById(req.user.id);

    res.status(200).json(currUser.watchList);
  } catch (err) {
    console.log(err.message);
  }
});

// @route   /api/user/getwatched
// @info    Get the user's watched list
// @accews  Private
router.get('/getwatched', auth, async (req, res) => {
  try {
    const currUser = await User.findById(req.user.id);

    res.status(200).json(currUser.watchedList);
  } catch (err) {
    console.log(err.message);
  }
});

// @route   /api/user/addwatch
// @info    Add movie to a user's watchlist
// @access  Private
router.post('/addwatch', auth, async (req, res) => {
  try {
    const newMovie = req.body;

    const currUser = await User.findById(req.user.id);

    currUser.watchList.unshift(newMovie);

    await currUser.save();

    res.status(200).json(currUser.watchList);
  } catch (err) {
    console.log(err.message);
  }
});

// @route   /api/user/addwatched
// @info    Add movies to the watched list
// @access  Private
router.post('/addwatched', auth, async (req, res) => {
  try {
    const watchedMovie = req.body;
    const currUser = await User.findById(req.user.id);

    currUser.watchedList.unshift(watchedMovie);

    await currUser.save();

    res.status(200).json(currUser.watchedList);
  } catch (err) {
    res.status(500).send({ error: err });
  }
});

// @route   /api/user/removewatch/:movieId
// @info    Remove a movie from the user's watch list
// @access  Private
router.delete('/removewatch/:movieId', auth, async (req, res) => {
  try {
    const { movieId } = req.params;
    const user = await User.findById(req.user.id);

    user.watchList = user.watchList.filter(
      (movie) => movie.id.toString() !== movieId
    );

    await user.save();

    return res.status(200).json(user.watchList);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

// @route   /api/user/removewatched/:movieId
// @info    Remove a movie from the user's watched list
// @access  Private
router.delete('/removewatched/:movieId', auth, async (req, res) => {
  try {
    const { movieId } = req.params;
    const user = await User.findById(req.user.id);

    user.watchedList = user.watchedList.filter(
      (movie) => movie.id.toString() !== movieId
    );

    await user.save();

    return res.status(200).json(user.watchedList);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

// @route   /api/user
// @info    Remove user
// @access  Private
router.delete('/', auth, async (req, res) => {
  try {
    await User.findByIdAndRemove(req.user.id);

    res.status(200).json({ msg: 'User Removed' });
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

module.exports = router;
