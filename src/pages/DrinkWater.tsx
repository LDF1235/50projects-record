import clsx from 'clsx';
import { useState } from 'react';

const DrinkWater = () => {
  const [drankCount, setDrankCount] = useState(0);

  const handleDrank = (count: number) => {
    if (drankCount === count) {
      setDrankCount(x => x - 1);
      return;
    }

    setDrankCount(count);
  };

  return (
    <div className='min-h-full bg-[#4696E2] font-["Montserrat",sans-serif] pt-4 '>
      <h2 className=' text-center text-white font-bold text-[32px]'>Drink Water</h2>
      <p className='text-center text-white text-[18px]'>Goal: 2 Liters</p>
      <div className='flex flex-col overflow-hidden bg-white w-[150px] h-[340px] mx-auto mt-[40px] border-[4px] border-[#1F53C3] border-solid rounded-br-[40px] rounded-bl-[40px]'>
        <div
          style={{ height: `${(8 - drankCount) * 12.5}%` }}
          className='flex justify-center items-center flex-col overflow-hidden duration-300 transition-[height] ease-linear'
        >
          <div className='text-xl font-bold text-[#144fc6]'>2L</div>
          <div className=' text-xs text-[#144fc6]'>Remained</div>
        </div>
        <div
          style={{ height: `${drankCount * 12.5}%` }}
          className='flex items-center justify-center overflow-hidden bg-[#6ab3f8] text-center text-3xl font-bold text-[#144fc6] duration-300 transition-[height] ease-linear'
        >
          {drankCount * 12.5}%
        </div>
      </div>
      <p className='mt-8 text-white text-center'>Select how many glasses of water that you have drank</p>
      <div className='flex justify-center items-center gap-x-4 mt-2'>
        {Array.from({ length: 4 }, (_, i) => (
          <div
            key={i}
            className={clsx(
              drankCount >= i + 1 ? 'bg-[#74B5F6]' : '',
              'flex items-center justify-center flex-col text-[#1F53C3] w-[50px] h-[95px] bg-white border-[4px] border-solid border-[#1F53C3] rounded-br-[15px] rounded-bl-[15px] cursor-pointer',
            )}
            onClick={() => {
              handleDrank(i + 1);
            }}
          >
            <div>250</div>
            <div>ml</div>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center gap-x-4 mt-2'>
        {Array.from({ length: 4 }, (_, i) => (
          <div
            key={i}
            onClick={() => {
              handleDrank(i + 5);
            }}
            className={clsx(
              drankCount >= i + 5 ? 'bg-[#74B5F6]' : '',
              'flex items-center justify-center flex-col text-[#1F53C3] w-[50px] h-[95px] bg-white border-[4px] border-solid border-[#1F53C3] rounded-br-[15px] rounded-bl-[15px] cursor-pointer',
            )}
          >
            <div>250</div>
            <div>ml</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrinkWater;
