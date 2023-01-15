import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._devices = [];

    this._brands = [
      { id: 1, name: 'Overworld' },
      { id: 2, name: '"The End"' },
      { id: 3, name: '"The Nether"' },
      { id: 4, name: 'Overworld' },
      { id: 5, name: '"The End"' },
    ];

    this._types = [
      { id: 1, name: 'Overworld' },
      { id: 2, name: '"The End"' },
      { id: 3, name: '"The Nether"' },
      { id: 4, name: 'Overworld' },
      { id: 5, name: '"The End"' },
    ];

    this._selectedType = {};
    this._selectedBrand = {};

    makeAutoObservable(this);
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setTypes(types) {
    this._types = types;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get devices() {
    return this._devices;
  }

  get brands() {
    return this._brands;
  }

  get types() {
    return this._types;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}
