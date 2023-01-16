import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Exit, ExitIcon, ModalWindow, MyBackdrop } from './Modal.styled';
import { useDispatch } from 'react-redux';
import { noticeActions } from 'redux/notices/noticeSlice'; // нужно переписывать
import { userActions } from 'redux/user/userSlice';

const modalRoot = document.querySelector('#modal-root');

function Modal({ tabletNoStandartWidth, modalName, children, ...props }) {
  const dispatch = useDispatch();

  const handleClose = () => {
    switch (modalName) {
      case 'modalViewNotice':
        return dispatch(noticeActions.changeModalViewNotice());

      case 'modalAddNotice':
        return dispatch(noticeActions.changeModalAddNotice());

      case 'modalAddPets':
        return dispatch(userActions.changeModalAddPets());

      default:
        break;
    }
  };

  useEffect(() => {
    const handleEscapeKey = e => {
      if (e.code === 'Escape') {
        handleClose(e);
      }
    };
    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  });

  const onBackdrop = e => {
    if (e.currentTarget === e.target) {
      handleClose(e);
    }
  };

  return createPortal(
    <MyBackdrop onClick={onBackdrop}>
      <ModalWindow tabletNoStandartWidth={tabletNoStandartWidth} {...props}>
        <Exit onClick={handleClose}>
          <ExitIcon />
        </Exit>
        {children}
      </ModalWindow>
    </MyBackdrop>,
    modalRoot
  );
}

Modal.propTypes = {
  modalName: PropTypes.string,
};

export default Modal;
