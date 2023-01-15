import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  let clazz =
    'inline-block rounded-lg  px-4 py-3 text-black shadow-lg shadow-blue-500/50 duration-300 bg-stone-50 hover:bg-stone-300 ';

  let clazzActive =
    'inline-block rounded-lg  px-4 py-3 text-white shadow-lg shadow-blue-500/50 duration-300 bg-black border-2 border-white ';

  return (
    <>
      <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 hover:cursor-pointer">
        {device.types.map((type) => (
          <li key={type.id} class="mr-2" onClick={() => device.setSelectedType(type)}>
            <div className={type.id === device.selectedType.id ? clazzActive : clazz}>
              {type.name}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
});

export default BrandBar;
