const { celebrate, Joi } = require('celebrate');

const urlRegExp = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;

const validateCreateUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email()
      .message(`Поле 'Email' заполнено некорректно`)
      .messages({
        'any.required': `Поле 'Email' обязательно`,
      }),
    password: Joi.string().required().messages({
      'any.required': `Поле 'Пароль' обязательно`,
    }),
    name: Joi.string().required().min(2).max(30)
      .messages({
        'string.required': `Поле 'Имя' обязательно`,
        'string.min': `Поле 'Имя' должно быть от 2 до 30 символов`,
        'string.max': `Поле 'Имя' должно быть от 2 до 30 символов`,
      }),
  }),
});

const validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email()
      .message(`Поле 'Email' заполнено некорректно`)
      .messages({
        'string.required': `Поле 'Email' обязательно`,
      }),
    password: Joi.string().required().messages({
      'any.required': `Поле 'Пароль' обязательно`,
    }),
  }),
});

const validateUpdateUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().messages({
      'string.required': `Поле 'Email' обязательно`,
      'string.email': `Поле 'Email' заполнено некорректно`,
    }),
    name: Joi.string().min(2).max(30).messages({
      'string.required': `Поле 'Имя' обязательно`,
      'string.min': `Поле 'Имя' должно быть от 2 до 30 символов`,
      'string.max': `Поле 'Имя' должно быть от 2 до 30 символов`,
    }),,
  }),
});

const validateCreateMovies = celebrate({
  body: Joi.object().keys({
    nameRU: Joi.string().required().min(2).max(30).messages({
      'any.required': `Поле 'Название фильма на русском языке' обязательно`,
      'string.min': `Поле 'Название фильма на русском языке' должно быть от 2 до 30 символов`,
      'string.max': `Поле 'Название фильма на русском языке' должно быть от 2 до 30 символов`,
    }),
    nameEN: Joi.string().required().min(2).max(30).messages({
      'any.required': `Поле 'Название фильма на английском языке' обязательно`,
      'string.min': `Поле 'Название фильма на английском языке' должно быть от 2 до 30 символов`,
      'string.max': `Поле 'Название фильма на английском языке' должно быть от 2 до 30 символов`,
    }),
    description: Joi.string().required().min(2).max(500).messages({
      'any.required': `Поле 'Описание' обязательно`,
      'string.min': `Поле 'Описание' должно быть от 2 до 500 символов`,
      'string.max': `Поле 'Описание' должно быть от 2 до 500 символов`,
    }),
    year: Joi.string().required().length(4).messages({
      'any.required': `Поле 'Год' обязательно`,
      'any.length': `Поле 'Год' должно содержать 4 символа`,
    }),
    director: Joi.string().required().min(2).max(60).messages({
      'any.required': `Поле 'Режиссер' обязательно`,
      'string.min': `Поле 'Режиссер' должно быть от 2 до 60 символов`,
      'string.max': `Поле 'Режиссер' должно быть от 2 до 60 символов`,
    }),
    country: Joi.string().required().min(2).max(60).messages({
      'any.required': `Поле 'Страна' обязательно`,
      'string.min': `Поле 'Страна' должно быть от 2 до 60 символов`,
      'string.max': `Поле 'Страна' должно быть от 2 до 60 символов`,
    }),
    duration: Joi.number().required().messages({
      'any.required': `Поле 'Длительность' обязательно`,
    }),
    image: Joi.string().required().regex(urlRegExp).messages({
      'any.required': `Поле 'Постер' обязательно`,
    }),
    thumbnail: Joi.string().required().regex(urlRegExp).messages({
      'any.required': `Поле 'Превью' обязательно`,
    }),
    trailer: Joi.string().required().regex(urlRegExp).messages({
      'any.required': `Поле 'Трейлер' обязательно`,
    }),
  }),
});

const validateMovieId = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().length(24).required().hex(),
  }),
});

module.exports = {
  validateCreateUser,
  validateLogin,
  validateUpdateUser,
  validateCreateMovies,
  validateMovieId,
};
