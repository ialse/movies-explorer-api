const bcrypt = require('bcryptjs');

const User = require('../../models/user');
const NoUnique = require('../../errors/no-unique-err');
const { EMAIL_AVAILABLE } = require('../../helpers/text-messages');

function createUser(req, res, next) {
  const {
    email, password, name,
  } = req.body;

  // Проверяем, есть ли пользователь с такой почтой в базе
  User.findOne({ email })
    .then((user) => {
      if (user) {
        throw new NoUnique(EMAIL_AVAILABLE);
      }
      return bcrypt.hash(password, 10);
    })
    .then((hash) => User.create({
      email,
      password: hash,
      name,
    }))
    .then((user) => {
      // eslint-disable-next-line prefer-object-spread
      const objUser = Object.assign({}, user._doc);
      delete objUser.password;
      return res.status(200).send(objUser);
    })
    .catch(next);
}

module.exports = createUser;
