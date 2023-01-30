import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectIsLoading } from 'redux/auth/authSelectors';
import { transformDate } from 'helpers/transformDate';

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
const PetsListItem = ({
  id,
  name,
  birthday,
  breed,
  comment,
  petAvatar,
  openDeleteModal,
}) => {
  const isDeleting = useSelector(selectIsLoading);

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
          onClick={() => openDeleteModal(id)}
        >
          <DelIcon />
        </DeleteBtm>
        <InfoPet>
          <Title>Name: </Title>
          {name}
        </InfoPet>
        <InfoPet>
          <Title>Date of birth: </Title>
          {transformDate(birthday)}
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
  openDeleteModal: PropTypes.func,
};
