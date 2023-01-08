import React, { useContext } from 'react';

import Row from 'react-bootstrap/esm/Row';
import Card from 'react-bootstrap/esm/Card';

import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <Row className="d-flex">
      {device.brands.map((brand) => (
        <Card
          style={{ cursor: 'pointer', width: 100, textAlign: 'center' }}
          key={brand.id}
          className="p-2 border border-2"
          border={brand.id === device.selectedBrand.id ? 'primary' : 'light'}
          onClick={() => device.setSelectedBrand(brand)}>
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
