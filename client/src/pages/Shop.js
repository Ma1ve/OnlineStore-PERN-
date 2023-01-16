import React from 'react';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import TypeBar from '../components/TypeBar';

const Shop = () => {
  return (
    <div className="container mx-auto flex flex-start h-screen">
      <div style={{ width: 300 }} className=" mt-5 ">
        <TypeBar />
      </div>
      <div style={{ width: '100%' }} className=" mt-5 pl-10">
        <BrandBar />
        <DeviceList />
      </div>
    </div>
  );
};

export default Shop;
