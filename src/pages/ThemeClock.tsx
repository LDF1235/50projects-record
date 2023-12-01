import { useEffect, useRef, useState } from 'react';

const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

const getDateInfo = () => {
  const date = new Date();

  return {
    day: date.getDay(),
    date: date.getDate(),
    month: date.getMonth(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
};

const ThemeClock = () => {
  const [themeMode, setThemeMode] = useState<'Light' | 'Dark'>('Light');
  const [dateInfo, setDateInfo] = useState(getDateInfo);
  const themeModeRef = useRef(themeMode);
  themeModeRef.current = themeMode;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const startAnimation = () => {
      requestAnimationFrame(() => {
        const date = new Date();
        setDateInfo({
          day: date.getDay(),
          date: date.getDate(),
          month: date.getMonth(),
          hour: date.getHours(),
          minute: date.getMinutes(),
        });
        startAnimation();
        drawClock({
          hour: date.getHours(),
          minute: date.getMinutes(),
          second: date.getSeconds(),
        });
      });
    };

    startAnimation();
  }, []);

  const drawClock = ({ hour, minute, second }: { hour: number; minute: number; second: number }) => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext('2d');

    if (!ctx) return;

    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    const radius = 100;
    hour = hour % 12;
    const isDark = themeModeRef.current === 'Dark';

    for (let i = 0; i < 12; i++) {
      const angle = (i * (Math.PI * 2)) / 12;
      const x1 = radius + (radius - 2) * Math.cos(angle);
      const y1 = radius + (radius - 2) * Math.sin(angle);
      const x2 = radius + (radius - 5) * Math.cos(angle);
      const y2 = radius + (radius - 5) * Math.sin(angle);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineWidth = 2;
      ctx.strokeStyle = isDark ? '#fff' : '#000';
      ctx.stroke();
    }

    const drawPointer = (angle: number, length: number, width: number, color: string) => {
      const x = radius + length * Math.cos(angle);
      const y = radius + length * Math.sin(angle);
      ctx.beginPath();
      ctx.moveTo(radius, radius);
      ctx.lineTo(x, y);
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.stroke();
    };

    const hourAngle = ((hour - 3) * (Math.PI * 2)) / 12 + (minute * (Math.PI * 2)) / 12 / 60;
    drawPointer(hourAngle, radius - 30, 3, isDark ? '#fff' : '#000');

    const minuteAngle = ((minute - 15) * (Math.PI * 2)) / 60 + (second * (Math.PI * 2)) / 60 / 60;
    drawPointer(minuteAngle, radius - 20, 3, isDark ? '#fff' : '#000');

    const secondAngle = ((second - 15) * (Math.PI * 2)) / 60;
    drawPointer(secondAngle, radius - 10, 1, 'red');

    ctx.beginPath();
    ctx.arc(100, 100, 4, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(100, 100, 2, 0, 2 * Math.PI);
    ctx.fillStyle = isDark ? '#fff' : '#000';
    ctx.fill();
  };

  const handleToggleThemeMode = () => {
    setThemeMode(prev => (prev === 'Light' ? 'Dark' : 'Light'));

    const classList = document.documentElement.classList;

    if (themeMode === 'Light') {
      classList.add('dark');
    } else {
      classList.remove('dark');
    }
  };

  return (
    <div className='min-h-full flex justify-center items-center bg-white dark:bg-black transition-[background] duration-500 ease-linear'>
      <div className='text-center absolute left-1/2 top-[100px] -translate-x-1/2'>
        <button
          onClick={handleToggleThemeMode}
          className='text-sm text-white bg-black py-1 px-2 rounded  dark:text-black dark:bg-white'
        >
          {themeMode === 'Dark' ? 'Light' : 'Dark'} mode
        </button>
      </div>

      <div className='flex flex-col items-center'>
        <canvas
          width={200}
          height={200}
          ref={canvasRef}
        ></canvas>

        <div className='text-[60px] text-black dark:text-white'>
          <span>
            {(dateInfo.hour > 12 ? dateInfo.hour - 12 : dateInfo.hour).toString().padStart(2, '0')}:
            {dateInfo.minute.toString().padStart(2, '0')}
          </span>
          <span className='ml-4'>{dateInfo.hour > 12 ? 'PM' : 'AM'}</span>
        </div>
        <div className='flex justify-center items-center'>
          <span className='text-[#aaa] text-sm'>
            {days[dateInfo.day]},{months[dateInfo.month]}
          </span>
          <span className='w-[18px] h-[18px] text-sm ml-1 flex justify-center items-center bg-black rounded-full text-white dark:bg-white dark:text-black'>
            {dateInfo.date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ThemeClock;
