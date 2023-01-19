import { AddPet } from "./AddPetBtn.styled";

const AddPetBtn = ({ disabled = false, onOpenModal: openAddPetModal, ...props }) => {
  return (
    <>
      <AddPet active disabled={disabled} onClick={openAddPetModal} {...props}>
        +
      </AddPet>
    </>
  );
};

export default AddPetBtn;