const Route = require('express');
const router = new Route();

const userRouter = require('./userRouter');
const typeRouter = require('./typeRouter');
const brandRouter = require('./brandRouter');
const deviceRouter = require('./deviceRouter');

const roleMiddleware = require('../middleware/checkRoleMiddleware');

router.use('/user', userRouter);
router.use('/type', roleMiddleware('ADMIN'), typeRouter);
router.use('/brand', roleMiddleware('ADMIN'), brandRouter);
router.use('/device', roleMiddleware('ADMIN'), deviceRouter);

module.exports = router;
