const jwt = require('jsonwebtoken');

module.exports = function (role) {
  return function (req, res, next) {
    if (req.method === 'OPTIONS') {
      next();
    }
    try {
      const token = req.headers.authorization.split(' ')[1]; // Bearer fwfweewfdfs
      console.log(token);
      if (!token) return res.status(403).json({ error: 'Пользователь не авторизован' });

      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      if (decoded.role !== role) {
        return res.status(403).json({ error: 'У вас нет доступа' });
      }
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(403).json({ error: 'Пользователь не авторизован' });
    }
  };
};
