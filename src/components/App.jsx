import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Layout from './Layout/Layout';
import { PrivatRoute } from "./ProtectedRoutes";

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const NewsPage = lazy(() => import('../pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage/NoticesPage'));
const OurFriendsPage = lazy(() =>
  import('../pages/OurFriendsPage/OurFriendsPage')
);
const UserPage = lazy(() => import('../pages/UserPage/UserPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="friends" element={<OurFriendsPage />} />
        <Route path="notices/:categoryName" element={<NoticesPage />} />
        
        <Route path="user" element={<PrivatRoute path="/login"><UserPage /></PrivatRoute>} />
      </Route>
    </Routes>
  );
};
