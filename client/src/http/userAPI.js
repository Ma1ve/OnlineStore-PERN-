import axios from 'axios';
import { $host, $authHost } from './index';

export const registration = async (email, password) => {
  const response = await $host.post('user/registration', { email, password, role: 'ADMIN' });
  return response;
};

export const login = async (email, password) => {
  const response = await $authHost.post('user/login', { email, password });
  return response;
};

export const check = async () => {
  const response = await $host.post('user/registration');
  return response;
};
