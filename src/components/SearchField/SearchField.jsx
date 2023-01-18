import { Input, Form, SearchButton } from './SearchField.styled';
import { FaSearch } from 'react-icons/fa';

export const SearchField = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" name="query" />
      <SearchButton type="submit" aria-label="Search icon">
        <FaSearch />
      </SearchButton>
    </Form>
  );
};
