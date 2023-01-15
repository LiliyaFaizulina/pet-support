import { NoticesSearch } from 'components/NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesCategoriesList } from 'components/NoticesCategoriesList/NoticesCategoriesList';
import { AddNoticeButton } from 'components/AddNoticeButton/AddNoticeButton';

const NoticesPage = () => {
  return (
    <>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <NoticesCategoriesList />
      <AddNoticeButton />
    </>
  );
};

export default NoticesPage;
