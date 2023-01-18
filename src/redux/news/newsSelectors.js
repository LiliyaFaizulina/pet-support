export const selectNews = state => {
  const news = state.news.items;
  if (news && news.length > 0) {
    const newNewsArray = [...news].map(news => {
      return { ...news, changeDate: Date.parse(news.date) || 0 };
    });
    return newNewsArray.sort((a, b) => b.changeDate - a.changeDate);
  }
};
export const selectIsLoading = state => state.news.isLoading;
export const selectError = state => state.news.error;
