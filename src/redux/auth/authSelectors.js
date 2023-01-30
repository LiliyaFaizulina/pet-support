export const selectEmail = state => state.auth.user.email;
export const selectUser = state => state.auth.user;
export const selectPets = state => state.auth.pets;
export const selectUsersId = state => state.auth.user._id;
export const selectFavoriteNoticesIds = state =>
  state.auth.user.favoriteNotices;
export const selectIsLoading = state => state.auth.isLoading;
export const selectError = state => state.auth.error;
export const selectIsAuth = state => state.auth.isAuth;
