import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNotice } from 'redux/notices/noticesOperations';
import { selectCurrentNotice } from 'redux/notices/noticesSelectors';
import { transformCategoryName } from 'helpers/transformCategoryName';
import { transformDate } from 'helpers/transformDate';
import { Modal } from 'components/NoticeForm/NoticeForm.styled';

export const NoticeModal = ({ id, closeModal }) => {
  const dispatch = useDispatch();
  const notice = useSelector(selectCurrentNotice);

  useEffect(() => {
    dispatch(getNotice(id));
  }, [dispatch, id]);

  return (
    notice && (
      <Modal>
        <button type="button" onClick={closeModal}>
          x
        </button>
        <img src={notice.image} alt="pet" />
        <p>{transformCategoryName(notice.category)}</p>
        <h3>{notice.title}</h3>
        <ul>
          <li>Name: {notice.petName}</li>
          <li>Birthday: {transformDate(notice.dateOfBirth)}</li>
          <li>Breed: {notice.breed}</li>
          <li>Location: {notice.location}</li>
          <li>The sex: {notice.sex}</li>
          <li>Email: {notice.owner.email}</li>
          <li>Phone: {notice.owner.phone}</li>
          {notice.category === 'sell' && <li>Price: {notice.price} &#36;</li>}
          <li>Comments: {notice.comments}</li>
        </ul>
        <a href={`tel:${notice.owner.phone}`}>Contact</a>
        <button type="button">Add to </button>
      </Modal>
    )
  );
};
