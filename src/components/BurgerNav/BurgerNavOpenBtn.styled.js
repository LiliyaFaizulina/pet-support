import styled from 'styled-components';

export const GiHamburgerMenuOpen = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 2em;
  cursor: pointer;
  margin-left: auto;
  background: ${p => p.theme.colors.mainBackground};

  @media (min-width: 768px) {
    margin-left: 25px;
  }
  svg {
    fill: ${p => p.theme.colors.heading};
  }
`;
