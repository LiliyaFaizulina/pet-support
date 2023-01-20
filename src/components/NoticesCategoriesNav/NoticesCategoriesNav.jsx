import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/authSelectors';
import { List, Item, LinkNav } from './NoticesCategoriesNav.styled';

export const NoticesCategoriesNav = () => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <List>
      <Item>
        <LinkNav to="/notices/lost-found">lost/found</LinkNav>
      </Item>
      <Item>
        <LinkNav to="/notices/for-free">in good hands</LinkNav>
      </Item>
      <Item>
        <LinkNav to="/notices/sell" end>
          sell
        </LinkNav>
      </Item>

      {isAuth && (
        <>
          <Item>
            <LinkNav to="/notices/favorite">favorite ads</LinkNav>
          </Item>
          <Item>
            <LinkNav to="/notices/own">my ads</LinkNav>
          </Item>
        </>
      )}
    </List>
  );
};
