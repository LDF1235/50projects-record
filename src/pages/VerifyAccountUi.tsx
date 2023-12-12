import clsx from 'clsx';
import { useRef, useState } from 'react';

const arr = Array.from({ length: 6 }, (_, i) => i);

const VerifyAccountUi = () => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>(new Array(6).fill(null));
  const [values, setValues] = useState(['', '', '', '', '', '']);

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, i: number) => {
    if (e.key === 'Backspace') {
      setValues(prev => {
        const nextState = [...prev];
        nextState[i] = '';
        return nextState;
      });

      if (i >= 1) {
        inputRefs.current[i - 1]?.focus();
      }
    }

    if (/^\d$/.test(e.key)) {
      setValues(prev => {
        const nextState = [...prev];
        nextState[i] = e.key;
        return nextState;
      });

      if (i < 5) {
        inputRefs.current[i + 1]?.focus();
      }
    }
  };

  return (
    <div className='min-h-full flex items-center justify-center'>
      <div className='border-solid border-2 border-black rounded-md p-4 flex flex-col items-center'>
        <h1 className='font-bold text-[24px] '>Verify Your Account</h1>
        <p className='mt-6'>We emailed you the six digit code to cool_guy@email.com</p>
        <p>Enter the code below to confirm your email address.</p>

        <div className='mt-8'>
          {arr.map((x, i) => (
            <input
              ref={node => {
                if (!node) return;

                inputRefs.current[i] = node;
              }}
              onKeyDown={e => {
                handleInputKeyDown(e, i);
              }}
              key={x}
              placeholder='0'
              maxLength={1}
              required
              value={values[i]}
              className={clsx(
                i > 0 ? 'ml-3' : '',
                'w-[100px] h-[120px] valid:border-blue-400 focus:border-[#101010] placeholder:text-[#757575] text-center text-[75px] border-solid border-gray-200 border-[1px] rounded-md',
              )}
            />
          ))}
        </div>

        <div className='mt-6 w-[400px] text-center text-[#777] bg-[#eaeaea] rounded-md py-2 px-2 text-[14px] '>
          This is design only. We didn't actually send you an email as we don't have your email, right?
        </div>
      </div>
    </div>
  );
};

export default VerifyAccountUi;
