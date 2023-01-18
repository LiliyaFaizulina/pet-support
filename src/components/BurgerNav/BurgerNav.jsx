import { useMedia } from 'react-use';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/authSelectors';

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
