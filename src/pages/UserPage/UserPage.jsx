import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { deletePet } from 'redux/auth/authOperations';
import Logout from '../../components/Logout/Logout';
import PetsData from '../../components/PetsData/PetsData';
import { UserData } from 'components/UserData/UserData';
import { Backdrop } from 'components/Backdrop/Backdrop';
import { PetForm } from 'components/PetForm/PetForm';
import { ConfirmModal } from 'components/ConfirmModal/ConfirmModal';
import Refresh from 'components/Refresh/Refresh';
import { RefreshPassForm } from 'components/AuthForms/RefreshPassForm';
import { UserPageContainer, BoxUser } from './UserPage.styled';

const UserPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [petToDelete, setPetToDelete] = useState('');
  const [isRefreshOpen, setIsRefreshOpen] = useState(false);

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

  const openRefreshModal = () => {
    setIsModalOpen(true);
    setIsRefreshOpen(true);
  };

  const openDeleteModal = id => {
    setIsModalOpen(true);
    setPetToDelete(id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsLogoutOpen(false);
    setPetToDelete('');
    setIsRefreshOpen(false);
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
          <Refresh openModal={openRefreshModal} />
        </BoxUser>
        <PetsData openModal={openModal} openDeleteModal={openDeleteModal} />
      </UserPageContainer>
      {isModalOpen && (
        <Backdrop closeModal={closeModal}>
          {!isLogoutOpen && !petToDelete && !isRefreshOpen && (
            <PetForm closeModal={closeModal} />
          )}
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
          {isRefreshOpen && <RefreshPassForm close={closeModal} />}
        </Backdrop>
      )}
    </>
  );
};

export default UserPage;
