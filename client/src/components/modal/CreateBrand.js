import React, { useState } from 'react';
import { crateBrand } from '../../http/deviceAPI';

const CreateBrand = ({ active, setActive }) => {
  const [value, setValue] = useState('');

  const addBrand = () => {
    console.log(2343);
    crateBrand({ name: value }).then((data) => {
      setValue('');
      setActive(false);
    });
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
            <div className=" text-center font-bold">ADD BRAND</div>

            <input
              type="text"
              className="mb-6 text-md mt-2 bg-gray-100 border border-gray-300 text-gray-900rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 rounded-lg pl-5"
              placeholder="Enter brand"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />

            <button
              className="mt-3 mx-auto w-5/12 drop-shadow-lg  text-white text-xl shadow-lg shadow-blue-500/50 duration-300 rounded-lg p-1 px-4 ml-5 border-2 text-base font-bold bg-cyan-500 hover:bg-cyan-600"
              onClick={addBrand}>
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateBrand;
