import clsx from 'clsx';
import { useState } from 'react';

const sharedClass =
  'w-[125px] relative h-[125px] after:h-full after:skew-y-[45deg] after:w-[15px] after:top-2 after:right-[-15px] after:absolute after before:skew-x-[45deg] before:absolute before:left-2 before:bottom-[-15px] before:h-[15px] before:w-full before:bg-[#f9ca24] after:bg-[#f6e58d] before:content-[""] after:content-[""] transition-transform duration-[400ms] ease-linear bg-no-repeat bg-[url(https://media.giphy.com/media/EZqwsBSPlvSda/giphy.gif)] bg-[length:500px_500px]';

const ThreeDBackgroundBoxes = () => {
  const [expand, setExpand] = useState(true);

  return (
    <div className='min-h-full'>
      <div className='text-center py-4'>
        <button
          onClick={() => {
            setExpand(x => !x);
          }}
          className='bg-[#f9ca24] rounded-md active:scale-95 shadow-[0_3px_rgba(249,202,36,0.5)] py-2 px-4 text-white'
        >
          Magic 🎩
        </button>
      </div>
      <div className='flex justify-center mt-40'>
        <div
          className={clsx(expand ? 'w-[600px] h-[600px]' : 'w-[500px] h-[500px]', 'flex flex-wrap justify-between ')}
        >
          <div className={clsx(expand ? 'rotate-[360deg]' : 'rotate-0', sharedClass, 'bg-[0_0]')} />
          <div className={clsx(expand ? 'rotate-[360deg]' : 'rotate-0', sharedClass, 'bg-[-125px_0]')} />
          <div className={clsx(expand ? 'rotate-[360deg]' : 'rotate-0', sharedClass, 'bg-[-250px_0]')} />
          <div className={clsx(expand ? 'rotate-[360deg]' : 'rotate-0', sharedClass, 'bg-[-375px_0]')} />

          <div className={clsx(expand ? 'rotate-[360deg]' : 'rotate-0', sharedClass, 'bg-[0_-125px]')} />
          <div className={clsx(expand ? 'rotate-[360deg]' : 'rotate-0', sharedClass, 'bg-[-125px_-125px]')} />
          <div className={clsx(expand ? 'rotate-[360deg]' : 'rotate-0', sharedClass, 'bg-[-250px_-125px]')} />
          <div className={clsx(expand ? 'rotate-[360deg]' : 'rotate-0', sharedClass, 'bg-[-375px_-125px]')} />

          <div className={clsx(expand ? 'rotate-[360deg]' : 'rotate-0', sharedClass, 'bg-[0_-250px]')} />
          <div className={clsx(expand ? 'rotate-[360deg]' : 'rotate-0', sharedClass, 'bg-[-125px_-250px]')} />
          <div className={clsx(expand ? 'rotate-[360deg]' : 'rotate-0', sharedClass, 'bg-[-250px_-250px]')} />
          <div className={clsx(expand ? 'rotate-[360deg]' : 'rotate-0', sharedClass, 'bg-[-375px_-250px]')} />

          <div className={clsx(expand ? 'rotate-[360deg]' : 'rotate-0', sharedClass, 'bg-[0_-375px]')} />
          <div className={clsx(expand ? 'rotate-[360deg]' : 'rotate-0', sharedClass, 'bg-[-125px_-375px]')} />
          <div className={clsx(expand ? 'rotate-[360deg]' : 'rotate-0', sharedClass, 'bg-[-250px_-375px]')} />
          <div className={clsx(expand ? 'rotate-[360deg]' : 'rotate-0', sharedClass, 'bg-[-375px_-375px]')} />
        </div>
      </div>
    </div>
  );
};

export default ThreeDBackgroundBoxes;
