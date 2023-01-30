import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectOwnNotices } from 'redux/notices/noticesSelectors';
import { getOwnNotices } from 'redux/notices/noticesOperations';
import { NoticesCategoriesList } from 'components/NoticesCategoriesList/NoticesCategoriesList';

const OwnNoticesSubPage = ({
  filterText,
  openNoticeModal,
  openConfirmModal,
}) => {
  const dispatch = useDispatch();

  const notices = useSelector(selectOwnNotices);
  const filteredNotices = notices.filter(notice =>
    notice.title.toLowerCase().includes(filterText?.toLowerCase())
  );

  useEffect(() => {
    dispatch(getOwnNotices());
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

export default OwnNoticesSubPage;
