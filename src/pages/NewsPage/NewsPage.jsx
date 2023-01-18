import { Wrapper, Title, Form, Input, List } from './NewsPage.styled';
import { SearchField } from 'components/SearchField/SearchField';
import { NewsCard } from 'components/NewsCard/NewsCard';

import { getNews } from 'redux/news/newsOperations';
import {
  selectNews,
  selectError,
  selectIsLoading,
} from 'redux/news/newsSelectors';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const NewsPage = () => {
  const dispatch = useDispatch();

  const [filterText, setFilterText] = useState();

  const allNews = useSelector(selectNews);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const sortNewsByDate = allNews => {
    const newNewsArray = [...allNews].map(news => {
      return { ...news, changeDate: Date.parse(news.date) || 0 };
    });
    return newNewsArray.sort((a, b) => b.changeDate - a.changeDate);
  };

  const filteredNews = (allNews, filterText) =>
    allNews.filter(news =>
      news.title.toLowerCase().includes(filterText.toLowerCase())
    );

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const onSubmit = evt => {
    evt.preventDefault();
    setFilterText(evt.target.query.value);
  };

  return (
    <Wrapper>
      <Title>News</Title>
      <SearchField onSubmit={evt => onSubmit(evt)}></SearchField>
      {error && <p>Ooops... something Wrong</p>}
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <List>
          {allNews.length > 0 &&
            !filterText &&
            sortNewsByDate(allNews).map(news => (
              <NewsCard news={news} key={news._id} />
            ))}
          {allNews.length > 0 &&
            filterText &&
            filteredNews(sortNewsByDate(allNews), filterText).map(news => (
              <NewsCard news={news} key={news._id} />
            ))}
        </List>
      )}
    </Wrapper>
  );
};

export default NewsPage;
