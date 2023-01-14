const { Brand } = require('../models/models');

class BrandController {
  async create(req, res) {
    try {
      const { name } = req.body;
      const brand = await Brand.create({ name });
      return res.json(brand);
    } catch (error) {
      console.log(error.message);
    }
  }

  async getAll(req, res) {
    try {
      const brands = await Brand.findAll();
      return res.json(brands);
    } catch (error) {
      console.log(error.message);
    }
  }

  async change(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const brand = await Brand.findOne({ where: { id } });

      brand.name = await name;
      await brand.save();

      return res.json(brand.name);
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = new BrandController();
