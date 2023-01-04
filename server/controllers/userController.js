const ApiError = require('../error/ApiError');

class UserController {
  async registration(req, res) {}
  async login(req, res) {}

  async check(req, res, next) {
    try {
      const { id } = req.query;

      if (!id) {
        return next(ApiError.badRequest('123123123'));
      }

      res.json(id);
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new UserController();
