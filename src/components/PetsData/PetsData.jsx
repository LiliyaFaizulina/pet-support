import { useSelector } from 'react-redux';
// import { useGetUserQuery } from 'redux/userApi';
import AddPetBtn from 'components/AddPetBtn';
import { selectIsLoading } from '../../redux/auth/authSelectors';
import {
  TitlePet,
  BoxBtn,
  BoxTitlePet,
  BoxPet,
  TitleBtn,
} from './PetsData.styled';
import PetsList from '../PetsList/PetsList';

const screenSize = window.innerWidth;

const PetsData = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <BoxPet>
        <BoxTitlePet>
          <TitlePet>My pets:</TitlePet>
          {screenSize < 767 && (
            <>
              <BoxBtn>
                <TitleBtn>Add pet</TitleBtn>
                <AddPetBtn
                  disabled={isLoading ? true : false}
                  // onClick={handleModalOpen}
                />
              </BoxBtn>
            </>
          )}
          {screenSize > 1280 && (
            <>
              <BoxBtn>
                <TitleBtn>Add pet</TitleBtn>
                <AddPetBtn
                  disabled={isLoading ? true : false}
                  // onClick={handleModalOpen}
                />
              </BoxBtn>
            </>
          )}
        </BoxTitlePet>
        <PetsList isLoading={isLoading} />
      </BoxPet>
    </>
  );
};

export default PetsData;
