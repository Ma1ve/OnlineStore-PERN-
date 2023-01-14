const Route = require('express');
const router = new Route();

const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/', authMiddleware, userController.check);

module.exports = router;
