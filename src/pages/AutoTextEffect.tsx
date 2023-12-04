import { useEffect, useRef, useState } from 'react';

const content = 'We Love Programming!';

const AutoTextEffect = () => {
  const [speed, setSpeed] = useState(1);
  const [renderContent, setRenderContent] = useState('');
  const indexRef = useRef(0);
  const speedRef = useRef(speed);
  speedRef.current = speed;

  useEffect(() => {
    const startAnimation = () => {
      setRenderContent(content.slice(0, indexRef.current));
      indexRef.current++;

      if (indexRef.current > 20) indexRef.current = 0;

      setTimeout(
        () => {
          startAnimation();
        },
        300 - (speedRef.current - 1) * 50,
      );
    };

    startAnimation();
  }, []);

  return (
    <div className='min-h-full bg-[#E2957B] flex items-center justify-center relative'>
      <p className='font-bold text-[32px]'>{renderContent}</p>

      <div className='p-2 absolute bottom-4 left-[50%] translate-x-[-50%] bg-[#CB866E]'>
        <span>Speed：</span>
        <input
          className='w-[40px] bg-[#E2957B] text-center outline-none'
          min={1}
          max={5}
          onChange={e => {
            setSpeed(parseInt(e.target.value));
          }}
          value={speed}
          type='number'
        />
      </div>
    </div>
  );
};

export default AutoTextEffect;
