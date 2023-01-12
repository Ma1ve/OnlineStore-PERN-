import { $host, $authHost } from './index';

import jwt_decode from 'jwt-decode';

export const createType = async (type) => {
  const { data } = await $authHost.post('type', type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get('type');
  return data;
};

export const createBrand = async (brand) => {
  const { data } = await $authHost.post('brand', brand);
  return data;
};

export const fetchBrands = async () => {
  const { data } = await $host.get('brand');
  return data;
};

export const createDevice = async (device) => {
  const { data } = await $authHost.post('device', device);
  return data;
};

export const fetchDevices = async () => {
  const { data } = await $host.get('device');
  return data;
};

export const fetchOneDevice = async (id) => {
  const { data } = await $host.get('device/' + id);
  return data;
};
