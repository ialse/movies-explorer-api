const Movie = require('../../models/movie');

async function createMovie(req, res, next) {
  const { name, link } = req.body;

  return Movie.create({ name, link, owner: req.user._id })
    .then((movie) => {
      const { _id } = movie;
      return Movie.findById({ _id })
        .populate('owner');
    })
    .then((movie) => res.status(200).send(movie))
    .catch(next);
}

module.exports = createMovie;
