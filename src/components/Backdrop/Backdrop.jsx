import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWrapper } from './Backdrop.styled';

const modalRoot = document.querySelector('#modal-root');

export function Backdrop({ closeModal, children }) {
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const handleBackdropDown = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  });

  return createPortal(
    <Overlay
      onClick={handleBackdropDown}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ModalWrapper>{children}</ModalWrapper>
    </Overlay>,
    modalRoot
  );
}
