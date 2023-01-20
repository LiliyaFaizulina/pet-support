import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/auth/authSelectors';
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
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  const removePet = async id => {
    dispatch(deletePet(id));
    (await error)
      ? toast.warning(`😿 ${name} was not removed`)
      : toast.success(`😿 ${name} was removed`);
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
