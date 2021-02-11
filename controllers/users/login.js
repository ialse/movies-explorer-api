const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../../config');
const User = require('../../models/user');
const AuthorisationError = require('../../errors/authorisation-err');

function login(req, res, next) {
  const { email, password } = req.body;
  let userID;

  return User.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new AuthorisationError('Неправильные почта или пароль');
      }
      userID = user.id;

      return bcrypt.compare(password, user.password);
    })
    .then((matched) => {
      if (!matched) {
        throw new AuthorisationError('Неправильные почта или пароль');
      }

      const token = jwt.sign(
        { _id: userID },
        JWT_SECRET,
        { expiresIn: 3600 * 24 * 7 },
      );

      res.cookie(
        'jwt',
        token,
        {
          maxAge: 3600000 * 24 * 7,
          httpOnly: true,
          sameSite: true,
        },
      )
        .send({ message: 'Авторизация успешна!' });
    })
    .catch(next);
}

module.exports = login;
