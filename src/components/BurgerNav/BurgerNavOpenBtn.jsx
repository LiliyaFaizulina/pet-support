import { GiHamburgerMenu } from 'react-icons/gi';
import { GiHamburgerMenuOpen } from './BurgerNavOpenBtn.styled';

export const BurgerNavOpenBtn = ({ onClick }) => {
  return (
    <>
      <GiHamburgerMenuOpen onClick={onClick}>
        <GiHamburgerMenu />
      </GiHamburgerMenuOpen>
    </>
  );
};
