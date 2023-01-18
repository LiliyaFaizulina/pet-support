import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NoticesSearch } from 'components/NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesCategoriesList } from 'components/NoticesCategoriesList/NoticesCategoriesList';
import { AddNoticeButton } from 'components/AddNoticeButton/AddNoticeButton';
import { selectNoticesByCategory } from 'redux/notices/noticesSelectors';
import { getNoticesByCategory } from 'redux/notices/noticesOperations';

const NoticesPage = () => {
  const [currentCategory, setCurrentCategory] = useState('sell');
  const notices = useSelector(selectNoticesByCategory);
  const dispatch = useDispatch();
  const { categoryName } = useParams();

  useEffect(() => {
    dispatch(getNoticesByCategory(categoryName));
  }, [dispatch, categoryName]);

  const changeCurrentCategory = e => setCurrentCategory(e.target.textContent);

  return (
    <>
      <NoticesSearch />
      <NoticesCategoriesNav changeCurrentCategory={changeCurrentCategory} />
      <NoticesCategoriesList
        notices={notices}
        currentCategory={currentCategory}
      />
      <AddNoticeButton />
    </>
  );
};

export default NoticesPage;
