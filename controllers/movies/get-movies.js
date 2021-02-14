const Movie = require('../../models/movie');

function getMovies(req, res, next) {
  return Movie.find({})
    .populate(['owner'])
    .then((movies) => res.status(200).send(movies))
    .catch(next);
}

module.exports = getMovies;
