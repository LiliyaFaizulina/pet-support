export const AddNoticeButton = ({ openModalBtn }) => {
  return (
    <button type="button" onClick={() => openModalBtn(true)}>
      Add pet
    </button>
  );
};
