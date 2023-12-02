import clsx from 'clsx';

const KineticLoader = () => {
  return (
    <div className=' flex items-center justify-center min-h-full bg-[#2E3E4F]'>
      <div
        className={clsx(
          'relative -translate-y-[50px]',
          'before:content-[""] before:animate-[kinetic-loader-b_2s_linear_infinite] before:absolute before:left-0 before:top-0   w-0 h-0 before:border-[50px] before:border-transparent before:border-solid before:rotate-90 before:border-b-white',
          'after:content-[""] after:animate-[kinetic-loader-a_2s_linear_infinite_.5s] after:absolute after:left-0 after:top-0   w-0 h-0 after:border-[50px] after:border-transparent after:border-solid after:border-b-white',
        )}
      ></div>
    </div>
  );
};

export default KineticLoader;
