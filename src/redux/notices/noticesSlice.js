import { createSlice } from '@reduxjs/toolkit';

import {
  getNotice,
  getNoticesByCategory,
  getOwnNotices,
  getFavoriteNotices,
  deleteNotice,
  addNotice,
} from './noticesOperations';

import { handlePending, handleRejected } from 'redux/auth/authSlice';

const initialState = {
  notices: [],
  ownNotices: [],
  favoriteNotices: [],
  currentNotice: null,
  isLoading: false,
  error: null,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  extraReducers: {
    [getNotice.pending]: state => {
      state.isLoading = true;
      state.currentNotice = null;
      state.error = null;
    },
    [getOwnNotices.pending]: handlePending,
    [getFavoriteNotices.pending]: handlePending,
    [getNoticesByCategory.pending]: handlePending,
    [addNotice.pending]: handlePending,
    [deleteNotice.pending]: handlePending,

    [getNotice.rejected]: handleRejected,
    [getOwnNotices.rejected]: handleRejected,
    [getFavoriteNotices.rejected]: handleRejected,
    [getNoticesByCategory.rejected]: handleRejected,
    [addNotice.rejected]: handleRejected,
    [deleteNotice.rejected]: handleRejected,

    [getNotice.fulfilled]: (state, { payload }) => {
      state.currentNotice = payload.notice;
      state.isLoading = false;
    },
    [getOwnNotices.fulfilled]: (state, { payload }) => {
      state.ownNotices = payload.notices;
      state.isLoading = false;
    },
    [getFavoriteNotices.fulfilled]: (state, { payload }) => {
      state.favoriteNotices = payload.notices;
      state.isLoading = false;
    },
    [getNoticesByCategory.fulfilled]: (state, { payload }) => {
      state.notices = payload.notices;
      state.isLoading = false;
    },
    [addNotice.fulfilled]: (state, { payload }) => {
      state.ownNotices.unshift(payload.notice);
      state.isLoading = false;
    },
    [deleteNotice.fulfilled]: (state, { payload }) => {
      state.notices = state.notices.filter(({ _id }) => _id !== payload);
      state.favoriteNotices = state.favoriteNotices.filter(
        ({ _id }) => _id !== payload
      );
      state.ownNotices = state.ownNotices.filter(({ _id }) => _id !== payload);
      state.isLoading = false;
    },
  },
});

export const noticesReducer = noticesSlice.reducer;
