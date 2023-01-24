import { Card, BtnContainer } from 'components/NoticeModal/NoticeModal.styled';
import { Button, Notification } from './ConfirmModal.styled';
import { MdPets } from 'react-icons/md';
export const ConfirmModal = ({ text, close, handleClick, id }) => {
  return (
    <Card>
      <Notification>
        <MdPets /> Are you sure you want to {text}?
      </Notification>
      <BtnContainer>
        <Button type="button" onClick={close}>
          Cancel
        </Button>
        <Button type="button" onClick={() => handleClick(id)} filling>
          Confirm
        </Button>
      </BtnContainer>
    </Card>
  );
};
