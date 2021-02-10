const router = require('express').Router();
const userRouter = require('./users');
const movieRouter = require('./movies');
const auth = require('./middlewares/auth');
const login = require('../controllers/users/login');
const createUser = require('../controllers/users/create-user');
const { validateCreateUser } = require('../helpers/validation');

router.post('/signin', validateCreateUser, login);
router.post('/signup', validateCreateUser, createUser);
router.use(auth);
router.use('/users', userRouter);
router.use('/movies', movieRouter);

module.exports = router;
