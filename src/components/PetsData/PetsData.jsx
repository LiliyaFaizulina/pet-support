import { useDispatch } from "react-redux";
import { useGetUserQuery } from "redux/userApi";
import AddPetBtn from "components/AddPetBtn";

import { TitlePet, BoxBtn, BoxTitlePet, BoxPet, TitleBtn } from "./PetsData.styled";
import PetsList from "components/PetsList";
import { userActions } from "redux/user/userSlice";

const screenSize = window.innerWidth;

const PetsData = () => {
  const { data = [], isLoading } = useGetUserQuery();
  const dispatch = useDispatch();
  const handleModalOpen = () => dispatch(userActions.changeModalAddPets());
  return (
    <>
      <BoxPet>
        <BoxTitlePet>
          <TitlePet>My pets:</TitlePet>
          {screenSize < 767 && (
            <>
              <BoxBtn>
                <TitleBtn>Add pet</TitleBtn>
                <AddPetBtn disabled={isLoading ? true : false} onClick={handleModalOpen} />
              </BoxBtn>
            </>
          )}
          {screenSize > 1280 && (
            <>
              <BoxBtn>
                <TitleBtn>Add pet</TitleBtn>
                <AddPetBtn disabled={isLoading ? true : false} onClick={handleModalOpen} />
              </BoxBtn>
            </>
          )}
        </BoxTitlePet>
        <PetsList data={data} isLoading={isLoading} />
      </BoxPet>
    </>
  );
};

export default PetsData;