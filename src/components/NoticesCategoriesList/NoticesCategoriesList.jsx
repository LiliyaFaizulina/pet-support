import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/notices/noticesSelectors';
import { NoticeCategoryItem } from 'components/NoticeCategoryItem/NoticeCategoryItem';
import Spinner from 'components/Spinner/Spinner';
import { NoMatchesText } from 'components/NoMatchesText/NoMatchesText';
import { List } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = ({
  notices,
  deleteOwnNotice,
  openNoticeModal,
}) => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <Spinner />}

      {!isLoading && notices.length === 0 && <NoMatchesText />}

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
