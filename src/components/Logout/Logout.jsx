import { LogOut, LogOutIcon } from './Logout.styled';

const Logout = ({ openModal }) => {
  return (
    <LogOut onClick={openModal}>
      <LogOutIcon />
      Log Out
    </LogOut>
  );
};

export default Logout;
