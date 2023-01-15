import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'redux/auth/authOperations';

export const getNews = createAsyncThunk(
  'news/getNews',
  async (_, { rejectWithValue }) => {
    try {
      const {
        data: { news },
      } = await instance.get('/news');
      return news;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
