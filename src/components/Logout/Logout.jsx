import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperations';

import { LogOut, LogOutIcon } from './Logout.styled';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <LogOut onClick={handleLogOut}>
      <LogOutIcon />
      log out
    </LogOut>
  );
};

export default Logout;
