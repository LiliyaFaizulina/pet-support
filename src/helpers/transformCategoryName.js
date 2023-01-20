export const transformCategoryName = category => {
  switch (category) {
    case 'for-free':
      return 'In good hands';
    case 'lost-found':
      return 'Lost/found';
    default:
      return 'Sell';
  }
};
