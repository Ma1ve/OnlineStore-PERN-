import React, { useContext } from 'react';

import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/counts';

const NavBar = observer(() => {
  const { user } = useContext(Context);

  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem('token');
  };

  return (
    <header className="w-full bg-black shadow-lg bg-white ">
      <div className="container mx-auto p-3 flex justify-between items-center text-xl">
        <div
          className="[text-shadow:_1px_10px_1px_rgb(0_0_0_/_40%)] drop-shadow-2xl  text-cyan-500 border-1 text-2xl hover: cursor-pointer font-bold tracking-wider"
          onClick={() => navigate(SHOP_ROUTE)}>
          MinecraftInfo
        </div>
        <div>
          {user.user.role === 'ADMIN' && (
            <button
              className=" drop-shadow-lg  text-white text-xl  shadow-lg shadow-blue-500/50 duration-300 rounded-lg p-1 px-4 ml-5 border-2  text-base font-bold bg-cyan-500 hover:bg-cyan-600"
              onClick={() => navigate(ADMIN_ROUTE)}>
              Admin panel
            </button>
          )}
          {!user.isAuth ? (
            <button
              className="drop-shadow-lg  text-white text-xl shadow-lg shadow-blue-500/50 duration-300 rounded-lg p-1 px-4 ml-5 border-2 text-base font-bold bg-cyan-500 hover:bg-cyan-600"
              onClick={() => navigate(LOGIN_ROUTE)}>
              Sign in
            </button>
          ) : (
            <button
              className="drop-shadow-lg  text-white text-xl shadow-lg shadow-blue-500/50 duration-300 rounded-lg p-1 px-4 ml-5 border-2 text-base font-bold bg-cyan-500 hover:bg-cyan-600 "
              onClick={() => logOut()}>
              Log out
            </button>
          )}
        </div>
      </div>
    </header>
  );
});

export default NavBar;
