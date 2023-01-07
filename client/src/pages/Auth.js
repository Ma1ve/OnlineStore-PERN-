import React from 'react';

import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/esm/Form';
import Card from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/esm/Row';
// import NavLink from 'react-bootstrap/esm/NavLink';

import { NavLink, useLocation } from 'react-router-dom';

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/counts';

const Auth = () => {
  const location = useLocation();

  const isLogin = location.pathname === LOGIN_ROUTE;

  console.log(location.pathname);

  return (
    <div>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: window.innerHeight - 200 }}>
        <Card style={{ width: 600 }} className="p-5">
          <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
          <Form className="d-flex flex-column">
            <Form.Control className="mt-3" placeholder="Введите ваш email..." />
            <Form.Control className="mt-3" placeholder="Введите ваш пароль" />
            <Row style={{ display: 'flex' }} className="d-flex justify-content-between mt-3">
              {isLogin ? (
                <div style={{ display: 'flex' }}>
                  Нет аккаунта?
                  <NavLink to={REGISTRATION_ROUTE} className="ms-2">
                    Зарегистрируйся!
                  </NavLink>
                </div>
              ) : (
                <div style={{ display: 'flex' }}>
                  Есть аккаунт?
                  <NavLink to={LOGIN_ROUTE} className="ms-2">
                    Войдите!
                  </NavLink>
                </div>
              )}
              <Button variant="outline-success" className="mt-3">
                {isLogin ? 'Войти' : 'Регистрация'}
              </Button>
            </Row>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default Auth;
