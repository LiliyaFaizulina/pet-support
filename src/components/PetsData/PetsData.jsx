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



const PetsData = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <BoxPet>
        <BoxTitlePet>
          <TitlePet>My pets:</TitlePet>
              <BoxBtn>
                <TitleBtn>Add pet</TitleBtn>
                <AddPetBtn/>
              </BoxBtn>
        </BoxTitlePet>
        <PetsList isLoading={isLoading} />
      </BoxPet>
    </>
  );
};

export default PetsData;
