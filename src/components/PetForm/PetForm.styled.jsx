import styled from 'styled-components';

export const FormBox = styled.div`
  position: relative;
  width: 280px;
  padding: 40px 20px;
  background-color: white;
  border-radius: ${p => p.theme.radii.secondaryBorderRadius};
  h3 {
    text-align: center;
  }
`;
export const CloseBtn = styled.div`
  position: absolute;
  top: 23px;
  right: 23px;
  background-color: transparent;

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
  input,
  textarea {
    width: 100%;
    margin-top: 8px;
    padding: 11px 11px 12px 14px;
    background: #fdf7f2;
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
    margin-bottom: 16px;
    &:focus,
    &:hover {
      outline: none;
    }
  }
  textarea {
    height: 100px;
    border-radius: 20px;
  }
`;

export const AddButton = styled.button`
  width: 208px;
  height: 208px;
  margin: 0 auto;
  background-color: #fdf7f2;
  border-radius: ${p => p.theme.radii.secondaryBorderRadius};
  svg {
    width: 48px;
    height: 48px;
    fill: rgba(17, 17, 17, 0.6);
  }
`;

export const AcseptButton = styled.button`
  width: 100%;
  padding: 11px 0 12px 14px;
  text-align: center;
  color: #fff;
  background: #f59256;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin: 24px 0 0 0;
  transform: scale(1);
  transition: transform 0.5s;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  :hover,
  :focus {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
  :hover:before {
    left: 100%;
  }
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent
    );
    transition: all 650ms;
  }
  :disabled {
    opacity: 0.5;
    cursor: auto;
    transform: none;
    transition: none;
  }
  :disabled:before {
    transform: none;
    transition: none;
  }
  @media (min-width: 768px) {
    width: 458px;
    font-size: 20px;
  }
`;
export const BackButton = styled(AcseptButton)`
  color: #000;
  background: #fff;
  border: 1px solid #f59256;
  :before {
    background: linear-gradient(
      120deg,
      transparent,
      rgba(245, 146, 86, 0.9),
      transparent
    );
  }
`;
