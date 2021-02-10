const User = require('../../models/user');

// Получаю данные пользователя из файла
function updUser(req, res, next) {
  const { email, name } = req.body;

  return User.findByIdAndUpdate(
    req.user._id,
    { email, name },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((user) => res.status(200).send(user))
    // eslint-disable-next-line consistent-return
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: err.message });
      }
      next(err);
    });
}

module.exports = updUser;
