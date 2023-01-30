import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectNotices } from 'redux/notices/noticesSelectors';
import { getNoticesByCategory } from 'redux/notices/noticesOperations';
import { NoticesCategoriesList } from 'components/NoticesCategoriesList/NoticesCategoriesList';

const NoticesSubPage = ({ filterText, openNoticeModal, openConfirmModal }) => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();

  const notices = useSelector(selectNotices);
  const filteredNotices = notices.filter(notice =>
    notice.title.toLowerCase().includes(filterText?.toLowerCase())
  );

  useEffect(() => {
    dispatch(getNoticesByCategory(categoryName));
  }, [dispatch, categoryName]);
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

export default NoticesSubPage;
