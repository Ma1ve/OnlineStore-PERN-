import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import Pages from '../components/Pages';
import TypeBar from '../components/TypeBar';
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI';

import { Context } from '../index';

const Shop = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
    fetchDevices(null, null, 5, 1).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    fetchDevices(device.selectedType.id, device.selectedBrand.id, 5, device.page).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, [device.page, device.selectedType, device.selectedBrand]);

  return (
    <div className="container mx-auto flex flex-start h-screen">
      <div style={{ width: 300 }} className="mt-5">
        <TypeBar />
      </div>
      <div style={{ width: '60%' }} className=" mt-5 pl-10">
        <BrandBar />
        <DeviceList />
        <Pages />
      </div>
    </div>
  );
});

export default Shop;
