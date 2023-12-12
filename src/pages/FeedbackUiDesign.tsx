import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useState } from 'react';
import unhappyPng from '../assets/feedbackUiDesign/external-emoji-neumojis-smiley-neu-royyan-wijaya-17.png';
import neutralPng from '../assets/feedbackUiDesign/external-emoji-neumojis-smiley-neu-royyan-wijaya-3.png';
import satisfiedPng from '../assets/feedbackUiDesign/external-emoji-neumojis-smiley-neu-royyan-wijaya-30.png';

const FeedbackUiDesign = () => {
  const [activeFeedback, setActiveFeedBack] = useState('');
  const [showFeedback, setShowFeedBack] = useState(false);

  return (
    <div className='min-h-full bg-[#fef9f2] flex justify-center items-center'>
      <div className='bg-white shadow-md rounded-md p-6 flex flex-col items-center'>
        {showFeedback ? (
          <>
            <FontAwesomeIcon
              icon={faHeart}
              className='text-[28px] text-[red]'
            />
            <p className='mt-4 font-medium text-[14px]'>Thank You!</p>
            <p className='mt-4 font-medium text-[14px]'>Feedback:{activeFeedback}</p>

            <p className='text-center text-[14px] mt-4 w-[340px]'>
              We'll use your feedback to improve our
              <br /> customer support
            </p>
          </>
        ) : (
          <>
            <div className='text-center font-bold text-[14px]'>
              How satisfied are you with our
              <br />
              customer support performance?
            </div>
            <div className='flex mt-6'>
              <div
                className={clsx(
                  activeFeedback === 'Unhappy' ? 'shadow-[0_0_10px_rgba(0,0,0,.1)]' : '',
                  ' flex flex-col items-center rounded-md cursor-pointer py-3 px-5 hover:shadow-[0_0_10px_rgba(0,0,0,.1)]',
                )}
                onClick={() => {
                  setActiveFeedBack('Unhappy');
                }}
              >
                <img
                  className='w-10'
                  src={unhappyPng}
                />
                <div className='text-[12px] mt-2'>Unhappy</div>
              </div>
              <div
                className={clsx(
                  activeFeedback === 'Neutral' ? 'shadow-[0_0_10px_rgba(0,0,0,.1)]' : '',
                  'ml-2 flex flex-col items-center rounded-md cursor-pointer py-3 px-5 hover:shadow-[0_0_10px_rgba(0,0,0,.1)]',
                )}
                onClick={() => {
                  setActiveFeedBack('Neutral');
                }}
              >
                <img
                  className='w-10'
                  src={neutralPng}
                />
                <div className='text-[12px] mt-2'>Neutral</div>
              </div>
              <div
                className={clsx(
                  activeFeedback === 'Satisfied' ? 'shadow-[0_0_10px_rgba(0,0,0,.1)]' : '',
                  'ml-2 flex flex-col items-center rounded-md cursor-pointer py-3 px-5 hover:shadow-[0_0_10px_rgba(0,0,0,.1)]',
                )}
                onClick={() => {
                  setActiveFeedBack('Satisfied');
                }}
              >
                <img
                  className='w-10'
                  src={satisfiedPng}
                />
                <div className='text-[12px] mt-2'>Satisfied</div>
              </div>
            </div>
            <button
              onClick={() => {
                if (!activeFeedback) return;
                setShowFeedBack(true);
              }}
              className='bg-[#302d2b] mt-6 text-white px-6 py-2 rounded-md active:scale-95'
            >
              Send Review
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default FeedbackUiDesign;
