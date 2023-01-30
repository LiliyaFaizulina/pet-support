import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from 'redux/news/newsOperations';
import {
  selectNews,
  selectError,
  selectIsLoading,
} from 'redux/news/newsSelectors';
import { SearchField } from 'components/SearchField/SearchField';
import { NewsCard } from 'components/NewsCard/NewsCard';
import Spinner from 'components/Spinner/Spinner';
import { NoMatchesText } from 'components/NoMatchesText/NoMatchesText';
import { Wrapper, Title, List, Scroll } from './NewsPage.styled';

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
      return <List> {newsCards} </List>;
    } else {
      return <NoMatchesText />;
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
      {error && <Title>Ooops... something Wrong</Title>}
      {isLoading && <Spinner />}
      {!isLoading && allNews && (
        <>
          {!filterText && renderCard(allNews)}
          {filterText && renderCard(filteredNews(allNews, filterText))}
        </>
      )}
      <Scroll smooth color="#F59256" />
    </Wrapper>
  );
};

export default NewsPage;
