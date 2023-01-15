import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { authPersistedReducer } from './auth/authSlice';
import { friendsReducer } from './friends/friendsSlice';
import { newsReducer } from './news/newsSlice';

export const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    friends: friendsReducer,
    news: newsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
