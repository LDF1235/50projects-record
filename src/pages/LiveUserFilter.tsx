import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';

interface User {
  avatar: string;
  name: string;
  location: string;
}

let timer: number;

const LiveUserFilter = () => {
  const [searchVal, setSearchVal] = useState('');
  const [filteredResult, setFilteredResult] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const originalUsersRef = useRef<User[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchVal(value);

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      setFilteredResult(
        originalUsersRef.current.filter(x => {
          return value.trim() ? x.name.includes(value) || x.location.includes(value) : true;
        }),
      );
    }, 600);
  };

  useEffect(() => {
    fetch('https://randomuser.me/api?results=50')
      .then(res => {
        return res.status === 200 ? res.json() : Promise.reject(res);
      })
      .then(res => {
        const result = res.results.map((x: Record<string, any>) => ({
          avatar: x.picture.large,
          name: `${x.name.first} ${x.name.last}`,
          location: `${x.location.city},${x.location.country}`,
        }));
        setFilteredResult(result);
        originalUsersRef.current = result;
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className='min-h-full bg-[#f8f9fd] flex items-center justify-center'>
      <div className='rounded-md overflow-hidden w-[300px] shadow-[3px_3px_10px_rgba(0,0,0,.2)]'>
        <div className='py-[30px] px-5 bg-[#405bd8] '>
          <h2 className='text-white font-bold'>Live User Filter</h2>
          <p className='text-[13px] opacity-80 text-white mt-2'>Search by name and/or location</p>
          <input
            className='bg-[rgba(0,0,0,.3)] text-white border-none outline-none w-full rounded-full mt-5 py-[10px] px-[15px] text-[14px]'
            placeholder='Search'
            onChange={handleInputChange}
            value={searchVal}
          />
        </div>
        <ul className='h-[400px] w-full overflow-auto bg-white'>
          {loading ? (
            <div className='h-full flex items-center justify-center'>loading...</div>
          ) : filteredResult.length ? (
            filteredResult.map((x, i) => (
              <li
                key={`${x.name}${i}`}
                className={clsx(
                  i < filteredResult.length - 1 ? 'border-solid border-[#eee] border-b-[1px] ' : '',
                  'p-5 flex',
                )}
              >
                <img
                  src={x.avatar}
                  alt='avatar'
                  className='w-[50px] h-[50px] rounded-full'
                />
                <div className='ml-2.5'>
                  <div className='text-[16px] font-bold'>{x.name}</div>
                  <div className='text-[12px] mt-3'>{x.location}</div>
                </div>
              </li>
            ))
          ) : (
            <div className='h-full flex items-center justify-center'>No Result</div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default LiveUserFilter;
