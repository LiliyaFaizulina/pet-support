import { Input, Form, SearchButton, RemoveButton } from './SearchField.styled';
import { FaSearch } from 'react-icons/fa';
import { FaTimesCircle } from 'react-icons/fa';

import { useState } from 'react';

export const SearchField = ({ onSubmit }) => {
  const [isFielld, setIsFielld] = useState();

  const fieldTheForm = evt => {
    setIsFielld(evt.currentTarget.query.value);
  };

  const onClickByRemove = e => {
    e.currentTarget.reset();
    setIsFielld(null);
  };

  return (
    <Form
      onSubmit={onSubmit}
      onChange={e => fieldTheForm(e)}
      onClick={e => onClickByRemove(e)}
    >
      <Input type="text" name="query" />
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
