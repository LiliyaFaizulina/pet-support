import { AddPet } from './AddPetBtn.styled';

const AddPetBtn = ({ disabled = false, openModal, ...props }) => {
  return (
    <>
      <AddPet active disabled={disabled} onClick={openModal} {...props}>
        +
      </AddPet>
    </>
  );
};

export default AddPetBtn;
