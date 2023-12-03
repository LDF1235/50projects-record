const FormWave = () => {
  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const target = e.target;

    if (!(target instanceof HTMLInputElement)) return;

    target.classList.add('[&+div>span]:translate-y-[-24px]');
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const target = e.target;

    if (!(target instanceof HTMLInputElement) || target.value) return;

    target.classList.remove('[&+div>span]:translate-y-[-24px]');
  };

  return (
    <div className='min-h-full bg-[#4F83B2] flex justify-center items-center leading-none'>
      <div className='rounded-[5px] px-[40px] py-[20px] bg-[#2F4F6B]'>
        <h1 className='mt-[21px] mb-[30px] text-[32px] text-white font-bold text-center'>Please Login</h1>
        <form>
          <div className='relative mt-[20px] mb-[40px]'>
            <input
              className='w-[300px] bg-transparent border-b-2 border-white border-solid outline-0 py-[15px] text-white form-input'
              required
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <div className='absolute left-[0] bottom-[20px] flex text-[#add8e6]'>
              <span className='duration-300 ease-[cubic-bezier(0.68, -0.55, 0.265, 1.55)] delay-0'>E</span>
              <span className='duration-300 ease-[cubic-bezier(0.68, -0.55, 0.265, 1.55)] delay-[50ms]'>m</span>
              <span className='duration-300 ease-[cubic-bezier(0.68, -0.55, 0.265, 1.55)] delay-100'>a</span>
              <span className='duration-300 ease-[cubic-bezier(0.68, -0.55, 0.265, 1.55)] delay-150'>i</span>
              <span className='duration-300 ease-[cubic-bezier(0.68, -0.55, 0.265, 1.55)] delay-200'>l</span>
            </div>
          </div>

          <div className='relative mt-[20px] mb-[40px]'>
            <input
              className='w-[300px] bg-transparent border-b-2 border-white border-solid outline-0 py-[15px] text-white form-input'
              required
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <div className='absolute left-[0] bottom-[20px] flex text-[#add8e6]'>
              <span className='duration-300 ease-[cubic-bezier(0.68, -0.55, 0.265, 1.55)] delay-0'>P</span>
              <span className='duration-300 ease-[cubic-bezier(0.68, -0.55, 0.265, 1.55)] delay-[50ms]'>a</span>
              <span className='duration-300 ease-[cubic-bezier(0.68, -0.55, 0.265, 1.55)] delay-100'>s</span>
              <span className='duration-300 ease-[cubic-bezier(0.68, -0.55, 0.265, 1.55)] delay-150'>s</span>
              <span className='duration-300 ease-[cubic-bezier(0.68, -0.55, 0.265, 1.55)] delay-200'>w</span>
              <span className='duration-300 ease-[cubic-bezier(0.68, -0.55, 0.265, 1.55)] delay-[250ms]'>o</span>
              <span className='duration-300 ease-[cubic-bezier(0.68, -0.55, 0.265, 1.55)] delay-300'>r</span>
              <span className='duration-300 ease-[cubic-bezier(0.68, -0.55, 0.265, 1.55)] delay-[350ms]'>d</span>
            </div>
          </div>

          <button
            className='w-full bg-[#add8e6] p-[15px] border-none rounded-[5px] active:scale-[.96]'
          >
            Login
          </button>
        </form>

        <p className='mt-[30px] mb-[16px]'>
          <span className='text-white'> Don't have an acount? </span>
          <a
            href='#'
            className='text-[#add8e6]'
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default FormWave;
