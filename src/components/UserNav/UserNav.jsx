import { UserNavLink, UserNavBtn, UserNavBtnIcon } from './UserNav.styled';
import AccountIcon from '../../images/header/account.svg';

export const UserNav = () => {
  return (
    <>
      <UserNavLink to="/user">
        <UserNavBtn type="button">
          <UserNavBtnIcon src={AccountIcon} alt="account" />
          Account
        </UserNavBtn>
      </UserNavLink>
    </>
  );
};
