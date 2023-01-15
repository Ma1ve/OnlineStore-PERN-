import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Context } from '..';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/counts';

import imgBg from '../assets/bg.webp';

const AppRouter = () => {
  const { user } = useContext(Context);
  console.log(user.isAuth);

  return (
    <div style={{ backgroundImage: `url(${imgBg})`, height: '100vh' }}>
      <Routes>
        {user.isAuth &&
          authRoutes.map(({ path, Component }) => <Route path={path} element={Component} />)}

        {publicRoutes.map(({ path, Component }) => (
          <Route path={path} element={Component} />
        ))}

        <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
