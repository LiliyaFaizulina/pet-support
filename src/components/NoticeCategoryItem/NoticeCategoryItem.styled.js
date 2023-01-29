import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  width: 280px;
  margin-left: auto;
  margin-right: auto;

  background-color: ${p => p.theme.colors.secondaryBackground};
  box-shadow: 7px 4px 14px ${p => p.theme.colors.shadowCard};
  border-radius: 0px 0px 20px 20px;
  color: ${p => p.theme.colors.heading};

  @media ${p => p.theme.media.tablet} {
    width: calc((100% - 32px) / 2);
    margin: 0;
    border-radius: 0px 0px 40px 40px;
  }

  @media ${p => p.theme.media.desktop} {
    width: calc((100% - 3 * 32px) / 4);
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 288px;
  object-fit: cover;
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  padding: 0 16px 12px 16px;

  @media ${p => p.theme.media.tablet} {
    padding: 0 20px 12px 20px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  height: 76px;
  overflow-x: hidden;
  overflow-y: hidden;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 28px;
  line-height: calc(38 / 28);
  letter-spacing: -0.01em;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: ${p => (p.length === 4 ? '20px' : '50px')};

  font-weight: 500;
  font-size: 16px;
  line-height: calc(22 / 16);
`;

export const ListItem = styled.li`
  position: relative;
`;

export const Span = styled.span`
  position: absolute;
  top: 0;
  left: 94px;

  @media ${p => p.theme.media.tablet} {
    left: 90px;
  }

  @media ${p => p.theme.media.desktop} {
    left: 87px;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  height: 88px;

  @media ${p => p.theme.media.tablet} {
    width: 248px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ButtonMore = styled.button`
  padding: 8px 28px;

  background-color: ${p => p.theme.colors.secondaryBackground};
  border: 2px solid ${p => p.theme.colors.accent};
  border-radius: 40px;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.accent};

  transform: scale(1);
  transition: transform 0.5s;
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
    background: linear-gradient(
      120deg,
      transparent,
      rgba(245, 146, 86, 0.9),
      transparent
    );
    transition: all 650ms;
    @media screen and (max-width: 767px) {
      visibility: hidden;
    }
  }
`;

export const ButtonDelete = styled(ButtonMore)`
  display: flex;
  justify-content: center;
  gap: 15px;
  border-color: ${p => p.theme.colors.hoverBtn};
  color: ${p => p.theme.colors.hoverBtn};

  :before {
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 97, 1, 0.9),
      transparent
    );
  }

  svg {
    display: block;
    width: 20px;
    height: 20px;
  }
`;

export const Category = styled.p`
  position: absolute;
  top: 20px;
  left: 0;

  width: 158px;
  height: 28px;
  padding: 6px 10px 7px 10px;
  text-align: center;

  border-radius: 0px 40px 40px 0px;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  overflow-x: hidden;
  overflow-y: hidden;

  font-weight: 500;
  font-size: 12px;
  line-height: calc(15 / 12);
  letter-spacing: 0.04em;
`;

export const LikeButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  padding: 0;

  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  color: ${p => p.theme.colors.accent};

  transform: scale(1);
  transition: transform 0.5s;
  overflow-x: hidden;
  overflow-y: hidden;
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

  svg {
    width: 28px;
    height: 28px;
  }
`;
