import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 28px;

  border: ${p => (p.active ? "none" : p.theme.borders.primaryBtn)};
  border-radius: ${p => p.theme.radii.mainBorderRadius};

  background-color: ${p =>
    p.active ? p.theme.colors.accent : p.theme.colors.secondaryBackground};
  color: ${p =>
    p.active ? p.theme.colors.secondaryBackground : p.theme.colors.accent};
  cursor: pointer;

  :hover:not(:disabled),
  :focus:not(:disabled) {
    background-color: ${p =>
      p.active ? p.theme.colors.hoverBtn : p.theme.colors.secondaryBackground};
    border-color: ${p => p.theme.colors.hoverBtn};
    color: ${p =>
      p.active ? p.theme.colors.secondaryBackground : p.theme.colors.hoverBtn};
    outline: none;
  }
`;