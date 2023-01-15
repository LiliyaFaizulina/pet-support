import { useDispatch } from "react-redux";
import { userActions } from "redux/user/userSlice";
import AddPetBtn from "components/AddPetBtn";
import UserDataForm from "components/UserDataItem/UserDataForm";
import { TitleUser, TitleBtn, BoxTitleUser, BoxBtnTablet } from "./UserData.styled";

const UserData = () => {
  const dispatch = useDispatch();
  const handleModalOpen = () => dispatch(userActions.changeModalAddPets());

  return (
    <>
      <BoxTitleUser>
        <TitleUser>My information:</TitleUser>
        <BoxBtnTablet>
          <TitleBtn>Add pet</TitleBtn>
          <AddPetBtn active onClick={handleModalOpen}></AddPetBtn>
        </BoxBtnTablet>
      </BoxTitleUser>
      <UserDataForm />
    </>
  );
};

export default UserData;