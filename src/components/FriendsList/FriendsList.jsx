import { FriendsItem } from 'components/FriendsItem/FriendsItem';
import { List, Title } from './FriendsList.styled';

const FriendsList = ({ friends }) => {
  return (
    <>
      <Title>Our Friends</Title>
      <List>
        {friends.map(
          ({
            title,
            url,
            addressUrl,
            imageUrl,
            address,
            workDays,
            phone,
            email,
          }) => (
            <FriendsItem
              key={title}
              title={title}
              siteUrl={url}
              mapUrl={addressUrl}
              imageUrl={imageUrl}
              adress={address}
              workDays={workDays}
              phone={phone}
              email={email}
            />
          )
        )}
      </List>
    </>
  );
};

export default FriendsList;
