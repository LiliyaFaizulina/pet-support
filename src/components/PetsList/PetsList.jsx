import PetsListItem from "components/PetsListItem";
import Loader from "components/Loader";
import { BoxNotFoundPet } from "./PetsList.styled";

const PetsList = ({ data, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <BoxNotFoundPet>
          <Loader />
        </BoxNotFoundPet>
      ) : data?.data?.result?.pets?.length === 0 ? (
        <BoxNotFoundPet>Pet not found</BoxNotFoundPet>
      ) : (
        data.data.result.pets.map(({ _id, name, data, breed, comments, birthday, avatar }) => (
          <PetsListItem key={_id} name={name} data={data} breed={breed} comment={comments} id={_id} birthday={birthday} avatar={avatar} />
        ))
      )}
    </>
  );
};

export default PetsList;