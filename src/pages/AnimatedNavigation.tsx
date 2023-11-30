import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

const AnimatedNavigation = () => {
  const [expand, setExpand] = useState(true);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navWrapperRef = useRef<HTMLUListElement>(null);
  const navWidthRef = useRef(0);
  const wrapperWidthRef = useRef(0);

  useEffect(() => {
    if (navWrapperRef.current) {
      navWidthRef.current = navWrapperRef.current.offsetWidth;
      navWrapperRef.current.style.width = `${navWidthRef.current}px`;
    }

    if (wrapperRef.current) {
      wrapperWidthRef.current = wrapperRef.current.offsetWidth;
      wrapperRef.current.style.width = `${wrapperWidthRef.current}px`;
    }
  }, []);

  const handleToggleExpand = () => {
    setExpand(x => !x);

    const isExpand = !expand;
    const wrapper = wrapperRef.current;
    const navWrapper = navWrapperRef.current;

    if (wrapper) {
      wrapper.style.width = (isExpand ? wrapperWidthRef.current : 70) + 'px';
    }

    if (navWrapper) {
      navWrapper.style.width = (isExpand ? navWidthRef.current : 0) + 'px';
    }
  };

  return (
    <div
      className={clsx(
        'min-h-full flex justify-center items-center font-[Muli,sans-serif] ',
        'bg-gradient-to-b from-[#eafbff] from-0% from-[#eafbff] from-50% to-[#5290f9] to-50% to-[#5290f9] to-100%',
      )}
    >
      <div
        className=' flex items-center p-5 bg-white shadow-[0_2px_5px_rgba(0,0,0,0.3)] rounded-[3px] transition-[width] duration-[600ms] ease-linear'
        ref={wrapperRef}
      >
        <ul
          className='flex shrink-0 grow-0 transition-[width] duration-[600ms] ease-linear overflow-hidden'
          ref={navWrapperRef}
        >
          <li
            className={clsx(
              expand ? ' rotate-y-360 opacity-100' : 'rotate-y-0 opacity-0',
              ' transition-all duration-[600ms] ease-linear',
            )}
          >
            Home
          </li>
          <li
            className={clsx(
              expand ? 'rotate-y-360 opacity-100' : 'rotate-y-0 opacity-0',
              'ml-2.5  transition-all duration-[600ms] ease-linear',
            )}
          >
            Works
          </li>
          <li
            className={clsx(
              expand ? 'rotate-y-360 opacity-100' : 'rotate-y-0 opacity-0',
              'ml-2.5  transition-all duration-[600ms] ease-linear',
            )}
          >
            About
          </li>
          <li
            className={clsx(
              expand ? 'rotate-y-360 opacity-100' : 'rotate-y-0 opacity-0',
              'ml-2.5  transition-all duration-[600ms] ease-linear',
            )}
          >
            Contact
          </li>
        </ul>
        <button
          className={clsx(expand ? 'ml-6' : '', 'w-[30px] h-[30px] relative')}
          onClick={handleToggleExpand}
        >
          <div
            className={clsx(
              expand ? 'rotate-[765deg]' : ' rotate-90 translate-y-1',
              'w-0.5 h-5 bg-[#5290f9] absolute left-[14px] top-[5px]  transition-transform duration-[600ms] ease-linear',
            )}
          />
          <div
            className={clsx(
              expand ? 'rotate-[-765deg]' : ' -rotate-90 -translate-y-1',
              'w-0.5 h-5 bg-[#5290f9] absolute left-[14px] top-[5px] transition-transform duration-[600ms] ease-linear',
            )}
          />
        </button>
      </div>
    </div>
  );
};

export default AnimatedNavigation;
