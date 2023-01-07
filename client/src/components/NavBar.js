import React, { useContext } from 'react';
import { Context } from '../index';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/esm/NavLink';
import Nav from 'react-bootstrap/esm/Nav';

import { SHOP_ROUTE } from '../utils/counts';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
  const { user } = useContext(Context);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
            КупиДевайс
          </NavLink>
          {user.isAuth ? (
            <Nav className="ml-auto" style={{ color: 'white' }}>
              <Button variant="outline-light">Админ панель</Button>
              <Button
                variant="outline-light"
                onClick={() => user.setIsAuth(false)}
                className="ml-2"
                style={{ marginLeft: 10 }}>
                Выйти
              </Button>
            </Nav>
          ) : (
            <Nav className="ml-auto" style={{ color: 'white' }}>
              <Button variant="outline-light" onClick={() => user.setIsAuth(true)}>
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
