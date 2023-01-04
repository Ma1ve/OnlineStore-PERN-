const ApiError = require('../error/ApiError');

const { Device } = require('../models/models');

const uuid = require('uuid');
const path = require('path');

class DeviceController {
  async create(req, res, next) {
    try {
      let { name, price, brandId, typeId, info } = req.body;
      console.log(req.files);
      // console.log(req.body);
      const { img } = req.files;
      let fileName = uuid.v4() + '.jpg';

      img.mv(path.resolve(__dirname, '..', 'static', fileName));
      const device = await Device.create({ name, price, brandId, typeId, img: fileName });
      return res.json(device);
    } catch (error) {
      // next(ApiError.badRequest(error.message));
      console.log(error.message);
    }
  }
  async getAll(req, res) {}
  async getOne(req, res) {}
}

module.exports = new DeviceController();
