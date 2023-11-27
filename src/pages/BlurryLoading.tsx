import { useEffect, useRef, useState } from 'react';

const BlurryLoading = () => {
  const [percent, setPercent] = useState(0);
  const percentRef = useRef(percent);
  percentRef.current = percent;

  useEffect(() => {
    const start = () => {
      setTimeout(() => {
        if (percentRef.current >= 100) return;

        setPercent(x => x + 1);
        start();
      }, 30);
    };

    start();
  }, []);

  return (
    <div className='h-full overflow-hidden'>
      <div
        style={{
          filter: `blur(${((100 - percent) / 100) * 30}px)`,
        }}
        className='h-full scale-110 bg-fixed bg-no-repeat bg-center bg-cover bg-[url(/src/assets/blurryLoading/photo-1576161787924-01bb08dad4a4.avif)]'
      />

      <div
        style={{
          opacity: (100 - percent) / 100,
        }}
        className='absolute left-1/2 top-1/2 z-[1] text-white text-[50px]'
      >
        {percent}%
      </div>
    </div>
  );
};

export default BlurryLoading;
