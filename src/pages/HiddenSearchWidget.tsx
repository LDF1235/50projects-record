import clsx from 'clsx';
import { useState } from 'react';
import searchSvg from '../assets/hiddenSearchWidget/search.svg';

const HiddenSearchWidget = () => {
  const [showInput, setShowInput] = useState(false);

  const handleToggleShowInput = () => {
    setShowInput(x => !x);
  };

  return (
    <div className='h-full flex items-center justify-center bg-[#725FE9]'>
      <div className={clsx('h-[50px] bg-white flex items-center', showInput ? 'pl-3' : '')}>
        <input
          className={clsx(
            'h-full outline-none ease-linear transition-[width] duration-[600]',
            showInput ? 'w-[200px]' : 'w-0',
          )}
          placeholder='Search...'
        />
        <div
          className='w-[50px] h-[50px] flex items-center justify-center cursor-pointer'
          onClick={handleToggleShowInput}
        >
          <img
            src={searchSvg}
            alt='search'
            className='w-[32px]'
          />
        </div>
      </div>
    </div>
  );
};

export default HiddenSearchWidget;
