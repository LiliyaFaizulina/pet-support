import { lazy, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PrivateRoute } from 'HOCs/PrivateRoute';
import { PublicRoute } from 'HOCs/PublicRoute';

import { getUser } from 'redux/auth/authOperations';
import { deleteNotice } from 'redux/notices/noticesOperations';

import Layout from './Layout/Layout';
import NoticesSubPage from 'pages/NoticesSubPage/NoticesSubPage';
import OwnNoticesSubPage from 'pages/OwnNoticesSubPage/OwnNoticesSubPage';
import FavoriteNoticesSubPage from 'pages/FavoriteNoticesSubPage/FavoriteNoticesSubPage';

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
  const dispatch = useDispatch();
  const [filterText, setFilterText] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [noticeToShow, setNoticeToShow] = useState('');
  const [noticeToDelete, setNoticeToDelete] = useState('');

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const openNoticeModal = id => {
    setNoticeToShow(id);
    setOpenModal(true);
  };

  const openConfirmModal = id => {
    setOpenModal(true);
    setNoticeToDelete(id);
  };

  const deleteOwnNotice = id => {
    dispatch(deleteNotice(id));
    setOpenModal(false);
    setNoticeToDelete('');
  };

  const closeModal = () => {
    setOpenModal(false);
    setNoticeToShow('');
    setNoticeToDelete('');
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute restricted>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute restricted>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="news"
          element={
            <PublicRoute>
              <NewsPage />
            </PublicRoute>
          }
        />
        <Route
          path="friends"
          element={
            <PublicRoute>
              <OurFriendsPage />
            </PublicRoute>
          }
        />
        <Route
          path="notices"
          element={
            <PublicRoute>
              <NoticesPage
                setFilterText={setFilterText}
                setOpenModal={setOpenModal}
                openModal={openModal}
                noticeToShow={noticeToShow}
                noticeToDelete={noticeToDelete}
                deleteOwnNotice={deleteOwnNotice}
                closeModal={closeModal}
              />
            </PublicRoute>
          }
        >
          <Route
            path=":categoryName"
            element={
              <PublicRoute>
                <NoticesSubPage
                  filterText={filterText}
                  openNoticeModal={openNoticeModal}
                  openConfirmModal={openConfirmModal}
                />
              </PublicRoute>
            }
          />
          <Route
            path="favorite"
            element={
              <PrivateRoute>
                <FavoriteNoticesSubPage
                  filterText={filterText}
                  openNoticeModal={openNoticeModal}
                  openConfirmModal={openConfirmModal}
                />
              </PrivateRoute>
            }
          />
          <Route
            path="own"
            element={
              <PrivateRoute>
                <OwnNoticesSubPage
                  filterText={filterText}
                  openNoticeModal={openNoticeModal}
                  openConfirmModal={openConfirmModal}
                />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="user"
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
