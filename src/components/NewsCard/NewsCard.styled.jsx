import styled from 'styled-components';

export const Item = styled.li`
  padding-top: 40px;

  position: relative;

  @media screen and (min-width: 768px) {
    padding-top: 0;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const CardTitle = styled.h3`
  font-size: 24px;
  line-height: 1.375;
  letter-spacing: -0.01em;

  padding-top: 4px;
  margin: 0;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const Line = styled.div`
  width: 200px;
  height: 4px;

  background: linear-gradient(90deg, #ff634e, #ffdf48);
  border-radius: 40px;

  @media screen and (min-width: 768px) {
    width: 280px;
    height: 8px;
  }
  @media screen and (min-width: 1280px) {
    width: 340px;
  }
`;

export const Description = styled.p`
  margin: 0;
  padding-top: 16px;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;

  color: ${p => p.theme.colors.newsText};

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 8;
  overflow-x: hidden;
  overflow-y: hidden;

  @media screen and (min-width: 768px) {
    -webkit-line-clamp: 6;
  }
  @media screen and (min-width: 1280px) {
    -webkit-line-clamp: 5;
  }
`;

export const Addition = styled.div`
  display: flex;
  justify-content: space-between;

  padding-top: 20px;
  padding-bottom: 0;

  @media screen and (min-width: 768px) {
    padding-top: 40px;
  }
`;

export const Time = styled.time`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;

  color: ${p => p.theme.colors.inputText};
`;

export const Link = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;

  text-decoration-line: underline;

  color: ${p => p.theme.colors.accent};

  &:hover,
  &:focus {
    scale: 1.1;

    color: #ff634e;
  }
`;
