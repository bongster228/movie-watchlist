const express = require('express');
const connectDB = require('./config/db');

const PORT = 5000 || process.env.PORT;

const app = express();

app.use(express.json());

connectDB();

app.use('/api/movie', require('./routes/api/movie'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/user', require('./routes/api/user'));

app.listen(PORT, () => {
  console.log(`Server Started At ${PORT}`);
});
