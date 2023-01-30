import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMedia } from 'react-use';
import { selectIsAuth } from 'redux/auth/authSelectors';
import { Nav } from 'components/Nav/Nav';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserNav } from 'components/UserNav/UserNav';
import { BurgerNavOpenBtn } from 'components/BurgerNav/BurgerNavOpenBtn';
import { BurgerNav } from 'components/BurgerNav/BurgerNav';

export const Navigation = () => {
  const [isBurgerNavOpen, setIsBurgerNavOpen] = useState(false);
  const isAuth = useSelector(selectIsAuth);
  const isDesktop = useMedia('(min-width: 1280px)');
  const isMobile = useMedia('(max-width: 767px)');

  const open = () => {
    setIsBurgerNavOpen(true);
  };

  const close = e => {
    if (e.target.nodeName === 'A' || e.currentTarget.nodeName === 'BUTTON') {
      setIsBurgerNavOpen(false);
    }
  };

  return (
    <>
      {isDesktop && <Nav />}
      {!isMobile && isAuth && <UserNav />}
      {!isMobile && !isAuth && <AuthNav />}
      {!isDesktop && <BurgerNavOpenBtn onClick={open} />}

      {isBurgerNavOpen && !isDesktop && <BurgerNav close={close} />}
    </>
  );
};
