import { NoticeCategoryItem } from 'components/NoticeCategoryItem/NoticeCategoryItem';
import { ErrorText, List } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = ({
  notices,
  deleteOwnNotice,
  openNoticeModal,
}) => {
  if (!notices.length) {
    return <ErrorText>No notices for your request</ErrorText>;
  }

  return (
    <List>
      {notices.map(
        ({
          _id,
          image,
          title,
          petName,
          breed,
          location,
          dateOfBirth,
          price,
          category,
          favorite,
          owner,
        }) => (
          <NoticeCategoryItem
            key={_id}
            id={_id}
            image={image}
            title={title}
            petName={petName}
            breed={breed}
            place={location}
            dateOfBirth={dateOfBirth}
            price={price}
            category={category}
            favorite={favorite}
            owner={owner}
            deleteOwnNotice={deleteOwnNotice}
            openNoticeModal={openNoticeModal}
          />
        )
      )}
    </List>
  );
};
