import clsx from 'clsx';
import { useRef, useState } from 'react';

const RandomChoicePicker = () => {
  const [readOnly, setReadOnly] = useState(false);
  const [options, setOptions] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [content, setContent] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextareaKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key !== 'Enter' || readOnly) return;

    setReadOnly(true);
    setContent('');
    startPickChoice().then(() => {
      setReadOnly(false);
      textAreaRef.current?.focus();
    });
  };

  const startPickChoice = () => {
    return new Promise<void>(resolve => {
      let count = 0;

      const pickInterval = () => {
        setTimeout(() => {
          if (count >= 50) return resolve();

          count++;
          setActiveIndex(Math.floor(Math.random() * (options.length + 1)));
          pickInterval();
        }, 100);
      };

      pickInterval();
    });
  };

  return (
    <div className='h-full bg-[#3D8BED] flex items-center justify-center font-[Muli,sans-serif]'>
      <div className='w-[500px] flex flex-col items-center'>
        <p className='text-white font-bold text-lg '>Enter all of the choices divided by a comma (',').</p>
        <p className='text-white font-bold text-lg '>Press enter when you're done</p>

        <textarea
          ref={textAreaRef}
          className='w-full mt-5 p-2.5'
          rows={4}
          placeholder='Enter choices here...'
          readOnly={readOnly}
          value={content}
          onChange={e => {
            setActiveIndex(-1);
            setContent(e.target.value);
            setOptions(
              e.target.value
                .split(',')
                .map(x => x.trim())
                .filter(Boolean),
            );
          }}
          onKeyUp={handleTextareaKeyUp}
        />
        <div className='flex w-full justify-start flex-wrap gap-x-[5px] gap-y-2.5 mt-2.5'>
          {options.map((x, i) => (
            <div
              key={`${x}${i}`}
              className={clsx(
                i === activeIndex ? 'bg-[#293D73]' : '',
                ' grow-0 shrink-0 py-2.5 px-5 bg-[#E89134] text-white flex items-center justify-center rounded-[50px]',
              )}
            >
              {x}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RandomChoicePicker;
