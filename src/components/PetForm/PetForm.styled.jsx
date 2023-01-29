import styled from 'styled-components';
export const FormBox = styled.div`
  position: relative;
  width: 280px;
  padding: 40px 20px;
  background-color: white;
  border-radius: ${p => p.theme.radii.secondaryBorderRadius};

  @media (min-width: 768px) {
    width: 608px;
    padding: ${p => (p.secondPage ? '40px 107px' : '40px 80px')};
  }
  h3 {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.36;
    text-align: center;
    margin-bottom: 20px;
    @media (min-width: 768px) {
      font-size: 36px;
    }
  }
  h4 {
    text-align: center;
  }
  label {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.44;
    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 1.08;
    }
  }
  p {
    position: absolute;
    color: red;
    font-size: 12px;
    left: 15px;
  }
`;

export const FileLable = styled.div`
  width: 182px;
  height: 182px;
  margin: 0 auto;
  position: relative;
  border-radius: ${p => p.theme.radii.mainBorderRadius};

  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${p => p.theme.radii.secondaryBorderRadius};
  }
`;
export const CloseBtn = styled.button`
  position: absolute;
  top: 23px;
  right: 23px;
  padding: 0;
  color: ${p => p.theme.colors.heading};
  background-color: transparent;
  cursor: pointer;
  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
  svg {
    @media (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
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
    overflow-x: hidden;
    overflow-y: hidden;`;
    } else {
      return `
      position: relative;
      `;
    }
  }}
  display:flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 768px) {
    gap: 28px;
  }
  input,
  textarea {
    width: 240px;
    padding: 11px 11px 12px 14px;
    background: #fdf7f2;
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
    margin-top: 8px;
    color: rgba(27, 27, 27, 0.6);

    &:focus,
    &:hover {
      outline: none;
    }
    @media (min-width: 768px) {
      margin-top: 12px;
      width: 100%;
    }
  }
  @media (max-width: 420px) {
    input[type='date'] {
      position: relative;
      height: 46px;

      &::after {
        content: ${p => (p.isEmpty ? `attr(placeholder)` : `""`)};
        color: rgba(27, 27, 27, 0.3);
        position: absolute;
        top: 12px;
        left: 14px;
        width: 150px;
      }
    }
  }

  textarea {
    height: 100px;
    border-radius: 20px;
  }
`;

export const AddButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 182px;
  height: 182px;
  margin: 0 auto;
  background-color: #fdf7f2;
  justify-content: center;
  align-items: center;
  border-radius: ${p => p.theme.radii.secondaryBorderRadius};
  cursor: pointer;
  svg {
    width: 48px;
    height: 48px;
    fill: rgba(17, 17, 17, 0.6);
  }
  span {
    font-size: 12px;
    margin-top: 35px;
    color: grey;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    margin-top: 12px;
  }
`;

export const AcseptButton = styled.button`
  width: 100%;
  height: 40px;
  padding: 7px 0 8px;
  text-align: center;
  color: #fff;
  background: #f59256;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-top: 24px;
  transform: scale(1);
  transition: transform 0.5s;
  cursor: pointer;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  :hover,
  :focus {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
  :hover:before {
    left: 100%;
    @media screen and (max-width: 767px) {
      visibility: visible;
    }
  }
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 767px) {
      visibility: hidden;
    }
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
    font-size: 20px;
    width: 180px;
    height: 44px;
    margin-top: 0px;
  }
`;
export const BackButton = styled(AcseptButton)`
  color: #000;
  background: #fff;
  border: 1px solid #f59256;
  order: 2;
  margin-top: 0;
  :before {
    @media screen and (max-width: 767px) {
      visibility: hidden;
    }
    background: linear-gradient(
      120deg,
      transparent,
      rgba(245, 146, 86, 0.9),
      transparent
    );
  }
  @media (min-width: 768px) {
    order: 0;
  }
`;
