import { RefreshBtn, RefreshIcon } from './Refresh.styled';

const Refresh = ({ openModal }) => {
  return (
    <RefreshBtn onClick={openModal}>
      <RefreshIcon />
      Edit pass
    </RefreshBtn>
  );
};

export default Refresh;
