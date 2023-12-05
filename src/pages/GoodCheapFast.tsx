import clsx from 'clsx';
import { useState } from 'react';

const GoodCheapFast = () => {
  const [firstClickMap, setFirstClickMap] = useState({
    good: true,
    cheap: true,
    fast: true,
  });
  const [checkedMap, setCheckedMap] = useState({
    good: false,
    cheap: false,
    fast: false,
  });

  const handleCheckChange = (type: 'good' | 'cheap' | 'fast') => {
    setFirstClickMap(x => ({ ...x, [type]: false }));
    setCheckedMap(prev => {
      const nextState = { ...prev, [type]: !prev[type] };

      if (nextState.good && nextState.cheap && nextState.fast) {
        if (type === 'good') {
          nextState.fast = false;
        } else if (type === 'cheap') {
          nextState.good = false;
        } else {
          nextState.cheap = false;
        }
      }

      return nextState;
    });
  };

  return (
    <div className='min-h-full flex flex-col items-center justify-center'>
      <h2 className='font-bold'>How do you want your project to be</h2>
      <div className='flex items-center mt-4 w-[200px]'>
        <div
          className={clsx(
            checkedMap.good ? 'bg-[#8e44ad]' : 'bg-[#D0D0D0]',
            'w-[80px] relative h-[40px] px-1 cursor-pointer rounded-full flex items-center',
          )}
          onClick={() => {
            handleCheckChange('good');
          }}
        >
          <div
            className={clsx(
              checkedMap.good
                ? 'left-[calc(100%_-_38px)] animate-[good-cheap-fast-check_.3s] '
                : 'left-1' + (firstClickMap.good ? '' : ' animate-[good-cheap-fast-not-check_.3s]'),
              'w-[34px] absolute h-[34px] bg-white rounded-full  transition-[left] duration-300 ease-linear',
            )}
          />
        </div>
        <span className='ml-4'>Good</span>
      </div>
      <div className='flex items-center mt-4 w-[200px]'>
        <div
          className={clsx(
            checkedMap.cheap ? 'bg-[#8e44ad]' : 'bg-[#D0D0D0]',
            'w-[80px] relative h-[40px] px-1 cursor-pointer rounded-full flex items-center',
          )}
          onClick={() => {
            handleCheckChange('cheap');
          }}
        >
          <div
            className={clsx(
              checkedMap.cheap
                ? 'left-[calc(100%_-_38px)] animate-[good-cheap-fast-check_.3s] '
                : 'left-1' + (firstClickMap.cheap ? '' : ' animate-[good-cheap-fast-not-check_.3s]'),
              'w-[34px] absolute h-[34px] bg-white rounded-full  transition-[left] duration-300 ease-linear',
            )}
          />
        </div>
        <span className='ml-4'>Cheap</span>
      </div>
      <div className='flex items-center mt-4 w-[200px]'>
        <div
          className={clsx(
            checkedMap.fast ? 'bg-[#8e44ad]' : 'bg-[#D0D0D0]',
            'w-[80px] relative h-[40px] px-1 cursor-pointer rounded-full flex items-center',
          )}
          onClick={() => {
            handleCheckChange('fast');
          }}
        >
          <div
            className={clsx(
              checkedMap.fast
                ? 'left-[calc(100%_-_38px)] animate-[good-cheap-fast-check_.3s] '
                : 'left-1' + (firstClickMap.fast ? '' : ' animate-[good-cheap-fast-not-check_.3s]'),
              'w-[34px] absolute h-[34px] bg-white rounded-full  transition-[left] duration-300 ease-linear',
            )}
          />
        </div>
        <span className='ml-4'>Fast</span>
      </div>
    </div>
  );
};

export default GoodCheapFast;
