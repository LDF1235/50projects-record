import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const IncrementingCounter = () => {
  const [followersMap, setFollowersMap] = useState({
    twitter: 0,
    youtube: 0,
    facebook: 0,
  });

  useEffect(() => {
    let count = 0;

    const startTimer = () => {
      count++;

      setTimeout(() => {
        setFollowersMap(prev => ({
          twitter: prev.twitter + 120 >= 12000 ? 12000 : prev.twitter + 120,
          youtube: prev.youtube + 50 >= 5000 ? 5000 : prev.youtube + 50,
          facebook: prev.facebook + 75 >= 7500 ? 7500 : prev.facebook + 75,
        }));

        if (count < 100) {
          startTimer();
        }
      }, 30);
    };

    startTimer();
  }, []);

  return (
    <div className=' flex items-center justify-center h-full bg-[#8846AA] font-[Roboto,sans-serif]'>
      <div className='flex items-center gap-8'>
        <div className='flex flex-col items-center text-white'>
          <FontAwesomeIcon
            icon={faTwitter}
            className='text-[40px]'
          />
          <div className='text-[60px]'>{followersMap.twitter}</div>
          <p className='text-base'>Twitter Followers</p>
        </div>

        <div className='flex flex-col items-center text-white'>
          <FontAwesomeIcon
            icon={faYoutube}
            className='text-[40px]'
          />
          <div className='text-[60px]'>{followersMap.youtube}</div>
          <p className='text-base'>YouTube Subscribers</p>
        </div>

        <div className='flex flex-col items-center text-white'>
          <FontAwesomeIcon
            icon={faFacebook}
            className='text-[40px]'
          />
          <div className='text-[60px]'>{followersMap.facebook}</div>
          <p className='text-base'>Facebook Fans</p>
        </div>
      </div>
    </div>
  );
};

export default IncrementingCounter;
