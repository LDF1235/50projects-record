import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

const srcMap = {
  Fly: 'http://pngimg.com/uploads/fly/fly_PNG3946.png',
  Mosquito: 'http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png',
  Spider: 'http://pngimg.com/uploads/spider/spider_PNG12.png',
  Roach: 'http://pngimg.com/uploads/roach/roach_PNG12163.png',
};

const InsectCatchGame = () => {
  const [showStart, setShowStart] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [isGameStart, setIsGameStart] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [score, setScore] = useState(0);

  const selectedInsectRef = useRef('');
  const wrapperRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef(0);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setSeconds(x => x + 1);
    }, 1000);
  };

  const renderSeconds = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    return `${minutes.toString().padStart(2, '0')}:${(seconds - minutes * 60).toString().padStart(2, '0')}`;
  };

  const createInsect = (insect: keyof typeof srcMap) => {
    const img = new Image();
    const rotateZ = Math.random() * 360;
    Object.assign(img.style, {
      width: '100px',
      height: '100px',
      transform: `rotateZ(${rotateZ}deg) scale(1)`,
      position: 'absolute',
      left: Math.random() * (window.innerWidth - 100) + 'px',
      top: Math.random() * (window.innerHeight - 100) + 'px',
      cursor: 'pointer',
      transition: 'transform .3s linear',
      userSelect: 'none',
    });
    img.src = srcMap[insect];
    img.onclick = function () {
      setScore(prev => prev + 1);
      setTimeout(() => {
        appendInsect(createInsect(insect));
      }, 1000);
      setTimeout(() => {
        appendInsect(createInsect(insect));
      }, 1500);
      setTimeout(() => {
        (this as HTMLImageElement).remove();
      }, 1000);
      (this as HTMLImageElement).style.transform = `rotateZ(${rotateZ}deg) scale(0)`;
    };
    return img;
  };

  const appendInsect = (insectNode: HTMLImageElement) => {
    const wrapper = wrapperRef.current;

    if (!wrapper) return;

    wrapper.appendChild(insectNode);
  };

  const handleStartGame = (insect: keyof typeof srcMap) => {
    selectedInsectRef.current = insect;
    startTimer();
    setIsGameStart(true);
    setShowOptions(false);
    setTimeout(() => {
      appendInsect(createInsect(insect));
    }, 400);
  };

  return (
    <div
      ref={wrapperRef}
      className=' relative h-full bg-[#5471fb] font-["Press_Start_2P",sans-serif] overflow-hidden'
    >
      <div
        className={clsx(
          score > 19 ? 'top-[160px] translate-y-0' : 'top-0 -translate-y-full',
          'absolute transition-transform z-10 pointer-events-none duration-300 ease-linear left-0 w-full py-6 text-white bg-[rgba(0,0,0,.5)]',
        )}
      >
        <p className='text-center'>Are you annoyed yet?</p>
        <p className='text-center'>You are playing an impossible game!!</p>
      </div>

      <div
        className={clsx(
          showStart ? 'top-1/2 -translate-y-1/2' : 'top-0 -translate-y-full',
          'absolute left-1/2  -translate-x-1/2  flex flex-col items-center transition-[top] duration-300 ease-linear',
        )}
      >
        <h2 className=' text-[32px] text-white'>Catch The Insect</h2>
        <button
          onClick={() => {
            setShowStart(false);
            setShowOptions(true);
          }}
          className='text-[#5471fb] py-2 px-4  bg-white mt-4'
        >
          Paly Game
        </button>
      </div>

      <div
        className={clsx(
          showOptions ? 'top-1/2 -translate-y-1/2' : isGameStart ? 'top-0 -translate-y-full' : 'top-full',
          'absolute left-1/2 w-full flex flex-col items-center -translate-x-1/2 transition-[top] duration-300 ease-linear ',
        )}
      >
        <h2 className=' text-[32px] text-white'>What is your "favorite" insect?</h2>
        <div className='flex mt-6'>
          <div
            onClick={() => {
              handleStartGame('Fly');
            }}
            className='w-[150px] h-[150px] hover:bg-white cursor-pointer text-white hover:text-[#5471fb] border-2 border-solid border-white flex flex-col items-center justify-between pt-4'
          >
            <p>Fly</p>
            <img
              className='w-[100px] h-[100px]'
              src='http://pngimg.com/uploads/fly/fly_PNG3946.png'
              alt='fly'
            />
          </div>

          <div
            onClick={() => {
              handleStartGame('Mosquito');
            }}
            className='w-[150px] ml-4 h-[150px] hover:bg-white cursor-pointer text-white hover:text-[#5471fb] border-2 border-solid border-white flex flex-col items-center justify-between pt-4'
          >
            <p>Mosquito</p>
            <img
              className='w-[100px] h-[100px]'
              src='http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png'
              alt='Mosquito'
            />
          </div>

          <div
            onClick={() => {
              handleStartGame('Spider');
            }}
            className='w-[150px] ml-4 h-[150px] hover:bg-white cursor-pointer text-white hover:text-[#5471fb] border-2 border-solid border-white flex flex-col items-center justify-between pt-4'
          >
            <p>Spider</p>
            <img
              className='w-[100px] h-[100px]'
              src='http://pngimg.com/uploads/spider/spider_PNG12.png'
              alt='Spider'
            />
          </div>

          <div
            onClick={() => {
              handleStartGame('Roach');
            }}
            className='w-[150px] ml-4 h-[150px] hover:bg-white cursor-pointer text-white hover:text-[#5471fb] border-2 border-solid border-white flex flex-col items-center justify-between pt-4'
          >
            <p>Roach</p>
            <img
              className='w-[100px] h-[100px]'
              src='http://pngimg.com/uploads/roach/roach_PNG12163.png'
              alt='Roach'
            />
          </div>
        </div>
      </div>

      <div
        className={clsx(
          isGameStart ? 'top-4' : 'top-full',
          'absolute w-full transition-[top] duration-300 ease-linear left-0 pt-6 px-6 flex justify-between text-white font-bold',
        )}
      >
        <div>
          <span>Time:</span>
          <span className='ml-4'>{renderSeconds(seconds)}</span>
        </div>

        <div>
          <span>Score:</span>
          <span className='ml-4'>{score}</span>
        </div>
      </div>
    </div>
  );
};

export default InsectCatchGame;
