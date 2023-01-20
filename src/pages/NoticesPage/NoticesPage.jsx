import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NoticesSearch } from 'components/NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesCategoriesList } from 'components/NoticesCategoriesList/NoticesCategoriesList';
import { AddNoticeButton } from 'components/AddNoticeButton/AddNoticeButton';
import { Backdrop } from 'components/Backdrop/Backdrop';
import { NoticeForm } from 'components/NoticeForm/NoticeForm';
import {
  selectError,
  selectIsLoading,
  selectNoticesByCategory,
} from 'redux/notices/noticesSelectors';
import {
  deleteNotice,
  getNoticesByCategory,
} from 'redux/notices/noticesOperations';
import { Container } from 'utils/GlobalStyle';
import { NoticeModal } from 'components/NoticeModal/NoticeModal';

const NoticesPage = () => {
  const [filterText, setFilterText] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [noticeToShow, setNoticeToShow] = useState('');

  const notices = useSelector(selectNoticesByCategory);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const { categoryName } = useParams();

  useEffect(() => {}, [notices]);

  useEffect(() => {
    dispatch(getNoticesByCategory(categoryName));
  }, [dispatch, categoryName]);

  const onSearchSubmit = e => {
    e.preventDefault();
    setFilterText(e.target.query.value);
  };

  const onSearchChange = e => {
    setFilterText(e.currentTarget.query.value);
  };

  const filteredNotices = notices.filter(notice =>
    notice.title.toLowerCase().includes(filterText?.toLowerCase())
  );

  const deleteOwnNotice = id => {
    dispatch(deleteNotice(id));
  };

  const closeModal = () => {
    setOpenModal(false);
    setNoticeToShow('');
  };

  const openNoticeModal = id => {
    setNoticeToShow(id);
    setOpenModal(true);
  };

  return (
    <Container>
      <NoticesSearch
        onSubmit={onSearchSubmit}
        onChange={onSearchChange}
        setFilterText={() => setFilterText()}
      />
      <NoticesCategoriesNav />
      {error && <p>Ooops... something Wrong</p>}
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <>
          <NoticesCategoriesList
            notices={filterText ? filteredNotices : notices}
            deleteOwnNotice={deleteOwnNotice}
            openNoticeModal={openNoticeModal}
          />
          <AddNoticeButton openModalBtn={setOpenModal} />
        </>
      )}
      {openModal && (
        <Backdrop closeModal={closeModal}>
          {Boolean(noticeToShow) ? (
            <NoticeModal closeModal={closeModal} id={noticeToShow} />
          ) : (
            <NoticeForm closeModalBtn={setOpenModal} />
          )}
        </Backdrop>
      )}
    </Container>
  );
};

export default NoticesPage;
