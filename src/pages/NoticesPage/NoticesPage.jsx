import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GiCat } from 'react-icons/gi';
import { toast } from 'react-toastify';
import { AnimatePresence } from 'framer-motion';

import { selectIsAuth } from 'redux/auth/authSelectors';
import { selectError, selectIsLoading } from 'redux/notices/noticesSelectors';
import { NoticesSearch } from 'components/NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import { AddNoticeButton } from 'components/AddNoticeButton/AddNoticeButton';
import { Backdrop } from 'components/Backdrop/Backdrop';
import { NoticeForm } from 'components/NoticeForm/NoticeForm';
import { NoticeModal } from 'components/NoticeModal/NoticeModal';
import { FlexContainer } from 'components/AddNoticeButton/AddNoticeButton.styled';
import { ConfirmModal } from 'components/ConfirmModal/ConfirmModal';
import Spinner from 'components/Spinner/Spinner';
import { ErrorText } from 'components/NoMatchesText/NoMatchesText.styled';
import { CustomizedContainer } from './NoticesPage.styled';
import { Scroll } from 'pages/NewsPage/NewsPage.styled';

const NoticesPage = ({
  setFilterText,
  openModal,
  noticeToShow,
  noticeToDelete,
  deleteOwnNotice,
  setOpenModal,
  closeModal,
}) => {
  const isAuth = useSelector(selectIsAuth);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const onSearchSubmit = e => {
    e.preventDefault();
    setFilterText(e.target.query.value);
  };

  const onSearchChange = e => {
    setFilterText(e.currentTarget.query.value);
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
      {error && <ErrorText>Ooops... something Wrong</ErrorText>}
      {isLoading && <Spinner />}
      {!isLoading && <Outlet />}
      <Scroll smooth color="#F59256" />
      {openModal && (
        <AnimatePresence>
          <Backdrop closeModal={closeModal}>
            {!!noticeToShow && (
              <NoticeModal closeModal={closeModal} id={noticeToShow} />
            )}
            {!!noticeToDelete && (
              <ConfirmModal
                text="delete your notice"
                close={closeModal}
                handleClick={deleteOwnNotice}
                id={noticeToDelete}
              />
            )}
            {!noticeToDelete && !noticeToShow && (
              <NoticeForm closeModal={closeModal} />
            )}
          </Backdrop>
        </AnimatePresence>
      )}
    </CustomizedContainer>
  );
};

export default NoticesPage;
