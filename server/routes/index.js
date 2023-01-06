const Router = require('express');
const router = new Router();

const userRouter = require('./userRouter');
const deviceRouter = require('./deviceRouter');
const brandRouter = require('./brandRouter');
const typeRouter = require('./typeRouter');

const checkRole = require('../middleware/checkRoleMiddleware');

router.use('/user', userRouter);
router.use('/device', checkRole('ADMIN'), deviceRouter);
router.use('/brand', checkRole('ADMIN'), brandRouter);
router.use('/type', checkRole('ADMIN'), typeRouter);

module.exports = router;
