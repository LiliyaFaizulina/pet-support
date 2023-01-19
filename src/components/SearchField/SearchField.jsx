import { Input, Form, SearchButton, RemoveButton } from './SearchField.styled';
import { FaSearch, FaTimesCircle } from 'react-icons/fa';


import { useState } from 'react';

export const SearchField = ({ onSubmit, onChange, setFilterText }) => {
  const [isFielld, setIsFielld] = useState();

  const fieldTheForm = evt => {
    setIsFielld(evt.currentTarget.query.value);
    onChange(evt);
  };

  const onClickByRemove = e => {
    e.currentTarget.reset();
    setIsFielld(null);
    setFilterText('')
  };

  return (
    <Form
      onSubmit={onSubmit}
      onChange={e => fieldTheForm(e)}
      onClick={e => onClickByRemove(e)}
    >
      <Input type="text" name="query" placeholder='Search'/>
      {!isFielld && (
        <SearchButton type="submit" aria-label="Search icon">
          <FaSearch />
        </SearchButton>
      )}
      {isFielld && (
        <RemoveButton type="button" aria-label="Remove icon">
          <FaTimesCircle />
        </RemoveButton>
      )}
    </Form>
  );
};
