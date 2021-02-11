const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config');
const ForbiddenError = require('../errors/forbidden-err');

module.exports = (req, res, next) => {
  const { cookie } = req.headers;

  if (!cookie) {
    throw new ForbiddenError('Необходима авторизация');
  }

  const token = cookie.replace('jwt=', '');
  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw new ForbiddenError('Необходима авторизация');
  }

  req.user = payload;

  next();
};
