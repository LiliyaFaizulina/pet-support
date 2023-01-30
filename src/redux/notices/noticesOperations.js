import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'redux/auth/authOperations';
import { toast } from 'react-toastify';
import { SiGnuicecat } from 'react-icons/si';
import { FaDog } from 'react-icons/fa';

export const getOwnNotices = createAsyncThunk(
  'notices/getOwnNotices',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/notices/own`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getFavoriteNotices = createAsyncThunk(
  'notices/getFavoriteNotices',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/notices/favorite`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

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
      const { data } = await instance.post(`/notices/notice`, notice, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      toast.success('New notice added', { icon: <SiGnuicecat /> });
      return data;
    } catch (error) {
      toast.error(error.response.data.message, { icon: <FaDog /> });
      return rejectWithValue(error.message);
    }
  }
);

export const deleteNotice = createAsyncThunk(
  'notices/deleteNotice',
  async (id, { rejectWithValue }) => {
    try {
      await instance.delete(`/notices/${id}`);
      toast.success('Notice deleted', { icon: <SiGnuicecat /> });
      return id;
    } catch (error) {
      toast.error(error.response.data.message, { icon: <FaDog /> });
      return rejectWithValue(error.message);
    }
  }
);
