import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useState } from 'react';
import netflixSvg from '../assets/netflixMobileNavigation/netflix.svg';

const NetflixMobileNavigation = () => {
  const [expand, setExpand] = useState(false);

  return (
    <div className='min-h-full flex flex-col justify-center items-center'>
      <button
        className='fixed left-3 top-2'
        onClick={() => {
          setExpand(x => !x);
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <div
        className={clsx(
          expand ? 'translate-x-0 delay-0' : '-translate-x-full delay-[600ms]',
          'w-[60% bg-black transition-transform duration-300 ease-linear fixed left-0 top-0 h-full max-w-[480px] min-w-[320px]',
        )}
      >
        <div
          className={clsx(
            expand ? 'translate-x-0' : '-translate-x-full',
            'w-[95%] transition-transform duration-300 delay-300 ease-linear h-full bg-[red]',
          )}
        >
          <div
            className={clsx(
              expand ? 'translate-x-0 delay-[600ms]' : '-translate-x-full delay-0',
              'w-[95%] h-full transition-transform duration-300  ease-linear bg-white p-8',
            )}
          >
            <div className='flex justify-between items-center'>
              <img
                src={netflixSvg}
                alt='netflix'
                className='w-[80px]'
              />
              <button
                className='text-gray-500'
                onClick={() => {
                  setExpand(x => !x);
                }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            <ul className='mt-6 text-[rgb(34,31,31)]'>
              <li className='cursor-pointer mt-4 text-[14px]'>TEAMS</li>
              <li className='cursor-pointer mt-4 text-[14px]'>LOCATIONS</li>
              <li className='cursor-pointer mt-4 text-[14px]'>LIFE AT NETFLIX</li>
              <li className='cursor-pointer mt-4 text-[14px] ml-5'>NETFLIX CULTURE MEMO</li>
              <li className='cursor-pointer mt-4 text-[14px] ml-5'>WORK LIFE BALANCE</li>
              <li className='cursor-pointer mt-4 text-[14px] ml-5'>INCLUSION & DIVERSITY </li>
              <li className='cursor-pointer mt-4 text-[14px] ml-5'>BLOG</li>
            </ul>
          </div>
        </div>
      </div>

      <img
        src={netflixSvg}
        alt='netflix'
        className='w-[240px]'
      />
      <h2 className='mt-4'>MOBILE NAVIGATION</h2>
    </div>
  );
};

export default NetflixMobileNavigation;
