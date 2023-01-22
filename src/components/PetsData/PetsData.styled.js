import styled from 'styled-components';
import Button from 'components/Button';

export const BoxPet = styled.section`
  width: 100%;
  @media ${p => p.theme.media.tablet} {
    padding-left: ${p => p.theme.space[5]}px;
  }
  @media ${p => p.theme.media.desktop} {
    padding-left: ${p => p.theme.space[0]}px;
  }
`;

export const BoxTitlePet = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
  @media ${p => p.theme.media.tablet} {
    margin-bottom: 15px;
  }
`;

export const TitlePet = styled.h2`
  color: ${p => p.theme.colors.heading};
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes.nl};
  letter-spacing: 0.04em;
  @media ${p => p.theme.media.tablet} {
    font-size: ${p => p.theme.fontSizes.mll};
  }
`;

export const BoxBtn = styled.div`
  display: inline-flex;
  align-items: center;

  @media ${p => p.theme.media.desktop} {
    display: inline-flex;
  }
`;

export const TitleBtn = styled.p`
  margin-right: 15px;

  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes.nl};
`;

export const BtnAddPet = styled(Button)`
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;

  font-size: 50px;
  border-radius: ${p => p.theme.radii.round};
`;

export const BoxPetItem = styled.div``;
