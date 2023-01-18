import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviceAPI';

import { Context } from '../../index';

const CreateDevice = observer(({ active, setActive }) => {
  const { device } = useContext(Context);

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
  }, []);

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const changeInfo = (key, value, number) => {
    setInfo(info.map((i) => (i.number === number ? { ...i, [key]: value } : i)));
  };

  const addDevice = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    formData.append('img', file);
    formData.append('brandId', 1);
    formData.append('typeId', 2);
    formData.append('info', JSON.stringify(info));

    createDevice(formData).then((data) => setActive(false));
  };

  return (
    <>
      <div
        className={
          active
            ? 'fixed top-0 lef-0  w-screen h-screen bg-black bg-opacity-50 scale-100'
            : 'scale-0'
        }
        onClick={() => setActive(false)}>
        <div
          className="w-1/4  mx-auto mt-5 bg-white rounded-lg relative"
          onClick={(e) => e.stopPropagation()}>
          <div className="p-5 text-center font-bold">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-hide="authentication-modal"
              onClick={() => setActive(false)}>
              <svg
                aria-hidden="true"
                className="w-5 h-5 hover:bg-gray-200 rounded-md"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
            <div className=" text-center font-bold">ADD DEVICE</div>

            <div className="mt-2 flex flex-column justify-around">
              <select
                className="border rounded-md"
                onClick={(e) => {
                  device.setSelectedType(e.target.value);
                }}>
                {device.types.map((type) => (
                  <option
                    value={type.id}
                    key={type.id}
                    /* onClick={() => {
                      device.setSelectedType(type);
                      console.log(device.selectedType);
                    }} */
                  >
                    {type.name}
                  </option>
                ))}
              </select>

              <select
                className="mt-3 border rounded-md"
                onClick={(e) => {
                  device.setSelectedBrand(e.target.value);
                }}>
                {device.brands.map((brand) => (
                  <option
                    value={brand.id}
                    key={brand.id}
                    /* onClick={() => {
                      device.setSelectedBrand(brand);
                    }} */
                  >
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-2">
              <div className="font-medium">Name</div>
              <input
                type="text"
                className="mb-3 text-md mt-2 bg-gray-100 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 rounded-lg pl-5"
                placeholder="Enter device name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <div className="font-medium">Price</div>
              <input
                type="text"
                className="mb-6 text-md mt-2 bg-gray-100 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 rounded-lg pl-5"
                placeholder="Enter the price of the item"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <input
              className="mb-3 font-medium form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
             "
              type="file"
              onChange={selectFile}
            />
            <div class="flex justify-center"></div>
            <hr />

            <button
              className="mt-3 mx-auto w-5/12 drop-shadow-lg  text-white text-xl shadow-lg shadow-blue-500/50 duration-300 rounded-lg p-1 px-4 ml-5 border-2 text-base font-bold bg-cyan-500 hover:bg-cyan-600"
              onClick={addInfo}>
              Add info
            </button>
            {info.map((i) => (
              <div key={i.number}>
                <div className="flex mt-3">
                  <input
                    type="text "
                    className="border border-gray-300 w-1/2 mr-2 pl-5"
                    placeholder="title"
                    value={i.title}
                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                  />
                  <input
                    type="text "
                    className="border border-gray-300 w-1/2 ml-2 pl-5"
                    placeholder="description"
                    value={i.description}
                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                  />
                </div>

                <button
                  className="mt-3  block mx-auto  drop-shadow-lg  text-white text-xl shadow-lg shadow-blue-500/50 duration-300 rounded-lg p-1 px-4 ml-5 border-2 text-base font-bold bg-red-500 hover:bg-red-600"
                  onClick={() => removeInfo(i.number)}>
                  Delete
                </button>
              </div>
            ))}

            <button
              className="mt-3 w-full block mx-auto w-5/12 drop-shadow-lg  text-white text-xl shadow-lg shadow-blue-500/50 duration-300 rounded-lg p-1 px-4 ml-5 border-2 text-base font-bold bg-cyan-500 hover:bg-cyan-600"
              onClick={addDevice}>
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
});

export default CreateDevice;
