import { AuthNavList, AuthNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <>
      <AuthNavList>
        <li>
          <AuthNavLink to="/login">Login</AuthNavLink>
        </li>
        <li>
          <AuthNavLink to="/register">Registration</AuthNavLink>
        </li>
      </AuthNavList>
    </>
  );
};
