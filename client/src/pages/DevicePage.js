import React, { useEffect, useState } from 'react';

import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/esm/Image';
import Row from 'react-bootstrap/esm/Row';
import Card from 'react-bootstrap/esm/Card';

import bigStars from '../assets/bigStar.png';
import Button from 'react-bootstrap/esm/Button';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceAPI';

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });

  const { id } = useParams();

  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        <Col md={4} className="d-flex justify-content-left ">
          <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2 style={{ textAlign: 'center' }}>{device.name}</h2>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                background: `url(${bigStars}) no-repeat center center`,
                width: 245,
                height: 240,
                backgroundSize: 'cover',
                fontSize: 64,
              }}>
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around "
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: '5px solid lightgray',
              margin: '0 auto',
            }}>
            <h3>От {device.price} руб.</h3>
            <Button variant={'outline-dark'}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row style={{ margin: '60px 10px 10px 10px' }} className="d-flex flex-column">
        <h1 className="mb-4 text-aling-center">Характеристики</h1>
        {device.info.map((info, index) => (
          <Row
            key={info.id}
            style={{ background: index % 2 === 0 ? 'lightgray' : 'transperent', padding: 10 }}>
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
