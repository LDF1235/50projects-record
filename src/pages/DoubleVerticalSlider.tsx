import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useRef, useState } from 'react';

const bgs = [
  'bg-[url(https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80)]',
  'bg-[url(https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80)]',
  'bg-[url(https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80)]',
  'bg-[url(https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80)]',
];

const contentParts = [
  {
    subTitle: 'in the sunset',
    title: 'Flying eagle',
    bgClass: 'bg-[#F9B76B]',
  },
  {
    title: 'Lonely castle',
    subTitle: 'in the wilderness',
    bgClass: 'bg-[#262E33]',
  },
  {
    title: 'Bluuue Sky',
    subTitle: "with it's mountains",
    bgClass: 'bg-[#3C87B8]',
  },
  {
    title: 'Nature flowe',
    subTitle: 'all in pink',
    bgClass: 'bg-[#F13154]',
  },
];

const renderContentParts = [contentParts[contentParts.length - 1], ...contentParts, contentParts[0]];
const renderBgs = [bgs[bgs.length - 1], ...bgs, bgs[0]];

const DoubleVerticalSlider = () => {
  const [translatePercent, setTranslatePercent] = useState(-400);
  const contentSliderRef = useRef<HTMLDivElement>(null);
  const bgSliderRef = useRef<HTMLDivElement>(null);
  const isTransitionRef = useRef(false);

  const handleSlide = (action: 'slideDown' | 'slideUp') => {
    if (isTransitionRef.current) return;

    isTransitionRef.current = true;

    if (contentSliderRef.current) {
      contentSliderRef.current.classList.replace('duration-0', 'duration-500');
    }

    if (bgSliderRef.current) {
      bgSliderRef.current.classList.replace('duration-0', 'duration-500');
    }

    if (action === 'slideDown') {
      setTranslatePercent(x => x + 100);
    } else if (action === 'slideUp') {
      setTranslatePercent(x => x - 100);
    }
  };

  return (
    <div className='min-h-full flex'>
      <div className=' relative flex-[35] overflow-hidden'>
        <button
          className='absolute z-[1] top-[50%] translate-y-[50%] right-0 bg-white px-4 py-3 rounded-tl rounded-bl'
          onClick={() => {
            handleSlide('slideDown');
          }}
        >
          <FontAwesomeIcon
            icon={faArrowDown}
            className='text-gray-400'
          />
        </button>

        <div
          className='h-full transition-transform duration-500 ease-in-out'
          style={{ transform: `translateY(${-500 - translatePercent}%)` }}
          ref={contentSliderRef}
          onTransitionEnd={e => {
            const target = e.target as HTMLDivElement;
            if (translatePercent === -500) {
              target.classList.replace('duration-500', 'duration-0');
            } else if (translatePercent === 0) {
              target.classList.replace('duration-500', 'duration-0');
            }
          }}
        >
          {renderContentParts.map((x, i) => {
            return (
              <div
                key={i}
                className={clsx(x.bgClass, 'h-full flex flex-col justify-center items-center ')}
              >
                <h2 className='text-[40px] text-white font-bold'>{x.title}</h2>
                <p className='text-white'>{x.subTitle}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className='flex-[65] relative overflow-hidden'>
        <button
          className='absolute z-[1] top-[50%] translate-y-[-50%] left-0 bg-white px-4 py-3 rounded-tr rounded-br'
          onClick={() => {
            handleSlide('slideUp');
          }}
        >
          <FontAwesomeIcon
            icon={faArrowDown}
            className='text-gray-400 rotate-180'
          />
        </button>

        <div
          className='h-full transition-transform duration-500 ease-in-out'
          style={{ transform: `translateY(${translatePercent}%)` }}
          ref={bgSliderRef}
          onTransitionEnd={e => {
            const target = e.target as HTMLDivElement;
            if (translatePercent === 0) {
              target.classList.replace('duration-500', 'duration-0');
              setTranslatePercent(-400);
            } else if (translatePercent === -500) {
              target.classList.replace('duration-500', 'duration-0');
              setTranslatePercent(-100);
            }

            isTransitionRef.current = false;
          }}
        >
          {renderBgs.map((x, i) => {
            return (
              <div
                key={i}
                className={clsx(x, 'h-full bg-no-repeat bg-center bg-cover bg-fixed')}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DoubleVerticalSlider;
