import { UserNavLink, UserNavBtnIcon } from './UserNav.styled';
import AccountIcon from '../../images/header/account.svg';

export const UserNav = () => {
  return (
    <>
      <UserNavLink to="/user">
        <UserNavBtnIcon src={AccountIcon} alt="account" />
        Account
      </UserNavLink>
    </>
  );
};
