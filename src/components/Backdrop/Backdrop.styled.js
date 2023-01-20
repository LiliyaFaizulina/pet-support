import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  z-index: 1200;
  display: flex;
  align-items: center;
  justify-content: center;
`;
