import React from 'react';

import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/esm/Card';
import Image from 'react-bootstrap/esm/Image';

import star from '../assets/star.png';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/counts';

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Col md={3} className={'mt-3'} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
        <Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
          <Image width={150} height={150} src={device.img} />
          <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
            <div>...Samsung</div>
            <div className="d-flex align-items-center">
              <div>{device.rating}</div>
              <Image width={20} height={20} src={star} style={{ objectFit: 'none' }} />
            </div>
          </div>
          <div>{device.name}</div>
        </Card>
      </Col>
    </div>
  );
};

export default DeviceItem;
