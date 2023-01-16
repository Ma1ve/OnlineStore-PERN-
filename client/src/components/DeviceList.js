import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import DeviceItem from './DeviceItem';

const DeviceList = observer(() => {
  const { device } = useContext(Context);

  return (
    <>
      <div className="grid grid-cols-5 gap-5 mt-5">
        {device.devices.map((device) => (
          <DeviceItem key={device.id} device={device} />
        ))}
      </div>
    </>
  );
});

export default DeviceList;
