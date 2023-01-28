import { LoginForm } from 'components/AuthForms/LoginForm';
import { Backdrop } from 'components/Backdrop/Backdrop';
import { RestorePasswordForm } from 'components/RestorePasswordForm/RestorePasswordForm';
import { useState } from 'react';

const LoginPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <LoginForm openModal={openModal} />
      {isModalOpen && (
        <Backdrop closeModal={closeModal}>
          <RestorePasswordForm closeModal={closeModal} />
        </Backdrop>
      )}
    </>
  );
};

export default LoginPage;
