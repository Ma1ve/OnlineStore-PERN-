const { User } = require('../models/models');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, { expiresIn: '24h' });
};

class UserController {
  async registration(req, res) {
    try {
      const { email, password, role } = req.body;

      if (!email || !password) {
        return res.status(404).json({ message: 'Некорректный email или пароль' });
      }
      const candidate = await User.findOne({ where: { email } });
      if (candidate)
        return res.status(404).json({ message: 'Пользователь с таким email уже существует' });

      const hashPassword = await bcrypt.hash(password, 5);
      const user = await User.create({ email, role, password: hashPassword });

      const token = generateJwt(user.id, user.email, user.role);
      return res.json({ token });
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });
      if (!user) return res.status(404).json({ message: 'Пользователь с таким email не найден' });

      const comparePassword = bcrypt.compareSync(password, user.password);
      if (!comparePassword) return res.status(404).json({ message: 'Указан неверный пароль' });

      const token = generateJwt(user.id, user.email, user.role);
      return res.json({ token });
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }

  async check(req, res) {
    try {
      return res.json({ message: 'Все работает' });
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = new UserController();
