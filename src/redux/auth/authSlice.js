import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import {
  register,
  login,
  logout,
  updateFavoriteStatus,
} from './authOperations';

// const authPersistConfig = {
//   key: 'refreshToken',
//   storage,
//   whitelist: ['refreshToken'],
// };

const initialState = {
  user: {
    name: '',
    email: '',
    city: '',
    phone: '',
    avatarURL: '',
    favoriteNotices: [],
  },
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

    [register.rejected]: handleRejected,
    [login.rejected]: handleRejected,
    [logout.rejected]: handleRejected,
    [updateFavoriteStatus.rejected]: handleRejected,

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
  },
});

// export const authPersistedReducer = persistReducer(
//   authPersistConfig,
//   authSlice.reducer
// );
export const authReducer = authSlice.reducer;
