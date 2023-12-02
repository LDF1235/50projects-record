import clsx from 'clsx';
import { useRef, useState } from 'react';

const DragAndDrop = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [dragEnterMap, setDragEnterMap] = useState<Record<string, boolean>>({});

  return (
    <div className='min-h-full flex items-center justify-center bg-[#4F83B2] '>
      <div className='flex gap-x-5'>
        <div
          onDragEnter={e => {
            e.preventDefault();
            setDragEnterMap(prev => ({ ...prev, [4]: true }));
          }}
          onDragOver={e => {
            e.preventDefault();
          }}
          onDrop={e => {
            if (wrapperRef.current) {
              (e.target as HTMLDivElement).append(wrapperRef.current);
              wrapperRef.current.classList.remove('invisible', 'border-2', 'border-white', 'border-solid');
            }
            setDragEnterMap(prev => ({ ...prev, [4]: false }));
          }}
          onDragLeave={() => {
            setDragEnterMap(prev => ({ ...prev, [4]: false }));
          }}
          className={clsx(
            dragEnterMap[4] ? 'border-dashed border-white bg-black' : 'border-solid border-black bg-white',
            'w-[150px] h-[150px] border-[3px]',
          )}
        >
          <div
            ref={wrapperRef}
            draggable
            onDragStart={() => {
              wrapperRef.current?.classList.add('border-2', 'border-white', 'border-solid');
              requestAnimationFrame(() => {
                wrapperRef.current?.classList.add('invisible');
              });
            }}
            onDragEnd={() => {
              wrapperRef.current?.classList.remove('invisible', 'border-2', 'border-white', 'border-solid');
            }}
            className={clsx(
              'h-full box-border',
              'bg-[url(https://source.unsplash.com/random/150x150)] bg-center bg-no-repeat bg-cover',
            )}
          ></div>
        </div>
        {Array.from({ length: 4 }, (_, i) => (
          <div
            key={i}
            onDragEnter={e => {
              e.preventDefault();
              setDragEnterMap(prev => ({ ...prev, [i]: true }));
            }}
            onDragOver={e => {
              e.preventDefault();
            }}
            onDrop={e => {
              if (wrapperRef.current) {
                (e.target as HTMLDivElement).append(wrapperRef.current);
              }
              setDragEnterMap(prev => ({ ...prev, [i]: false }));
            }}
            onDragLeave={() => {
              setDragEnterMap(prev => ({ ...prev, [i]: false }));
            }}
            className={clsx(
              dragEnterMap[i] ? 'border-dashed border-white bg-black' : 'border-solid border-black bg-white',
              'w-[150px] h-[150px] border-[3px]',
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default DragAndDrop;
