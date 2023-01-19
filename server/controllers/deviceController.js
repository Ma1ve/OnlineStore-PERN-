const { Device, DeviceInfo } = require('../models/models');

const uuid = require('uuid');
const path = require('path');

class DeviceController {
  async create(req, res) {
    try {
      const { name, price, rating, brandId, typeId, info } = req.body;
      const { img } = req.files;

      const fileName = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));

      const device = await Device.create({ name, price, rating, img: fileName, brandId, typeId });

      if (info) {
        let newInfo = JSON.parse(info);
        console.log(newInfo);
        newInfo.forEach((i) =>
          DeviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: device.id,
          }),
        );
      }

      console.log(12);
      return res.json(device);
    } catch (error) {
      // console.log(erorr.message);

      return res.json(error.message);
      // console.log(erorr);
    }
  }

  async getAll(req, res) {
    try {
      let { brandId, typeId, limit, page } = req.query;

      page = page || 1;
      let offset = (page - 1) * limit;

      let devices;

      if (!brandId && !typeId) {
        devices = await Device.findAndCountAll({ limit, offset });
        return res.json(devices);
      }
      if (brandId && !typeId) {
        devices = await Device.findAndCountAll({ where: { brandId }, limit, offset });
        return res.json(devices);
      }
      if (!brandId && typeId) {
        devices = await Device.findAndCountAll({ where: { typeId }, limit, offset });
        return res.json(devices);
      }

      if (brandId && typeId) {
        devices = await Device.findAndCountAll({ where: { typeId, brandId }, limit, offset });
        return res.json(devices);
      }
    } catch (error) {
      console.log(erorr.message);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const device = await Device.findOne({
        where: { id },
        include: { model: DeviceInfo, as: 'info' },
      });
      return res.json(device);
    } catch (error) {
      console.log(erorr.message);
    }
  }
}

module.exports = new DeviceController();
