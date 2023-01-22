import addButton from '../../images/add-icon-large-medium.svg';
import { NoticeButton, ForNoticeButtonIcon, BoxForButton } from './AddNoticeButton.styled';

export const AddNoticeButton = ({ openModalBtn }) => {
  return (
    <BoxForButton>
      <NoticeButton type="button" onClick={() => openModalBtn(true)}>
        Add pet
        <ForNoticeButtonIcon>
          <img src={addButton} alt="add-icon" />
        </ForNoticeButtonIcon>
      </NoticeButton>
    </BoxForButton>
  );
};
