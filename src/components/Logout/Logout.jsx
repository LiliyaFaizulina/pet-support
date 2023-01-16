import { useDispatch } from "react-redux";
import { authSlice } from "redux/auth/authSlice";
import { useLogOutUserMutation } from "redux/auth/authApi";// будем переписывать
import { userSlice } from "redux/user";
import { LogOut, LogOutIcon } from "./Logout.styled";
import { userApi } from "redux/userApi"; // будем переписывать

const Logout = () => {
  const dispatch = useDispatch();
  const [logOut] = useLogOutUserMutation();
  const { logout } = authSlice;
  const { userActions } = userSlice;

  const handleLogOut = () => {
    logOut();
    dispatch(logout());
    dispatch(userActions.unsetNotice());
    dispatch(userActions.unsetFavorite());
    dispatch(userApi.util.resetApiState());
  };

  return (
    <LogOut onClick={handleLogOut}>
      <LogOutIcon />
      log out
    </LogOut>
  );
};

export default Logout;