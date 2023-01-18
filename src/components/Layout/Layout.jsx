import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from '../Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
