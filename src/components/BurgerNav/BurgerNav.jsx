import { useMedia } from 'react-use';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/authSelectors';
import { UserNav } from 'components/UserNav/UserNav';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Logo } from 'components/Logo/Logo';
import { Nav } from 'components/Nav/Nav';

export const BurgerNav = () => {
  const isAuth = useSelector(selectIsAuth);
  const isMobile = useMedia('(max-width: 767px)');
  return (
    <>
      <Logo />
      <button type="button">x</button>
      {isMobile && isAuth && <UserNav />}
      {isMobile && !isAuth && <AuthNav />}
      <Nav />
    </>
  );
};
