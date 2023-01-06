const Router = require('express');
const typeController = require('../controllers/typeController');
const router = new Router();
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), typeController.create);
router.get('/', typeController.getAll);

module.exports = router;
