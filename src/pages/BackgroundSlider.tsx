import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useState } from 'react';

const bgs = [
  'bg-[url(/src/assets/backgroundSlider/photo-1.avif)]',
  'bg-[url(/src/assets/backgroundSlider/photo-2.avif)]',
  'bg-[url(/src/assets/backgroundSlider/photo-3.avif)]',
  'bg-[url(/src/assets/backgroundSlider/photo-4.avif)]',
  'bg-[url(/src/assets/backgroundSlider/photo-5.avif)]',
];

const BackgroundSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideBg = (action: 'prev' | 'next') => {
    setActiveIndex(prev => {
      let next = prev + (action === 'prev' ? -1 : 1);

      if (next < 0) next = 4;

      if (next > 4) next = 0;

      return next;
    });
  };

  return (
    <div
      className={clsx(
        bgs[activeIndex],
        'flex items-center justify-center',
        'min-h-full relative bg-cover bg-center bg-no-repeat bg-fixed transition-all ease-linear',
        'before:content-[""] before:left-0 before:top-0 before:absolute before:w-full before:h-full before:bg-[rgba(0,0,0,.7)] before:z-[1]',
      )}
    >
      <div className='flex items-center relative z-[2]'>
        <button
          onClick={() => {
            handleSlideBg('prev');
          }}
          className='p-5 border-solid border-orange-300 border-[2px] border-r-0'
        >
          <FontAwesomeIcon
            className='text-2xl text-white'
            icon={faArrowLeft}
          />
        </button>
        <div
          className={clsx(
            bgs[activeIndex],
            'relative h-[70vh] w-[70vw] bg-center bg-no-repeat bg-cover bg-fixed transition-all ease-linear',
          )}
        />
        <button
          onClick={() => {
            handleSlideBg('next');
          }}
          className='p-5 border-solid border-orange-300 border-[2px] border-l-0'
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            className='text-2xl text-white'
          />
        </button>
      </div>
    </div>
  );
};

export default BackgroundSlider;
