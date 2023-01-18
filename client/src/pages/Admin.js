import React, { useState } from 'react';
import CreateBrand from '../components/modal/CreateBrand';
import CreateDevice from '../components/modal/CreateDevice';
import CreateType from '../components/modal/CreateType';

const Admin = () => {
  const [modalActiveType, setModalActiveType] = useState(false);
  const [modalActiveBrand, setModalActiveBrand] = useState(false);
  const [modalActiveDevice, setModalActiveDevice] = useState(false);

  return (
    <div className="container mx-auto flex flex-col items-center h-screen relative">
      <button
        className="mt-9 mx-auto w-5/12 drop-shadow-lg  text-white text-xl shadow-lg shadow-blue-500/50 duration-300 rounded-lg p-1 px-4 ml-5 border-2 text-base font-bold bg-cyan-500 hover:bg-cyan-600"
        onClick={() => setModalActiveType(true)}>
        Добавить тип
      </button>
      <button
        className="mt-3 mx-auto w-5/12 drop-shadow-lg  text-white text-xl shadow-lg shadow-blue-500/50 duration-300 rounded-lg p-1 px-4 ml-5 border-2 text-base font-bold bg-cyan-500 hover:bg-cyan-600 "
        onClick={() => setModalActiveBrand(true)}>
        Добавить бренд
      </button>
      <button
        className="mt-3 mx-auto w-5/12 drop-shadow-lg  text-white text-xl shadow-lg shadow-blue-500/50 duration-300 rounded-lg p-1 px-4 ml-5 border-2 text-base font-bold bg-cyan-500 hover:bg-cyan-600 "
        onClick={() => setModalActiveDevice(true)}>
        Добавить блок
      </button>

      <CreateType active={modalActiveType} setActive={setModalActiveType} />
      <CreateBrand active={modalActiveBrand} setActive={setModalActiveBrand} />
      <CreateDevice active={modalActiveDevice} setActive={setModalActiveDevice} />
    </div>
  );
};

export default Admin;
