const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'С вашего IP-адреса слишком много запросов. Через 15 минут блокировка будет снята',
});

module.exports = limiter;
