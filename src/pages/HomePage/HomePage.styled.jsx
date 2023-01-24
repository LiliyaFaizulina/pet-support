import styled from 'styled-components';
import portraitMobile from '../../images/homePage/portrait-mobile.png';
import portraitMobile2x from '../../images/homePage/portrait-mobile@2x.png';
import portraitTablet from '../../images/homePage/portrait-tablet.png';
import portraitTablet2x from '../../images/homePage/portrait-tablet@2x.png';
import portraitDesktop from '../../images/homePage/portrait-desktop.png';
import portraitDesktop2x from '../../images/homePage/portrait-desktop@2x.png';
import waveMobile from '../../images/homePage/wave-mobile.png';
import waveMobile2x from '../../images/homePage/wave-mobile@2x.png';
import waveTablet from '../../images/homePage/wave-tablet.png';
import waveTablet2x from '../../images/homePage/wave-tablet@2x.png';
import waveDesktop from '../../images/homePage/wave-desktop.png';
import waveDesktop2x from '../../images/homePage/wave@2x.png';
import union from '../../images/homePage/union.png';
import union2x from '../../images/homePage/union@2.png';

export const Heading = styled.h1`
  width: 280px;
  font-family: ${p => p.theme.fonts.mainFamily};
  font-weight: 700;
  font-size: 32px;
  line-height: calc(44 / 32);
  @media screen and (min-width: 768px) {
    width: 588px;
    font-size: 68px;
    line-height: calc(100 / 68);
  }
`;

export const Section = styled.section`
  padding-top: 60px;
  min-height: 543px;
  height: calc(100vh - 58px);
  background-repeat: no-repeat;
  background-position: bottom;
  background-image: url(${portraitMobile}), url(${waveMobile});
  background-size: 320px 337px, 100vw 470px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${portraitMobile2x}), url(${waveMobile2x});
  }

  @media screen and (min-width: 768px) {
    min-height: 1130px;
    padding-top: 88px;
    background-image: url(${portraitTablet}), url(${waveTablet});
    background-size: 645px 715px, 100vw 1033px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${portraitTablet2x}), url(${waveTablet2x});
    }
  }
  @media screen and (min-width: 1280px) {
    padding-top: 92px;
    padding-bottom: 408px;
    min-height: 704px;
    height: calc(100vh - 64px);
    background-image: url(${portraitDesktop}), url(${waveDesktop}),
      url(${union});
    background-size: 590px 640px, 100vw calc(100vw * 0.375), 92px 89px;
    background-position-x: calc(50% + 330px), center, calc(50% + 118px);
    background-position-y: bottom, bottom, calc(50% - 204px);

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${portraitDesktop2x}), url(${waveDesktop2x}),
        url(${union2x});
    }
  }
`;
