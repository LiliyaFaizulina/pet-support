import { LogOut, LogOutIcon } from './Logout.styled';

const Logout = ({ openModal }) => {
  return (
    <LogOut onClick={openModal}>
      <LogOutIcon />
      log out
    </LogOut>
  );
};

export default Logout;
