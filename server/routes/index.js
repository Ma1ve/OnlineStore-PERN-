const Route = require('express');
const router = new Route();

const userRouter = require('./userRouter');
const typeRouter = require('./typeRouter');
const brandRouter = require('./brandRouter');
const deviceRouter = require('./deviceRouter');

const roleMiddleware = require('../middleware/checkRoleMiddleware');

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);

// roleMiddleware('ADMIN'),

module.exports = router;
