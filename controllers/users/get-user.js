const User = require('../../models/user');
const NotFoundError = require('../../errors/not-found-err');

function getUser(req, res, next) {
  return User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Пользователь не найден');
      }
      return res.status(200).send(user);
    })
    .catch(next);
}

module.exports = getUser;
