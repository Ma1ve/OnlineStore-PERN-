import React from 'react';
import BrandBar from '../components/BrandBar';
import TypeBar from '../components/TypeBar';

const Shop = () => {
  return (
    <div className="container mx-auto flex flex-start h-screen">
      <div className="grid-cols-3	mt-5 flex">
        <TypeBar />
      </div>
      <div className="grid-cols-9 mt-5 ml-20">
        <BrandBar />
      </div>
    </div>
  );
};

export default Shop;
