const Route = require('express');
const brandController = require('../controllers/brandController');
const router = new Route();

router.post('/', brandController.create);
router.get('/', brandController.getAll);
router.put('/:id', brandController.change);

module.exports = router;
