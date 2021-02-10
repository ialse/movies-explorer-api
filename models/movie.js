const mongoose = require('mongoose');
const httpValid = require('../helpers/regexp');

const cardSchema = new mongoose.Schema({
  nameRU: {
    type: String,
    required: [true, 'Поле обязательно'],
    minlength: [2, 'Минимальная длина 2 символа'],
    maxlength: [30, 'Максимальная длина 30 символов'],
  },
  nameEN: {
    type: String,
    required: [true, 'Поле обязательно'],
    minlength: [2, 'Минимальная длина 2 символа'],
    maxlength: [30, 'Максимальная длина 30 символов'],
  },
  description: {
    type: String,
    required: [true, 'Поле обязательно'],
    minlength: [2, 'Минимальная длина 2 символа'],
    maxlength: [500, 'Максимальная длина 500 символов'],
  },
  year: {
    type: String,
    required: [true, 'Поле обязательно'],
    minlength: [2, 'Минимальная длина 2 символа'],
    maxlength: [4, 'Максимальная длина 4 символа'],
  },
  director: {
    type: String,
    required: [true, 'Поле обязательно'],
    minlength: [2, 'Минимальная длина 2 символа'],
    maxlength: [60, 'Максимальная длина 60 символов'],
  },
  country: {
    type: String,
    required: [true, 'Поле обязательно'],
    minlength: [2, 'Минимальная длина 2 символа'],
    maxlength: [60, 'Максимальная длина 60 символов'],
  },
  duration: {
    type: Number,
    required: [true, 'Поле обязательно'],
    minlength: [2, 'Минимальная длина 2 символа'],
    maxlength: [60, 'Максимальная длина 60 символов'],
  },

  image: {
    type: String,
    required: true,
    validate: {
      validator(link) {
        return httpValid(link);
      },
      message: 'Ссылка некорректная',
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator(link) {
        return httpValid(link);
      },
      message: 'Ссылка некорректная',
    },
  },
  trailer: {
    type: String,
    required: true,
    validate: {
      validator(link) {
        return httpValid(link);
      },
      message: 'Ссылка некорректная',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
    select: false,
  },
});

module.exports = mongoose.model('card', cardSchema);
