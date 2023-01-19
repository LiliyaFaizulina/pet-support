import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getFriends } from 'redux/friends/friendsOperations';
import { 
  selectFriends,
  selectError,
  selectIsLoading
 } from 'redux/friends/friendsSelectors';

import Container from 'components/Container/Container';
import FriendsList from 'components/FriendsList/FriendsList';
import Spinner from 'components/Spinner/Spinner';
import { Wrapper } from 'pages/NewsPage/NewsPage.styled';

const OurFriendsPage = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectFriends);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (!isLoading && data) {
      dispatch(getFriends());
    }
  }, [isLoading, data, dispatch]);

  return (
    <Wrapper>
      <Container>
        {isLoading && <Spinner />}
        {!isLoading && error && (
          <h2>Server error. Please, try again later.</h2>
        )}
        {!isLoading && !error && <FriendsList friends={data} />}
      </Container>
    </Wrapper>
  );
};

export default OurFriendsPage;
