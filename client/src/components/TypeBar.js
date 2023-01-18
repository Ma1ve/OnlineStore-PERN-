import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';

import blockIcon from '../assets/block.png';

const TypeBar = observer(() => {
  const { device } = useContext(Context);

  let clazz = `duration-300 inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-bold border text-black -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg text-lg bg-stone-50 hover:bg-stone-300`;

  let clazzActive = `duration-300 inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-bold underline text-lg bg-black border text-white -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-white bg-stone-50 hover:bg-stone-300`;

  return (
    <ul className="max-w-xs flex flex-col hover:cursor-pointer">
      {device.brands.map((brand) => (
        <li
          key={brand.id}
          className={brand.id === device.selectedBrand.id ? clazzActive : clazz}
          onClick={() => {
            device.setSelectedBrand(brand);
          }}>
          <img src={blockIcon} alt="blockIcon" className="w-10" />
          {brand.name}
        </li>
      ))}
    </ul>
  );
});
// console.log(brand.id === device.selectedBrand.id);
export default TypeBar;
