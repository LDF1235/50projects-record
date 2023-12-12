import clsx from 'clsx';
import { useState } from 'react';

const arr = [
  {
    question: (
      <>
        Which language runs in a web
        <br />
        browser
      </>
    ),
    answers: ['Java', 'C', 'Python', 'JavaScript'],
  },
  {
    question: 'What does CSS stand for?',
    answers: ['Central Style Sheets', 'Cascading Style Sheets', 'Cascading Simple Sheets', 'Cars SUVs Sailboats'],
  },
  {
    question: 'What does HTML stand for?',
    answers: [
      'Hypertext Markup Language',
      'Hypertext Markdown Language',
      'Hyperloop Machine Language',
      'Helicopters Terminals Motorboats Lamborginis',
    ],
  },
  {
    question: (
      <>
        What year was JavaScript
        <br />
        launched?
      </>
    ),
    answers: ['1996', '1995', '1994', 'none of the above'],
  },
];

const rightAnswers = ['JavaScript', 'Cascading Style Sheets', 'Hypertext Markup Language', '1995'];

const QuizApp = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(['', '', '', '']);
  const [showResult, setShowResult] = useState(false);

  const handleNextStep = () => {
    if (showResult) {
      setShowResult(false);
      setAnswers(['', '', '', '']);
      setStep(0);
      return;
    }

    if (!answers[step]) return;

    const nextStep = step + 1;
    setStep(nextStep);

    if (nextStep >= 4) {
      setShowResult(true);
    }
  };

  const rightCount = answers.reduce((prev, cur, i) => prev + (cur === rightAnswers[i] ? 1 : 0), 0);

  return (
    <div className='min-h-full bg-[#e8ecf3] flex items-center justify-center'>
      <div className='rounded-md overflow-hidden shadow-lg w-[600px]'>
        {showResult ? (
          <div className='text-center py-4 bg-white font-bold text-[18px]'>
            You answered {rightCount}/4 questions correctly
          </div>
        ) : (
          <div className='bg-white pl-[64px] py-[80px]'>
            <h2 className='text-center font-bold text-[24px]'> {arr[step].question}</h2>
            <div className='flex flex-col mt-8'>
              {arr[step].answers.map((x, i) => (
                <div
                  key={x}
                  className={clsx(i > 0 ? 'mt-3' : '', 'text-[16px]')}
                >
                  <input
                    type='radio'
                    id={x}
                    name='answer'
                    className='cursor-pointer'
                    onChange={() => {
                      setAnswers(prev => {
                        const nextState = [...prev];
                        nextState[step] = x;
                        return nextState;
                      });
                    }}
                  />
                  <label
                    htmlFor={x}
                    className='ml-2 cursor-pointer'
                  >
                    {x}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={handleNextStep}
          className='w-full text-white text-center py-6 hover:bg-[#6e308f] bg-[#8846aa] '
        >
          {showResult ? 'Reload' : 'Submit'}
        </button>
      </div>
    </div>
  );
};

export default QuizApp;
