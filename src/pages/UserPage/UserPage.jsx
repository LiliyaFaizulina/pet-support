import Logout from '../../components/Logout/Logout';
import PetsData from '../../components/PetsData/PetsData';

import { UserPageContainer, BoxUser } from './UserPage.styled';

import { UserData } from 'components/UserData/UserData';
import { useState } from 'react';
import { Backdrop } from 'components/Backdrop/Backdrop';
import { PetForm } from 'components/PetForm/PetForm';

const UserPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <UserPageContainer>
        <BoxUser>
          <UserData />
          <Logout />
        </BoxUser>
        <PetsData openModal={openModal} />
      </UserPageContainer>
      {isModalOpen && (
        <Backdrop closeModal={closeModal} isOpen={isModalOpen}>
          <PetForm closeModal={closeModal} />
        </Backdrop>
      )}
    </>
  );
};

export default UserPage;
