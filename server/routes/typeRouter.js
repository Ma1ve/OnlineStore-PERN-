const Router = require('express');
const typeController = require('../controllers/typeController');
const router = new Router();
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', typeController.create);
// checkRole('ADMIN');
router.get('/', typeController.getAll);

module.exports = router;
