import { createSlice } from '@reduxjs/toolkit';

import { getNews } from './newsOperations';

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getNews.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getNews.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    },
    [getNews.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const newsReducer = newsSlice.reducer;
