import styled from 'styled-components';

export const BoxForButton = styled.div`
  @media (max-width: 767px) {
    padding: 18px;
    width: 80px;
    height: 80px;
    border-radius: ${p => p.theme.radii.round};
    background-color: ${p => p.theme.colors.accent};
  }
`;

export const NoticeButton = styled.button`
  @media (max-width: 767px) {
    flex-direction: column-reverse;
    font-size: ${p => p.theme.fontSizes.xs};
    color: ${p => p.theme.colors.secondaryBackground};
    background-color: ${p => p.theme.colors.accent};
  }
  @media (min-width: 768px) {
    font-size: 20px;
    background-color: ${p => p.theme.colors.mainBackground};
  }

  display: flex;
  align-items: center;
  padding: 0px;
  font-weight: ${p => p.theme.fontWeights.heading};
  line-height: ${p => p.theme.lineHeights.heading};
`;

export const ForNoticeButtonIcon = styled.div`
  @media (min-width: 768px) {
    margin-left: 12px;
    padding: 10px;
    width: 44px;
    height: 44px;
    border-radius: ${p => p.theme.radii.round};
    background-color: ${p => p.theme.colors.accent};
  }
`;
