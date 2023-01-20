import { PageTitle } from 'components/PageTitle/PageTitle';
import { SearchField } from 'components/SearchField/SearchField';

export const NoticesSearch = ({ onSubmit, onChange, setFilterText }) => {
  return (
    <>
      <PageTitle text="Find your favorite pet" />
      <SearchField
        onSubmit={onSubmit}
        onChange={onChange}
        setFilterText={setFilterText}
      />
    </>
  );
};
