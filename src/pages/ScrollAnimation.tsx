import clsx from 'clsx';
import { useEffect, useRef } from 'react';

const boxList = Array.from({ length: 25 }, (_, i) => i);

const ScrollAnimation = () => {
  const boxListRef = useRef<Map<number, HTMLDivElement> | null>(null);

  useEffect(() => {
    const boxObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('[&>div]:translate-x-0');
        } else {
          entry.target.classList.remove('[&>div]:translate-x-0');
        }
      }
    });

    boxListRef.current?.forEach(x => {
      boxObserver.observe(x);
    });
  }, []);

  return (
    <div className='bg-[#efedd7] overflow-auto'>
      <h2 className='mt-3 text-center text-[28px]'>Scroll to see the animation</h2>
      {boxList.map((x, i) => (
        <div
          className='mt-3 mx-auto overflow-hidden'
          key={x}
          ref={node => {
            let map = boxListRef.current;

            if (!map) {
              boxListRef.current = new Map();
              map = boxListRef.current;
            }

            if (node) {
              map.set(i, node);
            } else {
              map.delete(i);
            }
          }}
        >
          <div
            className={clsx(
              i % 2 === 0 ? 'translate-x-[400%]' : '-translate-x-[400%]',
              'w-[400px] h-[200px] my-0 mx-auto rounded-md bg-[#4f83b2] shadow-[2px_4px_5px_0_rgba(0,0,0,.3)] text-center font-bold text-[40px] leading-[200px] text-white transition-transform duration-[800ms] ease-linear',
            )}
          >
            Content
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollAnimation;
