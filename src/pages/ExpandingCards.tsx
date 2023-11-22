import clsx from 'clsx';
import { useState } from 'react';

const images = [
  { bgClass: 'bg-[url(/src/assets/expandingCards/photo-1558979158-65a1eaa08691.webp)]', title: 'Explore The World' },
  { bgClass: 'bg-[url(/src/assets/expandingCards/photo-1572276596237-5db2c3e16c5d.webp)]', title: 'Wild Forest' },
  { bgClass: 'bg-[url(/src/assets/expandingCards/photo-1507525428034-b723cf961d3e.webp)]', title: 'Sunny Beach' },
  { bgClass: 'bg-[url(/src/assets/expandingCards/photo-1551009175-8a68da93d5f9.webp)]', title: 'City on Winter' },
  { bgClass: 'bg-[url(/src/assets/expandingCards/photo-1549880338-65ddcdfd017b.webp)]', title: 'Mountains - Clouds' },
];

const ExpandingCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='h-full flex items-center justify-center'>
      <div className='w-[90%] h-[1027px] flex'>
        {images.map((x, i) => (
          <div
            key={x.bgClass}
            onClick={() => {
              setActiveIndex(i);
            }}
            className={clsx(
              activeIndex === i ? 'flex-[5]' : 'flex-[.5]',
              x.bgClass,
              ' relative bg-scroll bg-no-repeat bg-center bg-cover my-0 mx-2.5 rounded-[50px] cursor-pointer transition-[flex] duration-1000 ease-in',
            )}
          >
            <h3
              className={clsx(
                ' absolute left-5 bottom-5 text-2xl text-white font-bold transition-[opacity] duration-0',
                activeIndex === i ? 'opacity-100 delay-1000' : 'opacity-0',
              )}
            >
              {x.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpandingCards;
