import clsx from 'clsx';
import { useEffect, useState } from 'react';

const EventKeycodes = () => {
  const [showKeycodes, setShowKeycodes] = useState(false);
  const [keyInfo, setKeyInfo] = useState({
    key: '',
    keyCode: '',
    code: '',
  });

  useEffect(() => {
    const keydownHandler = (event: KeyboardEvent) => {
      setShowKeycodes(true);
      setKeyInfo({
        key: event.key,
        keyCode: event.keyCode.toString(),
        code: event.code,
      });
    };

    window.addEventListener('keydown', keydownHandler);

    return () => {
      window.removeEventListener('keydown', keydownHandler);
    };
  }, []);

  return (
    <div className='h-full bg-[#e1e1e1] flex justify-center items-center font-[Muli,sans-serif]'>
      <div
        className={clsx(
          showKeycodes ? 'hidden' : '',
          'p-[20px] text-[20px] bg-[#eee] border-solid border-[1px] border-[#999] text-center font-bold shadow-[1px_1px_3px_rgba(0,0,0,0.1)]',
        )}
      >
        Press any key to get the keyCode
      </div>

      <div className={showKeycodes ? 'flex' : 'hidden'}>
        <div>
          <div className='text-center text-[#555] text-[14px] font-bold'>event.key</div>
          <div className='mt-1 min-w-[150px] p-[20px] text-[20px] bg-[#eee] border-solid border-[1px] border-[#999] text-center font-bold shadow-[1px_1px_3px_rgba(0,0,0,0.1)]'>
            {keyInfo.key}
          </div>
        </div>

        <div className='ml-6'>
          <div className='text-center text-[#555] text-[14px] font-bold'>event.keyCode</div>
          <div className='mt-1 min-w-[150px] p-[20px] text-[20px] bg-[#eee] border-solid border-[1px] border-[#999] text-center font-bold shadow-[1px_1px_3px_rgba(0,0,0,0.1)]'>
            {keyInfo.keyCode}
          </div>
        </div>

        <div className='ml-6'>
          <div className='text-center text-[#555] text-[14px] font-bold'>event.code</div>
          <div className='mt-1 min-w-[150px] p-[20px] text-[20px] bg-[#eee] border-solid border-[1px] border-[#999] text-center font-bold shadow-[1px_1px_3px_rgba(0,0,0,0.1)]'>
            {keyInfo.code}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventKeycodes;
