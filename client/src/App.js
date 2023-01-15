import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Context } from '.';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { check } from './http/userAPI';

import jwt_decode from 'jwt-decode';

console.log(process.env.REACT_APP_API_URL);

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        user.setIsAuth(true);
        user.setUser(jwt_decode(localStorage.getItem('token')));
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    // Spinner
    return (
      <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
