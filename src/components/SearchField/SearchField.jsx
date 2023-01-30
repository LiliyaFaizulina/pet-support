import { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { MdOutlineCancel } from 'react-icons/md';
import { Input, Form, SearchButton, RemoveButton } from './SearchField.styled';

export const SearchField = ({ onSubmit, onChange, setFilterText }) => {
  const [isFielld, setIsFielld] = useState();

  const fieldTheForm = e => {
    setIsFielld(e.currentTarget.query.value);
    onChange(e);
  };

  const onClickByRemove = e => {
    e.currentTarget.reset();
    setIsFielld(null);
    setFilterText('');
  };

  return (
    <Form onSubmit={onSubmit} onChange={fieldTheForm} onClick={onClickByRemove}>
      <Input type="text" name="query" placeholder="Search" />
      {!isFielld && (
        <SearchButton type="submit" aria-label="Search icon">
          <BiSearchAlt2 />
        </SearchButton>
      )}
      {isFielld && (
        <RemoveButton type="button" aria-label="Remove icon">
          <MdOutlineCancel />
        </RemoveButton>
      )}
    </Form>
  );
};
