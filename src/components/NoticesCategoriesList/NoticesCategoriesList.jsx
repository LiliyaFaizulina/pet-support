import { NoticeCategoryItem } from 'components/NoticeCategoryItem/NoticeCategoryItem';

export const NoticesCategoriesList = ({ notices, currentCategory }) => {
  return (
    <ul>
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
            currentCategory={currentCategory}
          />
        )
      )}
    </ul>
  );
};
