import { useEffect, useState } from 'react';

const coverUrl =
  'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80';
const avatarUrl = 'https://randomuser.me/api/portraits/men/45.jpg';

const ContentPlaceholder = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cover = new Image();
    const avatar = new Image();

    Promise.all([
      new Promise<void>(resolve => {
        cover.onload = function () {
          resolve();
        };
        cover.src = coverUrl;
      }),
      new Promise<void>(resolve => {
        avatar.onload = function () {
          resolve();
        };
        avatar.src = avatarUrl;
      }).then(() => {
        setIsLoading(false);
      }),
    ]);
  }, []);

  return (
    <div className='min-h-full bg-[#ECF0F1] flex items-center justify-center font-["Roboto",sans-serif]'>
      <div className='w-[350px] shadow-[0_2px_10px_rgba(0,0,0,0.2)] rounded-[10px] overflow-hidden'>
        {isLoading ? (
          <>
            <div className='h-[200px] mc-skeleton' />
            <div className='p-[30px]'>
              <div className='mc-skeleton h-[14px]' />
              <div className='mt-2 mc-skeleton h-[14px]' />
              <div className='mt-2 mc-skeleton w-[40%] h-[14px]' />

              <div className='flex items-center mt-6'>
                <div className='w-[40px] h-[40px] rounded-full overflow-hidden mc-skeleton' />
                <div className='ml-3'>
                  <div className=' mc-skeleton w-[80px] h-[14px]' />
                  <div className='mt-2 mc-skeleton w-[80px] h-[14px]' />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <img
              className='w-full h-[200px]'
              src='https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80'
            />
            <div className='p-[30px]'>
              <h3 className='font-bold'>Lorem ipsum dolor sit amet</h3>

              <p className='mb-[20px] mt-[10px] text-[16px]  '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis
              </p>

              <div className='flex items-center'>
                <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                  <img
                    src='https://randomuser.me/api/portraits/men/45.jpg'
                    className='w-full'
                  />
                </div>

                <div className='ml-3'>
                  <div className='font-bold'>John Doe</div>
                  <div className='text-[13px]'>Oct 08, 2020</div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContentPlaceholder;
