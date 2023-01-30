import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useMedia } from 'react-use';

import { selectIsAuth } from 'redux/auth/authSelectors';
import { UserNav } from 'components/UserNav/UserNav';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Logo } from 'components/Logo/Logo';
import { Nav } from 'components/Nav/Nav';
import { BurgerNavCloseBtn } from 'components/BurgerNav/BurgerNavCloseBtn';
import { BurgerNavMenu, LogoMenu, UserAuthMenu } from './BurgerNav.styled';
import { Container } from 'utils/GlobalStyle';

export const BurgerNav = ({ close }) => {
  const isAuth = useSelector(selectIsAuth);
  const isMobile = useMedia('(max-width: 767px)');
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  });

  return (
    <BurgerNavMenu onClick={close}>
      <Container>
        <LogoMenu>
          <Logo />
          <BurgerNavCloseBtn onClick={close} />
        </LogoMenu>
        <UserAuthMenu>
          {isMobile && isAuth && <UserNav />}
          {isMobile && !isAuth && <AuthNav />}
        </UserAuthMenu>
        <Nav />
      </Container>
    </BurgerNavMenu>
  );
};
