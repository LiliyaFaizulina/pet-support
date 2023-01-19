import { createSlice } from '@reduxjs/toolkit';

import { getFriends } from './friendsOperations';

const friendsSlice = createSlice({
  name: 'friends',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getFriends.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getFriends.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    },
    [getFriends.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const { newItems } = friendsSlice.actions;

export const friendsReducer = friendsSlice.reducer;
