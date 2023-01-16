export const selectEmail = state => state.auth.user.email;
export const selectFavoriteNoticesIds = state =>
  state.auth.user.favoriteNotices;
export const selectIsLoading = state => state.auth.selectIsLoading;
export const selectError = state => state.auth.error;
