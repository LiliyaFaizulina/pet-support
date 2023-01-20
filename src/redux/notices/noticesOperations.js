import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'redux/auth/authOperations';

export const getNoticesByCategory = createAsyncThunk(
  'notices/getNoticesByCategory',
  async (category, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/notices/${category}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getNotice = createAsyncThunk(
  'notices/getNotice',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/notices/notice/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async (notice, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`/notices`, notice);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteNotice = createAsyncThunk(
  'notices/deleteNotice',
  async (id, { rejectWithValue }) => {
    try {
      await instance.delete(`/notices/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
