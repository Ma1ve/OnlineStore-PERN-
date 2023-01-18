import React, { useEffect, useState } from 'react';

import block from '../assets/block.png';

import blockStar from '../assets/nether.webp';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceAPI';

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();

  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);

  console.log(device);

  return (
    <div className="container mx-auto h-screen pt-5">
      <div className="grid grid-cols-3 justify-between items-center">
        <img
          className="w-96 h-96 "
          src={process.env.REACT_APP_API_URL + '/' + device.img}
          alt="devcie"
        />

        <div
          className="flex items-center justify-center font-bold"
          style={{
            background: `url(${blockStar}) no-repeat center center`,
            width: 350,
            height: 350,
            backgroundSize: 'cover',
            fontSize: 64,
          }}>
          {device.price}
        </div>
      </div>
      <div className=" text-9xl font-bold">
        <div>{device.name}</div>
        <div>{device.rating}</div>
      </div>
    </div>
  );
};

export default DevicePage;
