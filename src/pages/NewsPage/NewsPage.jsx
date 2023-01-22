import { Wrapper, Title, List } from './NewsPage.styled';
import { SearchField } from 'components/SearchField/SearchField';
import { NewsCard } from 'components/NewsCard/NewsCard';
import ScrollToTop from 'react-scroll-to-top';

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
  let error = useSelector(selectError);

  const filteredNews = (allNews, filterText) =>
    allNews.filter(news =>
      news.title.toLowerCase().includes(filterText.toLowerCase())
    );

  const renderCard = newsArray => {
    const newsCards = newsArray.map(news => (
      <NewsCard news={news} key={news._id} />
    ));
    if (newsCards.length > 0) {
      return newsCards;
    } else {
      return <Title>We have no news for you</Title>;
    }
  };

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const onSubmit = evt => {
    evt.preventDefault();
    setFilterText(evt.target.query.value);
  };

  const onChange = evt => {
    setFilterText(evt.currentTarget.query.value);
  };

  return (
    <Wrapper>
      <Title>News</Title>
      <SearchField
        onSubmit={evt => onSubmit(evt)}
        onChange={evt => onChange(evt)}
        setFilterText={() => setFilterText()}
      ></SearchField>
      {error && <p>Ooops... something Wrong</p>}
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <List>
          {allNews && !filterText && renderCard(allNews)}
          {allNews &&
            filterText &&
            renderCard(filteredNews(allNews, filterText))}
        </List>
      )}
      <ScrollToTop smooth color="#F59256" />
    </Wrapper>
  );
};

export default NewsPage;
