import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';

const Pages = observer(() => {
  const { device } = useContext(Context);

  const pageCount = Math.ceil(device.totalCount / device.limit);

  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  let clazz =
    'first:text-red px-3 py-2 leading-tight bg-white text-black hover:text-white font-bold  duration-200 border-1 bg-stone-50 border  hover:bg-blue-100  cursor-pointer';

  let clazzActive =
    'first:text-red px-3 py-2 leading-tight bg-black text-white text-white hover:text-white font-bold  duration-200 border-1 bg-blue border cursor-pointer';

  return (
    <nav className="mt-5">
      <ul class="inline-flex items-center -space-x-px">
        {pages.map((page) => (
          <li key={page} onClick={() => device.setPage(page)}>
            <div className={device.page === page ? clazzActive : clazz}>{page}</div>
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default Pages;
