import React, { useContext, useState } from 'react';

import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/esm/Form';
import Card from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/esm/Row';
// import NavLink from 'react-bootstrap/esm/NavLink';

import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/counts';
import { login, registration } from '../http/userAPI';

import { observer } from 'mobx-react-lite';

import { Context } from '../index';

const Auth = observer(() => {
  let { user } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    try {
      let data;

      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }

      user.setUser(data);
      user.setIsAuth(true);

      console.log(user.user);

      navigate(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <div>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: window.innerHeight - 200 }}>
        <Card style={{ width: 600 }} className="p-5">
          <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
          <Form className="d-flex flex-column">
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-3"
              placeholder="Введите ваш email..."
            />
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-3"
              placeholder="Введите ваш пароль"
              type="password"
            />
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
              <Button variant="outline-success" className="mt-3" onClick={click}>
                {isLogin ? 'Войти' : 'Регистрация'}
              </Button>
            </Row>
          </Form>
        </Card>
      </Container>
    </div>
  );
});

export default Auth;
