const jwt = require('jsonwebtoken');
const config = require('config');

const auth = function (req, res, next) {
  try {
    const token = req.header('x-auth-token');

    if (!token) res.status(401).json({ msg: 'No Token' });

    const decoded = jwt.verify(token, config.get('jwt.secret'));

    req.user = decoded.user;

    next();
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err.message });
  }
};

module.exports = auth;
