import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/auth/authSelectors';
import AddPetBtn from 'components/AddPetBtn';
import PetsList from '../PetsList/PetsList';
import {
  TitlePet,
  BoxBtn,
  BoxTitlePet,
  BoxPet,
  TitleBtn,
} from './PetsData.styled';

const PetsData = ({ openModal, openDeleteModal }) => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <BoxPet>
        <BoxTitlePet>
          <TitlePet>My pets:</TitlePet>
          <BoxBtn>
            <TitleBtn>Add pet</TitleBtn>
            <AddPetBtn openModal={openModal} />
          </BoxBtn>
        </BoxTitlePet>
        <PetsList isLoading={isLoading} openDeleteModal={openDeleteModal} />
      </BoxPet>
    </>
  );
};

export default PetsData;
