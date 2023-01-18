import { $host, $authHost } from './index.js';

export const crateType = async (type) => {
  const { data } = await $authHost.post('type', type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get('type');
  return data;
};

export const crateBrand = async (brand) => {
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

export const fetchDevices = async (brandId, typeId, limit = 5, page) => {
  const { data } = await $host.get('device', { params: { brandId, typeId, limit, page } });
  return data;
};
// brandId, typeId, (limit = 5), page;
export const fetchOneDevice = async (id) => {
  const { data } = await $host.get('device/' + id);
  return data;
};
