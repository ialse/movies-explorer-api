const Movie = require('../../models/movie');

function createMovie(req, res, next) {
  const {
    nameRU, nameEN, description, year, director, country,
    duration, image, thumbnail, trailer,
  } = req.body;

  return Movie.create({
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
