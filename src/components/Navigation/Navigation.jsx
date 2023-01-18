import { useMedia } from 'react-use';
import { Nav } from 'components/Nav/Nav';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserNav } from 'components/UserNav/UserNav';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/authSelectors';
import { BurgerNavBtn } from 'components/BurgerNav/BurgerNavBtn';

export const Navigation = () => {
  const isAuth = useSelector(selectIsAuth);
  const isDesctop = useMedia('(min-width: 1280px)');
  const isMobile = useMedia('(max-width: 767px)');
  return (
    <>
      {isDesctop && <Nav />}
      {!isMobile && isAuth && <UserNav />}
      {!isMobile && !isAuth && <AuthNav />}
      {!isDesctop && <BurgerNavBtn />}
    </>
  );
};
