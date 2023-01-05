const ApiError = require('../error/ApiError');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { User, Basket } = require('../models/models');

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, { expiresIn: '24h' });
};

class UserController {
  async registration(req, res, next) {
    try {
      const { email, password, role } = req.body;
      if (!email || !password) {
        return next(ApiError.badRequest('Некорректный email или password'));
      }
      const candidate = await User.findOne({ where: { email } });
      if (candidate) {
        return next(ApiError.badRequest('Пользователь с таким email уже существует'));
      }
      const hashPassword = await bcrypt.hash(password, 5);
      const user = await User.create({ email, role, password: hashPassword });
      const basket = await Basket.create({ userId: user.id });
      const token = generateJwt(user.id, user.email, user.role);
      return res.json({ token });
    } catch (error) {
      return next(ApiError.badRequest(error.message));
    }
  }

  async login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.json(ApiError.internal('Пользователь с таким email не найден'));

    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) res.json(ApiError.internal('Указан неверный пароль'));

    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }

  async check(req, res, next) {
    try {
      return res.json({ message: 'ALL RIG' });
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new UserController();
