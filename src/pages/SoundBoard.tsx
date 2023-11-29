import clsx from 'clsx';
import { useRef } from 'react';
import applauseMp3 from '../assets/soundBoard/applause.mp3';
import booMp3 from '../assets/soundBoard/boo.mp3';
import gaspMp3 from '../assets/soundBoard/gasp.mp3';
import tadaMp3 from '../assets/soundBoard/tada.mp3';
import victoryMp3 from '../assets/soundBoard/victory.mp3';
import wrongMp3 from '../assets/soundBoard/wrong.mp3';

const btns = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const audioMap = {
  applause: applauseMp3,
  boo: booMp3,
  gasp: gaspMp3,
  tada: tadaMp3,
  victory: victoryMp3,
  wrong: wrongMp3,
};

const SoundBoard = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayAudio = (audioSrc: string) => {
    const audioEle = audioRef.current;

    if (!audioEle) return;

    audioEle.pause();
    audioEle.src = audioSrc;
    audioEle.play();
  };

  return (
    <div className='h-full bg-[#a164df] flex justify-center items-center font-["Poppins",sans-serif]'>
      {btns.map((x, i) => (
        <button
          className={clsx(
            i > 0 ? 'ml-[32px]' : '',
            'py-[24px] px-[48px] bg-[#663399] text-white text-[1.2rem] rounded-[5px] hover:opacity-[.9]',
          )}
          key={x}
          onClick={() => {
            handlePlayAudio(audioMap[x as keyof typeof audioMap]);
          }}
        >
          {x}
        </button>
      ))}

      <audio
        src='assets/applause.mp3'
        ref={audioRef}
      />
    </div>
  );
};

export default SoundBoard;
