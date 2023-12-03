import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

const StickyNavBar = () => {
  const navRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const nav = navRef.current;

    if (!nav) return;

    const scrollHandler = () => {
      setActive(window.scrollY > nav.offsetHeight + 150);
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <div className='font-["Open_Sans",sans-serif]'>
      <nav
        ref={navRef}
        className={clsx(
          active ? 'bg-white py-2.5 text-black' : 'bg-black py-5 text-white',
          'transition-all duration-300 ease-linear fixed z-[2] left-0 top-0 w-full px-[17px] flex justify-end items-center',
        )}
      >
        <a
          className='mr-auto text-[24px] font-bold hover:text-[#c0392b]'
          href='#'
        >
          My Website
        </a>
        <a
          href='#'
          className='font-bold hover:text-[#c0392b]'
        >
          Home
        </a>
        <a
          href='#'
          className='ml-4 hover:text-[#c0392b]'
        >
          About
        </a>
        <a
          href='#'
          className='ml-4 hover:text-[#c0392b]'
        >
          Services
        </a>
        <a
          href='#'
          className='ml-4 hover:text-[#c0392b]'
        >
          Contact
        </a>
      </nav>

      <div className=' relative flex flex-col items-center justify-center h-screen bg-[url(https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)] bg-center bg-cover bg-no-repeat bg-scroll'>
        <div className='absolute left-0 top-0 w-full h-full bg-[rgba(0,0,0,.3)]' />

        <h2 className=' relative z-[1] text-[46px] text-white font-bold'>Welcome To My Website</h2>
        <p className='relative z-[1] text-white text-[20px]'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, consequuntur?
        </p>
      </div>

      <div className='w-full max-w-[1200px] mx-auto mt-6 pb-6'>
        <h3 className='font-bold text-[24px]'>Content One</h3>
        <p className='mt-4 leading-[30px] text-[#555]'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem voluptates eveniet tempora ut
          cupiditate magnam, sapiente, hic quo in ipsum iste soluta eaque perferendis nihil recusandae dolore officia
          aperiam corporis similique. Facilis quos tempore labore totam! Consectetur molestiae iusto ducimus error
          reiciendis aspernatur dolor, modi dolorem sit architecto, voluptate magni sunt unde est quas? Voluptates a
          dolorum voluptatum quo perferendis aut sit. Aspernatur libero laboriosam ab eligendi omnis delectus earum
          labore, placeat officiis sint illum rem voluptas ipsum repellendus iste eius recusandae quae excepturi facere,
          iure rerum sequi? Illum velit delectus dicta et iste dolorum obcaecati minus odio eligendi!
        </p>

        <h3 className='font-bold text-[24px] mt-6'>Content Two</h3>
        <p className='mt-4 leading-[30px] text-[#555]'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur provident nostrum possimus inventore nisi
          laboriosam consequatur modi nulla eos, commodi, omnis distinctio! Maxime distinctio impedit provident,
          voluptates illo odio nostrum minima beatae similique a sint sapiente voluptatum atque optio illum est! Tenetur
          tempora doloremque quae iste aperiam hic cumque repellat?
        </p>
      </div>
    </div>
  );
};

export default StickyNavBar;
