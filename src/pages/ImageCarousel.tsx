import { useEffect, useRef, useState } from 'react';

const ImageCarousel = () => {
  const [translatePercent, setTranslatePercent] = useState(-100);
  const isTransitionRef = useRef(false);
  const slideWrapperRef = useRef<HTMLDivElement>(null);
  const autoSlideTimerRef = useRef<number>();

  const startTimer = () => {
    const autoSlide = () => {
      if (isTransitionRef.current) return;

      isTransitionRef.current = true;
      slideWrapperRef.current?.classList.replace('duration-0', 'duration-300');
      setTranslatePercent(prev => prev - 100);
      autoSlideTimerRef.current = setTimeout(autoSlide, 3000);
    };

    autoSlideTimerRef.current = setTimeout(autoSlide, 3000);
  };

  useEffect(() => {
    startTimer();
  }, []);

  const handleSlide = (action: 'next' | 'prev') => {
    if (isTransitionRef.current) return;

    clearTimeout(autoSlideTimerRef.current);
    isTransitionRef.current = true;
    slideWrapperRef.current?.classList.replace('duration-0', 'duration-300');

    setTranslatePercent(prev => {
      return prev + (action === 'next' ? -100 : 100);
    });
    startTimer();
  };

  return (
    <div className='min-h-full flex justify-center items-center'>
      <div>
        <div className='w-[500px] h-[500px] overflow-hidden'>
          <div
            className='w-full h-full flex transition-transform duration-300 ease-linear'
            style={{ transform: `translateX(${translatePercent}%)` }}
            ref={slideWrapperRef}
            onTransitionEnd={e => {
              if (translatePercent === 0) {
                e.currentTarget.classList.replace('duration-300', 'duration-0');
                setTranslatePercent(-400);
              } else if (translatePercent === -500) {
                e.currentTarget.classList.replace('duration-300', 'duration-0');
                setTranslatePercent(-100);
              }

              isTransitionRef.current = false;
            }}
          >
            <div className='w-full h-full grow-0 shrink-0 bg-center bg-no-repeat bg-cover bg-scroll bg-[url(https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80)]'></div>
            <div className='w-full h-full grow-0 shrink-0 bg-center bg-no-repeat bg-cover bg-scroll bg-[url(https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80)]'></div>
            <div className='w-full h-full grow-0 shrink-0 bg-center bg-no-repeat bg-cover bg-scroll bg-[url(https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)]'></div>
            <div className='w-full h-full grow-0 shrink-0 bg-center bg-no-repeat bg-cover bg-scroll bg-[url(https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)]'></div>
            <div className='w-full h-full grow-0 shrink-0 bg-center bg-no-repeat bg-cover bg-scroll bg-[url(https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80)]'></div>
            <div className='w-full h-full grow-0 shrink-0 bg-center bg-no-repeat bg-cover bg-scroll bg-[url(https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80)]'></div>
          </div>
        </div>

        <div className='h-8 flex gap-x-3'>
          <button
            className='flex-1 text-white bg-[#623697] outline-none '
            onClick={() => {
              handleSlide('prev');
            }}
          >
            Prev
          </button>
          <button
            className='flex-1 text-white bg-[#623697]  outline-none'
            onClick={() => {
              handleSlide('next');
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
