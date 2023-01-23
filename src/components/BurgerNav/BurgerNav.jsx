import { useMedia } from 'react-use';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/authSelectors';
import { UserNav } from 'components/UserNav/UserNav';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Logo } from 'components/Logo/Logo';
import { Nav } from 'components/Nav/Nav';
import { BurgerNavCloseBtn } from 'components/BurgerNav/BurgerNavCloseBtn';
import { BurgerNavMenu, LogoMenu, UserAuthMenu } from './BurgerNav.styled';

export const BurgerNav = ({ close, setIsBurgerNavOpen }) => {
  const isAuth = useSelector(selectIsAuth);
  const isMobile = useMedia('(max-width: 767px)');
  const isDesktop = useMedia('(min-width: 1280px)');
  if (isDesktop) {
    close();
  }
  return (
    <BurgerNavMenu
      onClick={close}
      // onClick={() => setIsBurgerNavOpen(false)}
    >
      <LogoMenu>
        <Logo />
        <BurgerNavCloseBtn onClick={close} />
      </LogoMenu>
      {/* <div onClick={e => e.stopPropagation()}> */}
      <UserAuthMenu>
        {isMobile && isAuth && <UserNav />}
        {isMobile && !isAuth && <AuthNav />}
      </UserAuthMenu>
      <Nav />
      {/* </div> */}
    </BurgerNavMenu>
  );
};
