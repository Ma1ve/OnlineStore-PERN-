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
        info = JSON.parse(info);
        info.forEach((i) =>
          DeviceInfo.create({ title: i.title, description: i.description, deviceId: device.id }),
        );
      }

      return res.json(device);
    } catch (error) {
      // console.log(erorr);
      console.log(erorr.message);
    }
  }

  async getAll(req, res) {
    try {
      // const device =
    } catch (error) {
      console.log(erorr.message);
    }
  }

  async getOne(req, res) {
    // try {
    const { id } = req.params;
    const device = await Device.findOne({
      where: { id },
      include: { model: DeviceInfo, as: 'info' },
    });
    return res.json(device);
    // } catch (error) {
    //   console.log(erorr.message);
    // }
  }
}

module.exports = new DeviceController();
