import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { authReducer } from './auth/authSlice';
import { friendsReducer } from './friends/friendsSlice';
import { newsReducer } from './news/newsSlice';
import { noticesReducer } from './notices/noticesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    friends: friendsReducer,
    news: newsReducer,
    notices: noticesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
