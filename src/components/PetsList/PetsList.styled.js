import styled from "styled-components";

export const BoxNotFoundPet = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 200px;

  border-radius: ${p => p.theme.radii.mainBorderRadius};
  box-shadow: 7px 4px 14px ${p => p.theme.colors.shadowCard};
  background-color: ${p => p.theme.colors.secondaryBackground};

  font-size: ${p => p.theme.fontSizes.ml};

  @media ${p => p.theme.media.tablet} {
    width: 704px;
    height: 200px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 821px;
  }
`;