import { Container } from 'utils/GlobalStyle.jsx';
import { HeaderBlok } from './Header.styled';
import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';

export const Header = () => {
  return (
    <header>
      <Container>
        <HeaderBlok>
          <Logo />
          <Navigation />
        </HeaderBlok>
      </Container>
    </header>
  );
};
