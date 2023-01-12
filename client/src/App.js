import { observer } from 'mobx-react-lite';
import { BrowserRouter } from 'react-router-dom';
import { Context } from './index';

import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import Spinner from 'react-bootstrap/Spinner';

import { useContext, useEffect, useState } from 'react';
import { check } from './http/userAPI';

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(true);
        console.log(user.user);
        user.setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spinner animation="grow" />;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
