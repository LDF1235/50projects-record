import clsx from 'clsx';
import { useState } from 'react';

interface UserInfo {
  avatar_url: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
}

const GithubProfiles = () => {
  const [searchVal, setSearchVal] = useState('');
  const [showNotFound, setShowNotFound] = useState(false);
  const [showProfiles, setShowProfiles] = useState(false);
  const [userInfo, setUserInfo] = useState<null | UserInfo>(null);
  const [repos, setRepos] = useState<{ name: string; html_url: string }[]>([]);

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;

    const username = searchVal.trim();

    if (username) fetchUserInfo(username);

    setSearchVal('');
  };

  const fetchProfiles = (username: string) => {
    fetch(`https://api.github.com/users/${username}/repos?sort=created`)
      .then(res => res.json())
      .then(res => {
        setRepos(res.map((x: Record<string, unknown>) => ({ name: x.name, html_url: x.html_url })));
      })
      .catch(() => {
        setRepos([]);
      });
  };

  const fetchUserInfo = (username: string) => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(res => {
        if (res.message === 'Not Found') {
          setShowNotFound(true);
          setShowProfiles(false);
        } else {
          fetchProfiles(username),
            setUserInfo({
              name: username,
              bio: res.bio,
              avatar_url: res.avatar_url,
              followers: res.followers,
              following: res.following,
              public_repos: res.public_repos,
            });
          setShowProfiles(true);
        }
      })
      .catch(() => {
        setShowNotFound(true);
        setShowProfiles(false);
      });
  };

  return (
    <div className='min-h-full flex items-center justify-center bg-[#2A2C70]'>
      <div className='max-w-[700px] w-full'>
        <input
          placeholder='Search a Github User'
          className='w-full placeholder:text-white outline-none p-4 text-white bg-[#4c2885] rounded-[10px] shadow-[0_5px_10px_rgba(154,160,185,0.05),0_15px_40px_rgba(0,0,0,0.1)]'
          onKeyUp={handleInputKeyDown}
          value={searchVal}
          onChange={e => {
            setSearchVal(e.target.value);
          }}
        />

        {showNotFound && (
          <p className='mt-8 max-w-[600px] font-["Poppins",sans-serif] mx-auto text-white px-12 py-14 text-[32px] font-bold text-center bg-[#4c2885] rounded-[10px] shadow-[0_5px_10px_rgba(154,160,185,0.05),0_15px_40px_rgba(0,0,0,0.1)]'>
            No profile with this username
          </p>
        )}

        <div
          className={clsx(
            showProfiles ? 'flex' : 'hidden',
            'max-w-[600px] mx-auto mt-8 p-12 bg-[#4c2885] rounded-[10px] shadow-[0_5px_10px_rgba(154,160,185,0.05),0_15px_40px_rgba(0,0,0,0.1)]',
          )}
        >
          <img
            className='w-[150px] h-[150px] shrink-0 grow-0 rounded-full border-[10px] border-solid border-[#2A2C70]'
            src={userInfo?.avatar_url}
          />

          <div className='ml-8'>
            <p className='text-white font-bold text-[24px]'>{userInfo?.name}</p>

            <div className='mt-5 text-white'>{userInfo?.bio}</div>

            <div className='text-white font-bold mt-4'>
              <span>{userInfo?.followers}</span>
              <span className='ml-2'>Followers</span>

              <span className='ml-4'>{userInfo?.following}</span>
              <span className='ml-2'>Following</span>

              <span className='ml-4'>{userInfo?.followers}</span>
              <span className='ml-2'>Repos</span>
            </div>

            <div className='mt-4 flex flex-wrap gap-1'>
              {repos.map(x => (
                <a
                  key={x.name}
                  href={x.html_url}
                  target='_blank'
                  className=' text-[12px] py-1 px-2 bg-[#2A2C70] text-white'
                >
                  {x.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubProfiles;
