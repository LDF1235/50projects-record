import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useRef, useState } from 'react';

const FaqCollapse = () => {
  const [expandMap, setExpandMap] = useState<Record<string, boolean>>({});

  const wrappersRef = useRef<Map<number, HTMLDivElement>>(new Map());

  const handleToggleExpand = (index: number) => {
    setExpandMap(prev => ({ ...prev, [index]: !prev[index] }));

    const targetWrapper = wrappersRef.current.get(index);

    if (!targetWrapper) return;

    const prevHeight = targetWrapper.offsetHeight;
    targetWrapper.style.height = 'auto';
    requestAnimationFrame(() => {
      const nextHeight = targetWrapper.offsetHeight;
      targetWrapper.style.height = prevHeight + 'px';
      targetWrapper.offsetHeight;
      targetWrapper.style.height = nextHeight + 'px';
    });
  };

  return (
    <div className='h-full bg-[#F0F0F0] overflow-auto'>
      <h1 className='mt-[50px] font-bold mb-[30px] text-center text-[32px]'>Frequently Asked Questions</h1>

      {faqs.map((x, i) => (
        <div
          key={x.faq}
          className={clsx(
            i > 0 ? 'mt-6' : '',
            expandMap[i] ? 'bg-white shadow-[0_3px_6px_rgba(0,0,0,0.1),0_3px_6px_rgba(0,0,0,0.1)]' : '',
            'overflow-hidden max-w-[600px] transition-[height] duration-500 ease-in-out mx-auto rounded-[10px] border-[1px] border-[#9fa4a8] border-solid p-[30px]',
          )}
          ref={node => {
            const wrappers = wrappersRef.current;

            if (node) {
              wrappers.set(i, node);
            } else {
              wrappers.delete(i);
            }
          }}
        >
          <div className='flex justify-between relative'>
            <FontAwesomeIcon
              icon={faComment}
              className={clsx(expandMap[i] ? '' : 'hidden', 'text-[112px] absolute -left-1 top-0  z-0 text-[#DDF5E4]')}
            />
            <FontAwesomeIcon
              icon={faComment}
              style={{ transform: 'rotateY(180deg)' }}
              className={clsx(
                expandMap[i] ? '' : 'hidden',
                ' text-[112px] absolute left-[-64px] top-[-32px]  z-0 text-[#DAEBF7]',
              )}
            />
            <span className='relative z-0 font-bold text-[18px]'>{x.faq}</span>
            <button
              className='toggle-btn w-[30px] h-[30px] flex items-center justify-center'
              onClick={() => {
                handleToggleExpand(i);
              }}
            >
              <FontAwesomeIcon
                icon={faChevronDown}
                className={expandMap[i] ? 'hidden' : ''}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={clsx(
                  expandMap[i] ? '' : 'hidden',
                  'text-white bg-[#A0A4A8] w-5 p-[5px] h-5 rounded-full text-center',
                )}
              />
            </button>
          </div>
          <p className={clsx(expandMap[i] ? '' : 'hidden', 'mt-[30px] answer relative z-[1]')}>{x.answer}</p>
        </div>
      ))}
    </div>
  );
};

const faqs = [
  {
    faq: "Why shouldn't we trust atoms?",
    answer: 'They make up everything',
  },
  {
    faq: 'What do you call someone with no body and no nose?',
    answer: 'Nobody knows.',
  },
  {
    faq: "What's the object-oriented way to become wealthy?",
    answer: 'Inheritance.',
  },
  {
    faq: 'How many tickles does it take to tickle an octopus?',
    answer: 'Ten-tickles!',
  },
  {
    faq: 'What is: 1 + 1?',
    answer: 'Depends on who are you asking.',
  },
];

export default FaqCollapse;
