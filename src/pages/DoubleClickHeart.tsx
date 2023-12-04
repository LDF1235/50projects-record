import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';

let lastTimeStamp = 0;

const DoubleClickHeart = () => {
  const [times, setTimes] = useState(0);
  const hearRef = useRef<SVGSVGElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const now = Date.now();

    if (now - lastTimeStamp >= 300) {
      lastTimeStamp = now;
      return;
    }

    lastTimeStamp = 0;
    const heart = hearRef.current;
    const wrapper = wrapperRef.current;

    if (!heart || !wrapper) return;

    setTimes(x => x + 1);
    const heartClone = heart.cloneNode(true) as HTMLElement;
    heartClone.classList.replace('mx-2', 'absolute');
    heartClone.classList.add('pointer-events-none', 'animate-[heart-grow_.6s_linear]');
    Object.assign(heartClone.style, {
      left: e.nativeEvent.offsetX,
      top: e.nativeEvent.offsetY,
      transform: 'translate(-50%,-50%) scale(0)',
    });
    wrapper.append(heartClone);
    setTimeout(() => {
      wrapper.removeChild(heartClone);
    }, 1000);
  };

  return (
    <div className='min-h-full overflow-auto select-none '>
      <div className=' mt-[18px] font-bold text-[18px] text-center'>
        <span>Double click on the image to</span>
        <FontAwesomeIcon
          icon={faHeart}
          ref={hearRef}
          className='mx-2 text-red-500'
        />
        <span>it</span>
      </div>
      <div className='text-[13px] text-center'>You liked it {times} times</div>

      <div
        onClick={handleClick}
        className='mt-5 mx-auto relative w-[300px] h-[440px] cursor-pointer shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)] bg-no-repeat bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80)]'
        ref={wrapperRef}
      />
    </div>
  );
};

export default DoubleClickHeart;
