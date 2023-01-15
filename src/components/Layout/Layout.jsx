import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <div>Тут буде heder з навігацією</div>
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
