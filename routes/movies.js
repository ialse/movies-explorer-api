const router = require('express').Router();

const getMovies = require('../controllers/movies/get-movies');
const createMovie = require('../controllers/movies/create-movie');
const deleteMovie = require('../controllers/movies/delete-movie');

const { validateCreateMovies, validateMovieId } = require('../helpers/validation');

router.get('/movies', getMovies);
router.post('/movies', validateCreateMovies, createMovie);
router.delete('/movies/:movieId', validateMovieId, deleteMovie);

module.exports = router;
