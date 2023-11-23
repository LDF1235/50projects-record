import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useState } from 'react';
import dogAvif from '../assets/rotatingNavigationAnimation/dog.avif';

const RotatingNavigationAnimation = () => {
  const [isRotate, setIsRotate] = useState(false);

  return (
    <div className='h-full relative bg-[#333] overflow-x-hidden'>
      <div
        className={clsx(
          'absolute z-[1] w-[200px] h-[200px] left-[-100px] top-[-100px] bg-[#f57879] rounded-full ease-linear transition-transform duration-[600ms]',
          isRotate ? '-rotate-90' : '',
        )}
      >
        <div
          onClick={() => {
            setIsRotate(true);
          }}
          className='absolute left-[130px] top-[140px] text-white cursor-pointer'
        >
          <div className='w-6 h-1 bg-white'></div>
          <div className='mt-1 w-6 h-1 bg-white'></div>
          <div className='mt-1 w-6 h-1 bg-white'></div>
        </div>
        <div
          onClick={() => {
            setIsRotate(false);
          }}
          className={clsx(
            'w-[30px] h-[30px] cursor-pointer absolute left-10 top-[130px] text-white ',
            'after:rotate-45 after:content-[""] after:absolute after:left-0 after:top-3 after:w-6 after:h-1 after:bg-white',
            'before:-rotate-45 before:content-[""] before:absolute before:left-0 before:top-3 before:w-6 before:h-1 before:bg-white',
          )}
        />
      </div>

      <div
        className={clsx(
          'h-full bg-white transition-transform duration-[600ms] ease-linear z-0 origin-top-left pt-[100px]',
          isRotate ? '-rotate-[20deg]' : '',
        )}
      >
        <div className='my-0 mx-auto max-w-[1000px]'>
          <h2 className='text-[32px] font-bold font-[Lato,sans-serif]  leading-none'>Amazing Article</h2>
          <i className='text-[13px] text-[#333]'>Florin Pop</i>
          <p className='mt-3 text-[#333] leading-normal font-[Lato,sans-serif]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione dolores cupiditate,
            maxime aliquid impedit dolorem nam dolor omnis atque fuga labore modi veritatis porro laborum minus, illo,
            maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia labore pariatur sunt quia harum aut. Eum
            maxime dolorem provident natus veritatis molestiae cumque quod voluptates ab non, tempore cupiditate?
            Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum sint nam quas dolor dignissimos in
            error placeat quae temporibus minus optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium.
            Ducimus consequuntur perferendis consequatur nobis exercitationem molestias fugiat commodi omnis. Asperiores
            quia tenetur nemo ipsa.
          </p>

          <h3 className='mt-3 font-bold'>My Dog</h3>

          <img
            src={dogAvif}
            alt='dog'
            className='w-full mt-4'
          />

          <p className='mt-3 text-[#333] leading-normal font-[Lato,sans-serif]'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero deleniti rerum quo, incidunt vel
            consequatur culpa ullam. Magnam facere earum unde harum. Ea culpa veritatis magnam at aliquid. Perferendis
            totam placeat molestias illo laudantium? Minus id minima doloribus dolorum fugit deserunt qui vero voluptas,
            ut quia cum amet temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores explicabo provident.
            Voluptates sint, neque fuga cum illum, tempore autem maxime similique laborum odio, magnam esse. Aperiam?
          </p>
        </div>
      </div>

      <div
        className={clsx(
          'fixed bottom-20 left-0 pl-10 text-white transition-transform duration-[600ms] ease-linear',
          isRotate ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <ul className='list-none'>
          <li className={clsx('mt-10 ml-0 transition-[margin-left] duration-[600ms] ease-linear')}>
            <FontAwesomeIcon icon='home' />
            <span className='ml-2'>HOME</span>
          </li>
          <li
            className={clsx('mt-10 transition-[margin-left] duration-[600ms] ease-linear', isRotate ? 'ml-5' : 'ml-0')}
          >
            <FontAwesomeIcon icon='user-alt' />
            <span className='ml-2'>ABOUT</span>
          </li>
          <li
            className={clsx('mt-10 transition-[margin-left] duration-[600ms] ease-linear', isRotate ? 'ml-10' : 'ml-0')}
          >
            <FontAwesomeIcon icon='envelope' />
            <span className='ml-2'>CONTACT</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RotatingNavigationAnimation;
