import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from '../Header/Header';
import Spinner from 'components/Spinner/Spinner';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
