import { useEffect, useState } from 'react';

const DadJokes = () => {
  const [content, setContent] = useState('');
  const [isFetchJoke, setIsFetchJoke] = useState(false);

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = () => {
    return fetch('https://icanhazdadjoke.com', {
      headers: {
        accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 200) {
          setContent(res.joke);
        }
      });
  };

  const handleFetchJoke = () => {
    if (isFetchJoke) return;

    setIsFetchJoke(true);
    fetchJoke().finally(() => {
      setIsFetchJoke(false);
    });
  };

  const handleJokeBtnMouseDown = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target;

    if (!(target instanceof HTMLElement)) return;

    target.classList.add('scale-[.95]');

    const handleMouseup = () => {
      target.classList.remove('scale-[.95]');
      document.removeEventListener('mouseup', handleMouseup);
    };

    document.addEventListener('mouseup', handleMouseup);
  };

  return (
    <div className='h-full bg-[#686de0] flex justify-center items-center'>
      <div className='w-[800px] py-[50px] px-[20px] text-center bg-white rounded-[10px] shadow-[0_10px_20px_rgba(0,0,0,0.1),0_6px_6px_rgba(0,0,0,0.1)]'>
        <p className='opacity-[.5] text-[1.17em] tracking-[2px] font-bold'>Don't Laugh Challenge</p>
        <p className='max-w-[600px] mx-auto my-[50px] text-[30px] tracking-[1px] leading-[40px] text-center'>
          {content}
        </p>

        <button
          onMouseDown={handleJokeBtnMouseDown}
          onClick={handleFetchJoke}
          className='mx-auto leading-none py-[14px] px-[40px] bg-[#9f68e0] text-white rounded-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.1),0_6px_6px_rgba(0,0,0,0.1)]'
        >
          {isFetchJoke ? 'Get Another Joke...' : 'Get Another Joke'}
        </button>
      </div>
    </div>
  );
};

export default DadJokes;
