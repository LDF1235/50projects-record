import clsx from 'clsx';
import { useEffect, useState } from 'react';

const AnimatedCountdown = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 4000);
  }, []);

  return (
    <div className='min-h-full flex items-center justify-center'>
      <div className='relative flex items-center justify-center'>
        <div
          className={clsx(
            'relative w-[120px] h-[120px] transition-transform duration-300 ease-linear',
            isReady ? 'scale-0' : 'scale-100',
          )}
        >
          {!isReady && (
            <>
              <div className='w-full h-full absolute left-0 top-0 rotate-180 animate-[animated-countdown_1s_linear_0s]'>
                <span className='absolute left-1/2 top-0 -translate-x-1/2 text-[36px] font-bold text-[#4598D9]'>3</span>
              </div>

              <div className='w-full h-full absolute left-0 top-0 rotate-180 animate-[animated-countdown_1s_linear_1s]'>
                <span className='absolute left-1/2 top-0 -translate-x-1/2 text-[36px] font-bold text-[#4598D9]'>2</span>
              </div>

              <div className='w-full h-full absolute left-0 top-0 rotate-180 animate-[animated-countdown_1s_linear_2s]'>
                <span className='absolute left-1/2 top-0 -translate-x-1/2 text-[36px] font-bold text-[#4598D9]'>1</span>
              </div>

              <div className='w-full h-full absolute left-0 top-0 rotate-180 animate-[animated-countdown_1s_linear_3s]'>
                <span className='absolute left-1/2 top-0 -translate-x-1/2 text-[36px] font-bold text-[#4598D9]'>0</span>
              </div>
            </>
          )}

          <div className='absolute left-0 top-1/2 bg-white w-full h-1/2 font-bold text-center'>GET READY</div>
        </div>

        <div className={clsx(isReady ? 'flex' : 'hidden', 'flex-col justify-center items-center absolute')}>
          <div className='font-bold text-center text-[24px]'>GO</div>

          <button
            className='py-1 px-2 mt-2 rounded  bg-slate-200 border-solid'
            onClick={() => {
              setIsReady(false);
              setTimeout(() => {
                setIsReady(true);
              }, 4000);
            }}
          >
            Replay
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCountdown;
