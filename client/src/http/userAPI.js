import { $host, $authHost } from './index';

import jwt_decode from 'jwt-decode';

export const registration = async (email, password) => {
  const { data } = await $host.post('user/registration', { email, password, role: 'ADMIN' });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const login = async (email, password) => {
  const { data } = await $authHost.post('user/login', { email, password });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const check = async () => {
  const { data } = await $authHost.post('user/auth');
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};
