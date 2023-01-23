import { useSelector } from 'react-redux';
import { NoticeCategoryItem } from 'components/NoticeCategoryItem/NoticeCategoryItem';
import { selectIsLoading } from 'redux/notices/noticesSelectors';
import { ErrorText, List } from './NoticesCategoriesList.styled';
import Spinner from 'components/Spinner/Spinner';

export const NoticesCategoriesList = ({
  notices,
  deleteOwnNotice,
  openNoticeModal,
}) => {
  const isLoading = useSelector(selectIsLoading);
  console.log(notices);

  return (
    <>
      {isLoading && <Spinner />}

      {!isLoading && notices.length === 0 && (
        <ErrorText>No notices for your request</ErrorText>
      )}

      {!isLoading && notices.length > 0 && (
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
      )}
    </>
  );
};
