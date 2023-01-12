import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div>Тут буде heder з навігацією</div>
      <Outlet />
    </>
  );
};

export default Layout;
