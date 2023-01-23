import styled from 'styled-components';

export const FormBox = styled.div`
  max-width: 280px;
  background-color: white;
`;
export const CloseBtn = styled.div`
  background-color: transparent;
  margin-left: auto;
  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;

export const FormPage = styled.div`
  ${p => {
    if (p.isHidden) {
      return `position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;`;
    } else {
      return `
      position: relative;
      `;
    }
  }}
  display:flex;
  flex-direction: column;
`;
