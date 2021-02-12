const Movie = require('../../models/movie');
const NoUnique = require('../../errors/no-unique-err');

function createMovie(req, res, next) {
  const {
    movieId, nameRU, nameEN, description, year, director,
    country, duration, image, thumbnail, trailer,
  } = req.body;

  return Movie.findOne({ movieId })
    .then((movieIdInMongo) => {
      if (movieIdInMongo) {
        throw new NoUnique('Фильм уже сохранен');
      }
      return Movie.create({
        movieId,
        nameRU,
        nameEN,
        description,
        year,
        director,
        country,
        duration,
        image,
        thumbnail,
        trailer,
        owner: req.user._id,
      });
    })
    .then((movie) => {
      const { _id } = movie;
      return Movie.findById({ _id })
        .populate('owner');
    })
    .then((movie) => res.status(200).send(movie))
    .catch(next);
}

module.exports = createMovie;
