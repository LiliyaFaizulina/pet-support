import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 28px;

  border: ${p => (p.active ? "none" : p.theme.borders.primaryBtn)};
  border-radius: ${p => p.theme.radii.btn};

  background-color: ${p =>
    p.active ? p.theme.colors.accent : p.theme.colors.white};
  color: ${p =>
    p.active ? p.theme.colors.secondatyBtnText : p.theme.colors.accent};
  cursor: pointer;

  :hover:not(:disabled),
  :focus:not(:disabled) {
    background-color: ${p =>
      p.active ? p.theme.colors.hoverBtn : p.theme.colors.white};
    border-color: ${p => p.theme.colors.hoverBtn};
    color: ${p =>
      p.active ? p.theme.colors.secondatyBtnText : p.theme.colors.hoverBtn};
    outline: none;
  }
`;