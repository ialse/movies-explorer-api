const ValidateError = require('../errors/validate-err');

module.exports = (req, res, next) => {
  const { password } = req.body;

  if (!password || !password.trim()) {
    throw new ValidateError('Пароль должен быть заполнен');
  }

  if (password.trim().length < 8) {
    throw new ValidateError('Пароль должен быть больше 8 символов');
  }

  next();
};
