import { AddPet } from './AddPetBtn.styled';
import { TfiPlus } from 'react-icons/tfi';

const AddPetBtn = ({ disabled = false, openModal, ...props }) => {
  return (
    <>
      <AddPet active disabled={disabled} onClick={openModal} {...props}>
        <TfiPlus />
      </AddPet>
    </>
  );
};

export default AddPetBtn;
