function signOut(req, res, next) {
  res.clearCookie('jwt').send({ message: 'Пользователь разлогинен' });
  next();
}

module.exports = signOut;
