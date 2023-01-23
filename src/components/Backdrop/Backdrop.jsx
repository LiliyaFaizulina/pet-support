import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay } from './Backdrop.styled';
import { AnimatePresence } from 'framer-motion';

const modalRoot = document.querySelector('#modal-root');

export function Backdrop({ closeModal, children, isOpen }) {
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
    <AnimatePresence>
      {isOpen && (
        <Overlay
          onClick={handleBackdropDown}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </Overlay>
      )}
    </AnimatePresence>,
    modalRoot
  );
}
