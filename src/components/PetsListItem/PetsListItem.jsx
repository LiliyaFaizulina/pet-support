import PropTypes from 'prop-types';
// import { useDeletePetMutation } from 'redux/userApi';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoading } from 'redux/auth/authSelectors';
import { deletePet } from 'redux/auth/authOperations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import devaultIcon from '../../images/default-icon-pets.png';
import {
  PetItem,
  InfoPet,
  Title,
  ImgPet,
  BoxInfo,
  DeleteBtm,
  DelIcon,
} from './PetsListItem.styled';
const PetsListItem = ({ id, name, birthday, breed, comment, petAvatar }) => {
  const isDeleting = useSelector(selectIsLoading);

  isDeleting && toast.success(`😿 ${name} was removed`);
  const dispatch = useDispatch();
  const removePet = id => {
    dispatch(deletePet(id));
  };

  return (
    <PetItem>
      <ImgPet
        src={petAvatar ? petAvatar : devaultIcon}
        alt={`${name}`}
      ></ImgPet>
      <BoxInfo>
        <DeleteBtm
          type="button"
          disabled={isDeleting}
          onClick={() => removePet(id)}
        >
          <DelIcon />
        </DeleteBtm>
        <InfoPet>
          <Title>Name: </Title>
          {name}
        </InfoPet>
        <InfoPet>
          <Title>Date of birth: </Title>
          {birthday}
        </InfoPet>
        <InfoPet>
          <Title>Breed: </Title>
          {breed}
        </InfoPet>
        <InfoPet>
          <Title>Comments: </Title>
          {comment}
        </InfoPet>
      </BoxInfo>
      <ToastContainer />
    </PetItem>
  );
};

export default PetsListItem;

PetsListItem.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
