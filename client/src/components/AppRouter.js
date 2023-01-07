import React, { useContext } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/counts';

import { Context } from '../index';

const AppRouter = () => {
  // const isAuth = true;

  const { user } = useContext(Context);

  console.log(user);

  return (
    <Routes>
      {user.isAuth === true &&
        authRoutes.map(({ path, Components }) => <Route path={path} element={Components} />)}

      {publicRoutes.map(({ path, Components }) => (
        <Route path={path} element={Components} />
      ))}

      <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
