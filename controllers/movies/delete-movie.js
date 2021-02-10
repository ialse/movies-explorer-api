const Movie = require('../../models/movie'); // импортирую модель карточки
const NotFoundError = require('../../errors/not-found-err');
const ForbiddenError = require('../../errors/forbidden-err');

// Удаляю карточку из базы
function delMovie(req, res, next) {
  const { movieId } = req.params;
  return Movie.findById(movieId)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError('Фильм не найден среди сохраненных');
      }
      // проверяем, принадлежит ли фильм владельцу
      if (req.user._id === String(movie.owner)) {
        return Movie.findByIdAndRemove(movieId);
      }
      throw new ForbiddenError('Удалять фильм из списка может только его владелец');
    })
    .then((movie) => {
      if (movie) {
        return res.status(200).send({ message: `Удален фильм: ${movie.name}` });
      }
      throw new NotFoundError('Фильм не найден среди сохраненных');
    })
    .catch(next);
}

module.exports = delMovie;
