import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NoticesSearch } from 'components/NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesCategoriesList } from 'components/NoticesCategoriesList/NoticesCategoriesList';
import { AddNoticeButton } from 'components/AddNoticeButton/AddNoticeButton';
import { Backdrop } from 'components/Backdrop/Backdrop';
import { NoticeForm } from 'components/NoticeForm/NoticeForm';
import { selectNoticesByCategory } from 'redux/notices/noticesSelectors';
import { getNoticesByCategory } from 'redux/notices/noticesOperations';
import { Container } from 'utils/GlobalStyle';

const NoticesPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const notices = useSelector(selectNoticesByCategory);
  const dispatch = useDispatch();
  const { categoryName } = useParams();

  useEffect(() => {
    dispatch(getNoticesByCategory(categoryName));
  }, [dispatch, categoryName]);

  return (
    <Container>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <NoticesCategoriesList notices={notices} />
      <AddNoticeButton openModalBtn={setOpenModal} />
      {openModal && (
        <Backdrop closeModalBtn={setOpenModal}>
          <NoticeForm closeModalBtn={setOpenModal} />
        </Backdrop>
      )}
    </Container>
  );
};

export default NoticesPage;
