const SplitLandingPage = () => {
  return (
    <div className='h-full flex'>
      <div className="flex-1 relative bg-no-repeat bg-left-top bg-cover bg-[url('/src/assets/splitLandingPage/ps.jpg')] transition-[flex] duration-1000 ease-in-out hover:flex-[2] after:content-[''] after:left-0 after:top-0 after:absolute after:w-full after:h-full after:bg-[rgb(87,84,236)]/70 after:z-[0] after:pointer-events-none">
        <h2 className='relative z-[1] text-white text-center mt-[240px] text-[64px]'>Playstation 5</h2>
        <button className='relative z-[1] mt-[40px] px-[64px] py-[16px] flex justify-center items-center mx-auto border-[2px] border-white text-white font-bold hover:bg-[#5659E8] hover:border-[#5659E8]'>
          BUY NOW
        </button>
      </div>
      <div className="flex-1 relative bg-no-repeat bg-left-top bg-cover bg-[url('/src/assets/splitLandingPage/xbox.jpg')] bg-[#2C2C2C] transition-[flex] duration-1000 ease-in-out hover:flex-[2] after:content-[''] after:left-0 after:top-0 after:absolute after:w-full after:h-full after:bg-[rgb(43,43,43)]/70 after:z-[0] after:pointer-events-none">
        <h2 className='relative z-[1] text-white text-center mt-[240px] text-[64px]'>XBox Series X</h2>
        <button className='relative z-[1] mt-[40px] px-[64px] py-[16px] flex justify-center items-center mx-auto border-[2px] border-white text-white font-bold hover:bg-[#327A25] hover:border-[#327A25]'>
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default SplitLandingPage;
