import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logout,
  updateFavoriteStatus,
  getUser,
  updateUser,
  addPet,
  deletePet,
  updateAvatar,
} from './authOperations';

const initialState = {
  user: {
    name: '',
    email: '',
    city: '',
    phone: '',
    avatarURL: '',
    favoriteNotices: [],
  },
  pets: [],
  accessToken: null,
  refreshToken: null,
  isLoading: false,
  isAuth: false,
  error: null,
};

export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: handlePending,
    [login.pending]: handlePending,
    [logout.pending]: handlePending,
    [updateFavoriteStatus.pending]: handlePending,
    [getUser.pending]: handlePending,
    [updateUser.pending]: handlePending,
    [addPet.pending]: handlePending,
    [deletePet.pending]: handlePending,
    [updateAvatar.pending]: handlePending,

    [register.rejected]: handleRejected,
    [login.rejected]: handleRejected,
    [logout.rejected]: handleRejected,
    [updateFavoriteStatus.rejected]: handleRejected,
    [getUser.rejected]: handleRejected,
    [updateUser.rejected]: handleRejected,
    [addPet.rejected]: handleRejected,
    [deletePet.rejected]: handleRejected,
    [updateAvatar.rejected]: handleRejected,

    [register.fulfilled]: (state, { payload }) => {
      state.user.email = payload;
      state.isLoading = false;
    },
    [login.fulfilled]: (
      state,
      { payload: { user, accessToken, refreshToken } }
    ) => {
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.user = user;
      state.isAuth = true;
      state.isLoading = false;
    },
    [logout.fulfilled]: state => {
      state.accessToken = null;
      state.refreshToken = null;
      state.user = {
        name: '',
        email: '',
        city: '',
        phone: '',
        avatarURL: '',
        favoriteNotices: [],
      };
      state.isAuth = false;
      state.isLoading = false;
    },
    [updateFavoriteStatus.fulfilled]: (state, { payload }) => {
      state.user.favoriteNotices = payload.user.favoriteNotices;
      state.isLoading = false;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.pets = payload.pets;
      state.isLoading = false;
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoading = false;
    },
    [addPet.fulfilled]: (state, { payload }) => {
      state.pets.push(payload.newPet);
      state.isLoading = false;
    },
    [deletePet.fulfilled]: (state, { payload }) => {
      state.pets = state.pets.filter(({ _id }) => _id !== payload);
      state.isLoading = false;
    },
    [updateAvatar.fulfilled]: (state, { payload }) => {
      state.user.avatarURL = payload;
      state.isLoading = false;
    },
  },
});

export const authReducer = authSlice.reducer;
