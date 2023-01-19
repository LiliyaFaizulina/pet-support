import { HeaderBlok } from './Header.styled';
import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';

export const Header = () => {
  return (
    <HeaderBlok>
      <Logo />
      <Navigation />
    </HeaderBlok>
  );
};
