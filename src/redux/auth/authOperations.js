import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const instance = axios.create({
  baseURL: 'http://localhost:4000/api',
});

const token = {
  set(token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common['Authorization'] = '';
  },
};

instance.interceptors.response.use(
  res => res,
  async error => {
    if (error.response.status === 401) {
      const token = localStorage.getItem('refreshToken');
      const {
        data: { accessToken, refreshToken },
      } = await instance.post('/users/refresh', { refreshToken: token });
      token.set(accessToken);
      localStorage.setItem('refreshToken', refreshToken);
    }
    return instance(error.config);
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/users/register', userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/users/login', userData);
      token.set(data.accessToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await instance.delete('/users/logout');
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
