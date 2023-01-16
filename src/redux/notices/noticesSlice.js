import { createSlice } from '@reduxjs/toolkit';

import {
  getNotice,
  getNoticesByCategory,
  deleteNotice,
  addNotice,
} from './noticesOperations';

import { handlePending, handleRejected } from 'redux/auth/authSlice';

const initialState = {
  notices: [],
  currentNotice: null,
  isLoading: false,
  error: null,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  extraReducers: {
    [getNotice.pending]: handlePending,
    [getNoticesByCategory.pending]: handlePending,
    [addNotice.pending]: handlePending,
    [deleteNotice.pending]: handlePending,

    [getNotice.rejected]: handleRejected,
    [getNoticesByCategory.rejected]: handleRejected,
    [addNotice.rejected]: handleRejected,
    [deleteNotice.rejected]: handleRejected,

    [getNotice.fulfilled]: (state, { payload }) => {
      state.currentNotice = payload.notice;
      state.isLoading = false;
    },
    [getNoticesByCategory.fulfilled]: (state, { payload }) => {
      state.notices = payload.notices;
      state.isLoading = false;
    },
    [addNotice.fulfilled]: (state, { payload }) => {
      state.notices.push(payload);
      state.isLoading = false;
    },
    [deleteNotice.fulfilled]: (state, { payload }) => {
      state.notices = state.notices.filter(({ _id }) => _id !== payload);
      state.isLoading = false;
    },
  },
});

export const noticesReducer = noticesSlice.reducer;
