const squareList = Array.from({ length: 500 }, (_, i) => i);

const colors = ['#dc2626', '#ea580c', '#65a30d', '#059669', '#1d4ed8', '#3730a3', '#a21caf', '#9f1239'];

const Hoverboard = () => {
  return (
    <div className='min-h-full bg-[#111] flex items-center justify-center'>
      <div className='w-[400px] h-[500px] flex flex-wrap gap-1'>
        {squareList.map(x => (
          <div
            key={x}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
              e.currentTarget.classList.replace('duration-[1000ms]', 'duration-0');
            }}
            onMouseLeave={e => {
              e.currentTarget.style.removeProperty('background-color');
              e.currentTarget.classList.replace('duration-0', 'duration-[1000ms]');
            }}
            className='w-4 h-4 bg-[#1D1D1D] transition-[background-color] duration-[1000ms] ease-linear'
          />
        ))}
      </div>
    </div>
  );
};

export default Hoverboard;
