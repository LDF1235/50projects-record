import { useState } from 'react';

const CustomRangeSlider = () => {
  const [value, setValue] = useState('50');

  return (
    <div className='min-h-full bg-[#dee4ee] relative flex justify-center items-center'>
      <h2 className='font-bold absolute w-full top-5 text-center text-[24px]'>Custom Range Slider</h2>
      <div className='relative'>
        <input
          type='range'
          id='custom-range'
          min='0'
          max='100'
          step='1'
          className='mc-custom-slider'
          value={value}
          onChange={e => {
            setValue(e.target.value);
          }}
        />
        <label
          htmlFor='custom-range'
          style={{ left: `${value}%` }}
          className='absolute -top-10  -translate-x-1/2 bg-white shadow-[0_0_5px_rgba(0,0,0,.3)] w-20 py-[5px] flex items-center justify-center rounded-md'
        >
          {value}
        </label>
      </div>
    </div>
  );
};

export default CustomRangeSlider;
