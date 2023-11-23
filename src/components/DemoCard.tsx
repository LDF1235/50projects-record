import clsx from 'clsx';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  coverUrl: string;
  coverAlt: string;
  title: React.ReactNode;
  linkTo: string;
}

const DemoCard = (props: Props) => {
  const { coverAlt, coverUrl, title, linkTo } = props;

  const [coverLoadOk, setCoverLoadOk] = useState(false);

  return (
    <div className={clsx('relative w-[18%] grow aspect-[681/484]', coverLoadOk ? '' : 'mc-skeleton')}>
      <img
        src={coverUrl}
        alt={coverAlt}
        className='w-full absolute left-0 top-0'
        onLoad={() => {
          setCoverLoadOk(true);
        }}
      />

      <div className='flex items-center justify-center flex-col w-full h-full absolute left-0 top-0 z-[1] cursor-pointer opacity-0 hover:opacity-100 transition-[opacity] duration-300 ease-in bg-[#9901ff]'>
        <div className='font-bold text-white text-2xl'>{title}</div>
        <Link
          to={linkTo}
          className='mt-4 text-white font-[Alata,sans-serif]  py-3 px-[30px] bg-[#3b0281] font-medium'
        >
          Live Demo
        </Link>
      </div>
    </div>
  );
};

export default DemoCard;
