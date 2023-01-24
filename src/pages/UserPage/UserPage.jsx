import Logout from '../../components/Logout/Logout';
import PetsData from '../../components/PetsData/PetsData';

import { UserPageContainer, BoxUser } from './UserPage.styled';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { deletePet } from 'redux/auth/authOperations';
import { UserData } from 'components/UserData/UserData';
import { Backdrop } from 'components/Backdrop/Backdrop';
import { PetForm } from 'components/PetForm/PetForm';
import { ConfirmModal } from 'components/ConfirmModal/ConfirmModal';

const UserPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [petToDelete, setPetToDelete] = useState('');

  const dispatch = useDispatch();

  const removePet = id => {
    dispatch(deletePet(id));
    setIsModalOpen(false);
    setPetToDelete('');
  };

  const handleLogOut = () => {
    dispatch(logout());
  };

  const openLogoutModal = () => {
    setIsModalOpen(true);
    setIsLogoutOpen(true);
  };

  const openDeleteModal = id => {
    setIsModalOpen(true);
    setPetToDelete(id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsLogoutOpen(false);
    setPetToDelete('');
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <UserPageContainer>
        <BoxUser>
          <UserData />
          <Logout openModal={openLogoutModal} />
        </BoxUser>
        <PetsData openModal={openModal} openDeleteModal={openDeleteModal} />
      </UserPageContainer>
      {isModalOpen && (
        <Backdrop closeModal={closeModal}>
          {!isLogoutOpen && !petToDelete && <PetForm closeModal={closeModal} />}
          {isLogoutOpen && (
            <ConfirmModal
              text="exit"
              close={closeModal}
              handleClick={handleLogOut}
            />
          )}
          {!!petToDelete && (
            <ConfirmModal
              text="delete your pet"
              close={closeModal}
              handleClick={removePet}
              id={petToDelete}
            />
          )}
        </Backdrop>
      )}
    </>
  );
};

export default UserPage;
