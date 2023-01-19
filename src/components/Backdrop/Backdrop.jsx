import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay } from './Backdrop.styled';

const modalRoot = document.querySelector('#modal-root');

export function Backdrop({ closeModalBtn, children }) {
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModalBtn(false);
    }
  };

  const handleBackdropDown = e => {
    if (e.currentTarget === e.target) {
      closeModalBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return createPortal(
    <Overlay onClick={handleBackdropDown}>{children}</Overlay>,
    modalRoot
  );
}
