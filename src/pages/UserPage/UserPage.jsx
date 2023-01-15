import UserData from "components/UserData";
import Logout from "components/Logout";
import PetsData from "components/PetsData";
import Modal from "components/Modal/Modal";
import ModalAddsPet from "components/ModalAddsPet";
import { UserPageContainer, BoxUser } from "./UserPage.styled";
import { useSelector } from "react-redux";

const UserPage = () => {
  const modalAddPetsState = useSelector(({ user }) => user.modalAddPets.active);

  return (
    <>
      {modalAddPetsState && (
        <Modal modalName={"modalAddPets"}>
          <ModalAddsPet />
        </Modal>
      )}
      <UserPageContainer>
        <BoxUser>
          <UserData />
          <Logout />
        </BoxUser>
        <PetsData />
      </UserPageContainer>
    </>
  );
};

export default UserPage;