import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectFavoriteNotices } from 'redux/notices/noticesSelectors';
import { getFavoriteNotices } from 'redux/notices/noticesOperations';
import { NoticesCategoriesList } from 'components/NoticesCategoriesList/NoticesCategoriesList';

const FavoriteNoticesSubPage = ({
  filterText,
  openNoticeModal,
  openConfirmModal,
}) => {
  const dispatch = useDispatch();

  const notices = useSelector(selectFavoriteNotices);
  const filteredNotices = notices.filter(notice =>
    notice.title.toLowerCase().includes(filterText?.toLowerCase())
  );

  useEffect(() => {
    dispatch(getFavoriteNotices());
  }, [dispatch]);
  return (
    <>
      <NoticesCategoriesList
        notices={filterText ? filteredNotices : notices}
        deleteOwnNotice={openConfirmModal}
        openNoticeModal={openNoticeModal}
      />
    </>
  );
};

export default FavoriteNoticesSubPage;
