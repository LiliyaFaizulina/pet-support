import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

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
      const refreshToken = localStorage.getItem('refreshToken');
      const { data } = await instance.post('/users/refresh', { refreshToken });
      token.set(data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      return instance(error.config);
    }
    return Promise.reject(error);
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/users/register', userData);
      token.set(data.accessToken);
      toast.success('registration success');
      localStorage.setItem('refreshToken', data.refreshToken);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
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

      toast.success(`Welcome, ${data.user.name}!`);
      localStorage.setItem('refreshToken', data.refreshToken);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await instance.get('/users/logout');
      token.unset();
      localStorage.removeItem('refreshToken');
      toast.success('Logout successful');
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUser = createAsyncThunk(
  'auth/getUser',
  async (_, { rejectWithValue }) => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      return rejectWithValue();
    }
    try {
      const { data } = await instance.get(`/users/user`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await instance.put(`/users/user`, user);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addPet = createAsyncThunk(
  'auth/addPet',
  async (pet, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`/pets`, pet);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deletePet = createAsyncThunk(
  'auth/deletePet',
  async (id, { rejectWithValue }) => {
    try {
      const result = await instance.delete(`/pets/${id}`);
      toast.success(`😿 ${result.data.result.name} was removed`);
      return id;
    } catch (error) {
      toast.error(`😿 was not removed`);
      return rejectWithValue(error.message);
    }
  }
);

export const updateFavoriteStatus = createAsyncThunk(
  'auth/updateFavoriteStatus',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.patch(`/notices/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'auth/updateAvatar',
  async (avatar, { rejectWithValue }) => {
    try {
      const { data } = await instance.put(`/users/avatar`, avatar);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
