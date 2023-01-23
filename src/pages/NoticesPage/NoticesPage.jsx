import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NoticesSearch } from 'components/NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesCategoriesList } from 'components/NoticesCategoriesList/NoticesCategoriesList';
import { AddNoticeButton } from 'components/AddNoticeButton/AddNoticeButton';
import { Backdrop } from 'components/Backdrop/Backdrop';
import { NoticeForm } from 'components/NoticeForm/NoticeForm';
import { GiCat } from 'react-icons/gi';
import {
  selectError,
  selectIsLoading,
  selectNoticesByCategory,
} from 'redux/notices/noticesSelectors';
import {
  deleteNotice,
  getNoticesByCategory,
} from 'redux/notices/noticesOperations';
import { NoticeModal } from 'components/NoticeModal/NoticeModal';
import { FlexContainer } from 'components/AddNoticeButton/AddNoticeButton.styled';
import { selectIsAuth } from 'redux/auth/authSelectors';
import { toast } from 'react-toastify';
import ScrollToTop from 'react-scroll-to-top';
import { CustomizedContainer } from './NoticesPage.styled';

const NoticesPage = () => {
  const [filterText, setFilterText] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [noticeToShow, setNoticeToShow] = useState('');

  const notices = useSelector(selectNoticesByCategory);
  const isAuth = useSelector(selectIsAuth);
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

  const openAddNoticeModal = () => {
    if (!isAuth) {
      toast.info('You should be logged in to add new notice', {
        icon: <GiCat />,
      });
      return;
    }
    setOpenModal(true);
  };

  const openNoticeModal = id => {
    setNoticeToShow(id);
    setOpenModal(true);
  };

  return (
    <CustomizedContainer>
      <NoticesSearch
        onSubmit={onSearchSubmit}
        onChange={onSearchChange}
        setFilterText={() => setFilterText()}
      />
      <FlexContainer>
        <NoticesCategoriesNav />
        <AddNoticeButton openModalBtn={openAddNoticeModal} />
      </FlexContainer>
      {error && <p>Ooops... something Wrong</p>}
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <NoticesCategoriesList
          notices={filterText ? filteredNotices : notices}
          deleteOwnNotice={deleteOwnNotice}
          openNoticeModal={openNoticeModal}
        />
      )}
      <ScrollToTop smooth color="#F59256" />
      {openModal && (
        <Backdrop closeModal={closeModal} isOpen={openModal}>
          {Boolean(noticeToShow) ? (
            <NoticeModal closeModal={closeModal} id={noticeToShow} />
          ) : (
            <NoticeForm closeModal={closeModal} />
          )}
        </Backdrop>
      )}
    </CustomizedContainer>
  );
};

export default NoticesPage;
