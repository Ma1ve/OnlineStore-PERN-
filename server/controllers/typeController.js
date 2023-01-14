const { Type } = require('../models/models');

class TypeController {
  async create(req, res) {
    try {
      const { name } = req.body;
      const type = await Type.create({ name });
      return res.json(type);
    } catch (error) {
      console.log(error.message);
    }
  }

  async getAll(req, res) {
    try {
      const types = await Type.findAll();
      return res.json(types);
    } catch (error) {
      console.log(error.message);
    }
  }

  async change(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const type = await Type.findOne({ where: { id } });

      type.name = await name;
      await type.save();

      return res.json(type.name);
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = new TypeController();
