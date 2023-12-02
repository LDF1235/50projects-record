import { useRef, useState } from 'react';

const DrawingApp = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [lineWidth, setLineWidth] = useState(5);
  const [color, setColor] = useState('#000000');

  const handleClearCanvas = () => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const context = canvas.getContext('2d');
    context?.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleCanvasMouseDown = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const context = canvas.getContext('2d');

    if (!context) return;

    const { clientX, clientY, offsetX, offsetY } = e.nativeEvent;
    const [wrapperX, wrapperY] = [clientX - offsetX, clientY - offsetY];
    context.beginPath();

    const handleMousemove = (e: MouseEvent) => {
      const [x, y] = [e.clientX - wrapperX, e.clientY - wrapperY];

      if (x < 0 || y < 0 || x > canvas.width || y > canvas.height) return;

      context.lineTo(x, y);
      context.strokeStyle = color;
      context.lineWidth = lineWidth;
      context.stroke();
    };

    const handleMouseup = () => {
      document.removeEventListener('mouseup', handleMouseup);
      document.removeEventListener('mousemove', handleMousemove);
    };

    document.addEventListener('mousemove', handleMousemove);
    document.addEventListener('mouseup', handleMouseup);
  };

  return (
    <div className=' min-h-full flex flex-col justify-center items-center'>
      <canvas
        width={800}
        height={700}
        ref={canvasRef}
        className='border-2 border-solid border-[#4F83B2] border-b-0 grow-0 shrink-0'
        onMouseDown={handleCanvasMouseDown}
      />
      <div className='p-4 bg-[#4F83B2] w-[804px] flex items-center'>
        <button
          onClick={() => {
            setLineWidth(prev => (prev - 5 < 5 ? 5 : prev - 5));
          }}
          className='w-[50px] h-[50px] bg-white text-4xl flex items-center justify-center'
        >
          -
        </button>
        <span className='ml-2 w-[50px] h-[50px] bg-white text-4xl flex items-center justify-center'>{lineWidth}</span>
        <button
          onClick={() => {
            setLineWidth(prev => (prev + 5 > 50 ? 50 : prev + 5));
          }}
          className='ml-2 w-[50px] h-[50px] bg-white text-4xl flex items-center justify-center'
        >
          +
        </button>
        <input
          type='color'
          className='ml-2 w-[50px] h-[50px]'
          value={color}
          onChange={e => {
            setColor(e.target.value);
          }}
        />
        <button
          onClick={handleClearCanvas}
          className='ml-auto w-[50px] h-[50px] bg-white text-4xl flex items-center justify-center'
        >
          x
        </button>
      </div>
    </div>
  );
};

export default DrawingApp;
