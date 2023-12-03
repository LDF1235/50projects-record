import clsx from 'clsx';
import { useState } from 'react';

const steps = [1, 2, 3, 4];

const ProgressSteps = () => {
  const [curStep, setCurStep] = useState(0);

  return (
    <div className='flex items-center justify-center min-h-full bg-[#f6f7fb]'>
      <div className='flex items-center flex-col'>
        <div
          className={clsx(
            'flex items-center w-[400px] justify-between relative',
            'after:content-[""] after:absolute after:left-0 after:top-1/2 after:translate-y-[-50%] after:w-full after:h-[3px] after:bg-[#e0e0e0] after:z-0',
          )}
        >
          <div
            style={{
              width: curStep * 33.333 + '%',
            }}
            className='absolute left-0 top-1/2 translate-y-[-50%] h-[3px] bg-[#479ad9] z-[1] transition-[width] duration-[400ms] '
          />
          {steps.map(x => {
            return (
              <div
                key={x}
                className={clsx(
                  curStep >= x - 1 ? 'border-[#479ad9]' : 'border-[#e0e0e0]',
                  'relative z-[2] flex items-center justify-center rounded-full w-[30px] h-[30px] bg-white text-[#999] border-2 border-solid',
                )}
              >
                {x}
              </div>
            );
          })}
        </div>

        <div className='mt-12'>
          <button
            disabled={curStep <= 0}
            onClick={() => {
              setCurStep(x => (x - 1 < 0 ? 0 : x - 1));
            }}
            className=' active:scale-[.97] disabled:scale-100 disabled:bg-[#e0e0e0] disabled:cursor-not-allowed py-2 px-[30px] bg-[#479ad9] border-none rounded-md text-white cursor-pointer'
          >
            Prev
          </button>
          <button
            onClick={() => {
              setCurStep(x => (x + 1 > 3 ? 3 : x + 1));
            }}
            disabled={curStep >= 3}
            className='active:scale-[.97] disabled:scale-100 ml-3 disabled:bg-[#e0e0e0] disabled:cursor-not-allowed py-2 px-[30px] bg-[#479ad9] border-none rounded-md text-white cursor-pointer'
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;
