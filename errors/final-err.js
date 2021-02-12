const { SERVER_FAIL } = require('../helpers/text-messages');

// eslint-disable-next-line no-unused-vars
const finalErr = (err, req, res, next) => {
  let { statusCode = 500 } = err;
  const { message } = err;

  // если произошла валидация по схеме, ставим статус 400
  if (err.name === 'ValidationError') {
    statusCode = 400;
  }

  res
    .status(statusCode)
    .send({
      message: statusCode === 500
        ? SERVER_FAIL
        : message,
    });
};

module.exports = finalErr;
