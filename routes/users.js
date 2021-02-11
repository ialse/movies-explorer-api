const router = require('express').Router();

// Импорт контроллеров
const getUser = require('../controllers/users/get-user');
const updateUser = require('../controllers/users/update-user');
const signOut = require('../controllers/users/sign-out');

const { validateUpdateUser } = require('../helpers/validation');

router.get('/users/me', getUser);
router.post('/signout', signOut);
router.put('/users/me', validateUpdateUser, updateUser);

module.exports = router;
