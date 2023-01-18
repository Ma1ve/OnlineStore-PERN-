import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._devices = [];

    this._brands = [];

    this._types = [];

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
