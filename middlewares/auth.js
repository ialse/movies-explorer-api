const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config');
const ForbiddenError = require('../errors/forbidden-err');
const { NOT_AUTHORISATION } = require('../helpers/text-messages');

module.exports = (req, res, next) => {
  const { cookie } = req.headers;

  if (!cookie) {
    throw new ForbiddenError(NOT_AUTHORISATION);
  }

  const token = cookie.replace('jwt=', '');
  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw new ForbiddenError(NOT_AUTHORISATION);
  }

  req.user = payload;

  next();
};
