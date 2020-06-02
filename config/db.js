const mongoose = require('mongoose');
const config = require('config');

const connectDB = async () => {
  try {
    await mongoose.connect(config.get('DB.URI'), {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log('DB connected');
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = connectDB;
