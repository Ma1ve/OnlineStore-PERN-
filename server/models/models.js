const db = require('../db');

const { DataTypes } = require('sequelize');

const User = db.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
});

const Basket = db.define('basket', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BasketDevice = db.define('basket_device', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Device = db.define('device', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  rating: { type: DataTypes.INTEGER, defaultvalue: 0 },
  img: { type: DataTypes.STRING, allowNull: false },
});

const Type = db.define('type', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Brand = db.define('brand', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Rating = db.define('rating', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false },
});

const DeviceInfo = db.define('device_info', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  ttile: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

const TypeBrand = db.define('type_brand', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

// User-Basket
User.hasOne(Basket);
Basket.belongsTo(User);

// User-Rating
User.hasMany(Rating);
Rating.belongsTo(User);

// Basket-BasketDevice
Basket.hasMany(BasketDevice);
BasketDevice.belongsTo(Basket);

// Type-Device
Type.hasMany(Device);
Device.belongsTo(Type);

// Brand-Device
Brand.hasMany(Device);
Device.belongsTo(Brand);

// Device-rating
Device.hasMany(Rating);
Rating.belongsTo(Device);

// Device-BasketDevice
Device.hasMany(BasketDevice);
BasketDevice.belongsTo(Device);

//Device-DeviceInfo
Device.hasMany(DeviceInfo, { as: 'info' }); // поле info, которое будет у массива характеристик
DeviceInfo.belongsTo(Device);

//Type-Brand belongsToMany
Type.belongsToMany(Brand, { through: TypeBrand });
Brand.belongsToMany(Type, { through: TypeBrand });

module.exports = {
  User,
  Basket,
  BasketDevice,
  Device,
  Type,
  Brand,
  Rating,
  DeviceInfo,
  TypeBrand,
};
