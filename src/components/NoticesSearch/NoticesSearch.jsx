import { PageTitle } from 'components/PageTitle/PageTitle';
import { SearchField } from 'components/SearchField/SearchField';

export const NoticesSearch = () => {
  const onSubmit = () => {};

  return (
    <>
      <PageTitle text="Find your favorite pet" />
      <SearchField onSubmit={onSubmit} />
    </>
  );
};
