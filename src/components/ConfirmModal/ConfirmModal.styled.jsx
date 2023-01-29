import styled from 'styled-components';

export const Button = styled.button`
  @media screen and (max-width: 767px) {
    &:last-child {
      margin-top: 12px;
    }
  }
  cursor: pointer;
  background-color: ${p =>
    p.filling ? p.theme.colors.accent : p.theme.colors.secondaryBackground};
  border: 2px solid ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.mainBorderRadius};
  color: ${p =>
    p.filling ? p.theme.colors.secondaryBackground : p.theme.colors.black};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  gap: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: calc(22 / 16);
  letter-spacing: 0.04em;
  transition: transform 0.5s;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  :hover,
  :focus {
    transform: scale(1.05);
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
    ${p => {
      if (!p.filling) {
        return `background: linear-gradient(
      120deg,
      transparent,
      rgba(245, 146, 86, 0.9),
      transparent
    );`;
      } else {
        return `
      background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent
    );
      `;
      }
    }}
    transition: all 650ms;
  }
  @media screen and (min-width: 768px) {
    width: 160px;
  }
`;

export const Notification = styled.p`
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 20px;
  line-height: calc(33 / 24);
  letter-spacing: -0.01em;
  color: ${p => p.theme.colors.black};
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    font-size: 24px;
    line-height: calc(38 / 28);
  }
  svg {
    fill: ${p => p.theme.colors.accent};
    font-size: 30px;
  }
`;
