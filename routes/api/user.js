const router = require('express').Router();
const axios = require('axios');
const User = require('../../model/User');
const auth = require('../../middleware/auth');

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
