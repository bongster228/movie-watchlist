const auth = function (req, res, next) {
  const token = req.header('x-auth-token');

  req.user = token;
  next();
};

module.exports = auth;
