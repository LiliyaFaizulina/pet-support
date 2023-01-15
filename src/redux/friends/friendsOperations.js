import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'redux/auth/authOperations';

export const getFriends = createAsyncThunk(
  'friends/getFriends',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('/sponsors');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
