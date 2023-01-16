import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Context } from '..';
import { login, registration } from '../http/userAPI';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/counts';

const Auth = observer(() => {
  const { user } = useContext(Context);

  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLogin = location.pathname === LOGIN_ROUTE;

  const onSubmit = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
        console.log(data);
      } else {
        data = await registration(email, password);

        console.log(data);
      }

      user.setUser(data);
      user.setIsAuth(true);

      navigate(SHOP_ROUTE);
    } catch (error) {
      console.log(error);
      // alert(error.response.data.message);
    }
  };

  return (
    <div className="container mx-auto flex justify-center items-center h-screen ">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
        <div className="mb-4">
          <div className="text-center text-2xl text-gray-700 text-sm font-bold">
            {isLogin ? 'Login' : 'Registration'}
          </div>
          <label className="text-md block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>

          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="text-md lock text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input
            type="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onSubmit}>
            {isLogin ? 'Sign In' : 'Create'}
          </button>

          {!isLogin ? (
            <NavLink
              to={LOGIN_ROUTE}
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Have an account?
            </NavLink>
          ) : (
            <NavLink
              to={REGISTRATION_ROUTE}
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              No account?
            </NavLink>
          )}
        </div>
      </form>
    </div>
  );
});

export default Auth;
