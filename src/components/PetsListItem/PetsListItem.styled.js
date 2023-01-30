import styled from 'styled-components';
import { HiTrash } from 'react-icons/hi2';

export const PetItem = styled.div`
  &:not(:last-child) {
    margin-bottom: 20px;
    @media ${p => p.theme.media.desktop} {
      margin-bottom: 22px;
    }
  }
  padding: 20px;
  border-radius: ${p => p.theme.radii.mainBorderRadius};
  box-shadow: 7px 4px 14px ${p => p.theme.colors.shadowCard};
  background-color: ${p => p.theme.colors.secondaryBackground};
  @media ${p => p.theme.media.tablet} {
    display: flex;
    width: 704px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 821px;
    margin-bottom: 22px;
  }
`;

export const ImgPet = styled.img`
  margin-bottom: 20px;
  width: 240px;
  height: 240px;
  border-radius: 20px;
  background-color: #e1e1e1;
  @media ${p => p.theme.media.tablet} {
    margin-right: 32px;
    margin-bottom: 0;
    width: 161px;
    height: 161px;
  }
`;

export const BoxInfo = styled.div`
  position: relative;
  @media ${p => p.theme.media.tablet} {
    width: 471px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 580px;
  }
`;

export const DeleteBtm = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  right: 0;

  width: 24px;
  height: 24px;
  border: none;
  color: ${p => p.theme.colors.inputText};
  background-color: ${p => p.theme.colors.mainBackground};
  cursor: pointer;
  border-radius: ${p => p.theme.radii.round};
  border: none;
  @media ${p => p.theme.media.tablet} {
    width: 44px;
    height: 44px;
  }

  transition: color ${p => p.theme.transition};
  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
  svg {
    fill: currentColor;
  }
`;

export const DelIcon = styled(HiTrash)`
  width: 20px;
  height: 20px;
  fill: ${p => p.theme.colors.inputText};
  @media ${p => p.theme.media.tablet} {
    width: 24px;
    height: 24px;
  }
`;

export const InfoPet = styled.p`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.text};
  @media ${p => p.theme.media.tablet} {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;
export const Title = styled.span`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.heading};
  @media ${p => p.theme.media.tablet} {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;
