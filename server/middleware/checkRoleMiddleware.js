const jwt = require('jsonwebtoken');

module.exports = function (role) {
  return function (req, res, next) {
    if (req.methods === 'OPTIONS') {
      next();
    }
    try {
      const token = req.headers.authorization.split(' ')[1];
      if (!token) return res.status(403).json({ message: 'Пользователь не авторизован' });

      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      if (decoded.role !== role) return res.status(403).json({ message: 'У вас нетдоступа!' });
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(403).json({ message: 'Пользователь не авторизован' });
    }
  };
};
