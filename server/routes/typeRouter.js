const Route = require('express');
const router = new Route();

const TypeController = require('../controllers/typeController');

router.post('/', TypeController.create);
router.get('/', TypeController.getAll);
router.put('/:id', TypeController.change);

module.exports = router;
