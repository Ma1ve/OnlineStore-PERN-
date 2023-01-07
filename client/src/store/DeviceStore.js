import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Холодильник' },
      { id: 2, name: 'Смартфоны' },
    ];

    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
    ];

    this._devices = [
      {
        id: 1,
        name: 'Iphone 12 pro',
        img: 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png',
        price: 25000,
        rating: 5,
      },
      {
        id: 2,
        name: 'Iphone 12 pro',
        img: 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png',
        price: 25000,
        rating: 5,
      },
      {
        id: 3,
        name: 'Iphone 12 pro',
        img: 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png',
        price: 25000,
        rating: 5,
      },
      {
        id: 4,
        name: 'Iphone 12 pro',
        img: 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png',
        price: 25000,
        rating: 5,
      },
    ];

    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }
  setDevice(devices) {
    this._devices = devices;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }
}
