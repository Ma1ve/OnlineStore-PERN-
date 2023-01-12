import React, { useContext } from 'react';
import { Context } from '../index';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/esm/NavLink';
import Nav from 'react-bootstrap/esm/Nav';

import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/counts';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

const NavBar = observer(() => {
  const { user } = useContext(Context);

  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    console.log(user.user);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink style={{ color: 'white' }} onClick={() => navigate(SHOP_ROUTE)}>
            КупиДевайс
          </NavLink>
          {user.isAuth ? (
            <Nav className="ml-auto" style={{ color: 'white' }}>
              <Button variant="outline-light" onClick={() => navigate(ADMIN_ROUTE)}>
                Админ панель
              </Button>
              <Button
                variant="outline-light"
                /* onClick={() => navigate(LOGIN_ROUTE)} */
                onClick={() => logOut()}
                className="ms-2">
                Выйти
              </Button>
            </Nav>
          ) : (
            <Nav className="ml-auto" style={{ color: 'white' }}>
              <Button variant="outline-light" onClick={() => navigate(LOGIN_ROUTE)}>
                Авторизация
              </Button>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
});

export default NavBar;
