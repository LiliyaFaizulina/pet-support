import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getFriends } from 'redux/friends/friendsOperations';
import {
  selectFriends,
  selectError,
  selectIsLoading,
} from 'redux/friends/friendsSelectors';

import { Container, Section } from 'utils/GlobalStyle';
import FriendsList from 'components/FriendsList/FriendsList';
import Spinner from 'components/Spinner/Spinner';

const OurFriendsPage = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectFriends);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getFriends());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        {isLoading && <Spinner />}
        {!isLoading && error && <h2>Server error. Please, try again later.</h2>}
        {!isLoading && !error && <FriendsList friends={data} />}
      </Container>
    </Section>
  );
};

export default OurFriendsPage;
