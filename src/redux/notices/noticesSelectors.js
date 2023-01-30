import { createSelector } from '@reduxjs/toolkit';

export const selectNoticesByCategory = state => state.notices.notices;
export const favoriteNotices = state => state.notices.favoriteNotices;
export const selectUsersNotices = state => state.notices.ownNotices;
export const selectCurrentNotice = state => state.notices.currentNotice;
export const selectIsLoading = state => state.notices.selectIsLoading;
export const selectError = state => state.notices.error;
export const selectFavoritesId = state => state.auth.user.favoriteNotices;

export const selectNotices = createSelector(
  [selectFavoritesId, selectNoticesByCategory],
  (favoritesIds, notices) => {
    if (!favoritesIds.length) {
      return notices;
    }
    const noticesWithStatus = notices.map(notice => {
      const isFavorite = favoritesIds.includes(notice._id);
      return { ...notice, favorite: isFavorite };
    });
    return noticesWithStatus;
  }
);

export const selectOwnNotices = createSelector(
  [selectFavoritesId, selectUsersNotices],
  (favoritesIds, ownNotices) => {
    if (!favoritesIds.length) {
      return ownNotices;
    }
    const ownNoticesWithStatus = ownNotices.map(notice => {
      const isFavorite = favoritesIds.includes(notice._id);
      return { ...notice, favorite: isFavorite };
    });
    return ownNoticesWithStatus;
  }
);

export const selectFavoriteNotices = createSelector(
  [selectFavoritesId, favoriteNotices],
  (favoritesIds, notices) => {
    if (!favoritesIds.length) {
      return [];
    }
    const noticesWithStatus = notices.reduce((acc, notice) => {
      if (favoritesIds.includes(notice._id)) {
        acc.push({ ...notice, favorite: true });
      }
      return acc;
    }, []);
    return noticesWithStatus;
  }
);
