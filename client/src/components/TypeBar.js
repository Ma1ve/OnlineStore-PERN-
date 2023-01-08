import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

import { Context } from '../index';

const TypeBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <ListGroup>
      <div>
        {device.types.map((type) => (
          <ListGroup.Item
            style={{ cursor: 'pointer' }}
            active={type.id === device.selectedType.id}
            key={type.id}
            onClick={() => device.setSelectedType(type)}>
            {type.name}
          </ListGroup.Item>
        ))}
      </div>
    </ListGroup>
  );
});

export default TypeBar;
