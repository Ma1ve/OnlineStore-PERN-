import React from 'react';

import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';

const Admin = () => {
  return (
    <Container className="d-flex flex-column">
      <Button variant={'outline-dark'} className="mt-2">
        Добавить тип
      </Button>
      <Button variant={'outline-dark'} className="mt-2">
        Добавить бренд
      </Button>
      <Button variant={'outline-dark'} className="mt-2">
        Добавить устройство
      </Button>
    </Container>
  );
};

export default Admin;
