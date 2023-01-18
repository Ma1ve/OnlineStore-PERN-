import React from 'react';
import { useNavigate } from 'react-router-dom';

import block from '../assets/block.png';
import star from '../assets/star.png';
import { DEVICE_ROUTE } from '../utils/counts';

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg cursor-pointer"
        src={process.env.REACT_APP_API_URL + '/' + device.img}
        alt="device"
        onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
        style={{ width: 130, margin: '0 auto' }}
      />

      <div className="text-center">
        <div className="mb-3">
          <div className="text-xl font-bold text-green-900 ">{device.name}</div>
          <div className=" items-center font-bold">
            <div className=" flex justify-center">
              <div>Rating: {device.rating} </div>
              <img className="object-none ml-1" src={star} alt="start" />
            </div>

            <div>Price: {device.price} </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2"
            onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            Read more
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeviceItem;
