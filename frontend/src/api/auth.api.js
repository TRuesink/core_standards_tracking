import axios from 'axios';
import paths from '../constants/paths';

export const login = (email, password) =>
  axios.post(paths.login, { email, password });

export const getUser = (token) =>
  axios.get(paths.user, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });

export const logout = (token) =>
  axios.post(paths.logout, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
