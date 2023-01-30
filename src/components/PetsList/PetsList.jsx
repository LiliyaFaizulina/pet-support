import { useSelector } from 'react-redux';
import { selectPets } from 'redux/auth/authSelectors';
import PetsListItem from 'components/PetsListItem';
import { Loader } from 'components/Loader';
import { BoxNotFoundPet } from './PetsList.styled';

const PetsList = ({ isLoading, openDeleteModal }) => {
  const pets = useSelector(selectPets);

  return (
    <>
      {isLoading ? (
        <BoxNotFoundPet>
          <Loader />
        </BoxNotFoundPet>
      ) : pets?.length === 0 ? (
        <BoxNotFoundPet>Pet not found</BoxNotFoundPet>
      ) : (
        pets?.map(
          ({ _id, name, data, breed, comments, birthday, petAvatar }) => (
            <PetsListItem
              key={_id}
              name={name}
              data={data}
              breed={breed}
              comment={comments}
              id={_id}
              birthday={birthday}
              petAvatar={petAvatar}
              openDeleteModal={openDeleteModal}
            />
          )
        )
      )}
    </>
  );
};

export default PetsList;
