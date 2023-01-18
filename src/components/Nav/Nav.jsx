import { NaviList, NaviLink } from './Nav.styled';

export const Nav = () => {
  return (
    <nav>
      <NaviList>
        <li>
          <NaviLink to="/news">News</NaviLink>
        </li>
        <li>
          <NaviLink to="/notices/sell">Find pet</NaviLink>
        </li>
        <li>
          <NaviLink to="/friends">Our friends</NaviLink>
        </li>
      </NaviList>
    </nav>
  );
};
