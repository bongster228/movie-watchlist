const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
  },
  watchList: [
    {
      title: {
        type: String,
      },
      overview: {
        type: String,
      },
      budget: {
        type: String,
      },
      posterPath: {
        type: String,
      },
      releaseDate: {
        type: Date,
      },
      runtime: {
        type: String,
      },
      popularity: {
        type: String,
      },
      voteAverage: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  watchedList: [
    {
      title: {
        type: String,
      },
      overview: {
        type: String,
      },
      budget: {
        type: String,
      },
      posterPath: {
        type: String,
      },
      releaseDate: {
        type: Date,
      },
      runtime: {
        type: String,
      },
      popularity: {
        type: String,
      },
      voteAverage: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = mongoose.model('User', UserSchema);
