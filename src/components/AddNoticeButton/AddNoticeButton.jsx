import { useMedia } from 'react-use';
import { TfiPlus } from 'react-icons/tfi';
import { NoticeButton, BoxForButton } from './AddNoticeButton.styled';

export const AddNoticeButton = ({ openModalBtn }) => {
  const isMobile = useMedia('(max-width: 767px)');
  return (
    <BoxForButton>
      {!isMobile && 'Add pet'}
      <NoticeButton type="button" onClick={openModalBtn}>
        <TfiPlus />
        {isMobile && 'Add pet'}
      </NoticeButton>
    </BoxForButton>
  );
};
