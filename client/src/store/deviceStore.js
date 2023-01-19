import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._devices = [];

    this._brands = [];

    this._types = [];

    this._selectedType = {};
    this._selectedBrand = {};

    this._page = 1;
    this._limit = 3;
    this._totalCount = 0;

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
    this._page = 1;
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._page = 1;
    this._selectedBrand = brand;
  }

  setPage(page) {
    this._page = page;
  }

  setTotalCount(count) {
    this._totalCount = count;
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

  get page() {
    return this._page;
  }

  get limit() {
    return this._limit;
  }

  get totalCount() {
    return this._totalCount;
  }
}
