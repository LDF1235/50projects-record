const RandomImageFeed = () => {
  return (
    <div className='min-h-full'>
      <h2 className='font-bold text-center text-[32px] py-2'>Random Image Feed</h2>

      <div className=' mx-auto justify-between w-[920px] py-4 flex flex-wrap gap-y-2.5'>
        {Array.from({ length: 15 }, (_, i) => (
          <img
            key={i}
            className='w-[300px]'
            src={`https://source.unsplash.com/random/3${i.toString().padStart(2, '0')}x3${i
              .toString()
              .padStart(2, '0')}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RandomImageFeed;
