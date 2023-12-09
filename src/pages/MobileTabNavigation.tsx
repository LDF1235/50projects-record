import { faBookOpen, faBox, faHome, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useState } from 'react';

const tabs = ['Home', 'Work', 'Blog', 'About Us'] as const;

const iconMap = {
  Home: faHome,
  Work: faBox,
  Blog: faBookOpen,
  ['About Us']: faUsers,
};

const bgClassMap = {
  Home: 'bg-[url(https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80)]',
  Work: 'bg-[url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)]',
  Blog: 'bg-[url(https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80)]',
  ['About Us']:
    'bg-[url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80)]',
};

const MobileTabNavigation = () => {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>('Home');

  return (
    <div className='min-h-full bg-[#b48bc9] flex items-center justify-center'>
      <div className='w-[340px] h-[600px] p-1 bg-[#eeeeee] rounded-[15px]'>
        <div className='h-full flex flex-col bg-white rounded-[15px] '>
          <div
            className={clsx(
              ' transition-[background] rounded-tl-[15px] rounded-tr-[15px] duration-300 ease-linear flex-1 bg-no-repeat bg-center bg-cover',
              bgClassMap[activeTab],
            )}
          />
          <ul className='h-[60px] flex'>
            {tabs.map(x => (
              <li
                key={x}
                className={clsx(
                  activeTab === x ? 'text-[#8846aa]' : '',
                  'flex-1 flex flex-col items-center justify-center hover:text-[#8846aa] text-[#777] cursor-pointer',
                )}
                onClick={() => {
                  setActiveTab(x);
                }}
              >
                <FontAwesomeIcon icon={iconMap[x]} />
                <div className='text-[12px] mt-[2px]'>Home</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileTabNavigation;
