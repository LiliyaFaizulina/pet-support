import { NavLink } from 'react-router-dom';

export const NoticesCategoriesNav = ({ changeCurrentCategory }) => {
  return (
    <ul>
      <li>
        <NavLink to="/notices/sell" onClick={changeCurrentCategory} end>
          sell
        </NavLink>
      </li>
      <li>
        <NavLink to="/notices/lost-found" onClick={changeCurrentCategory}>
          lost/found
        </NavLink>
      </li>
      <li>
        <NavLink to="/notices/for-free" onClick={changeCurrentCategory}>
          in good hands
        </NavLink>
      </li>

      <li>
        <NavLink to="/notices/favorite" onClick={changeCurrentCategory}>
          favorite ads
        </NavLink>
      </li>
      <li>
        <NavLink to="/notices/own" onClick={changeCurrentCategory}>
          my ads
        </NavLink>
      </li>
    </ul>
  );
};
