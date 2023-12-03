import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const messageOptions = ['Message One', 'Message Two', 'Message Three'];
const colorOptions = ['red', 'green', 'orange'];

const ToastNotification = () => {
  const messageContainerRef = useRef<HTMLDivElement | null>(null);

  const [messages, setMessages] = useState<{ text: string; color: string }[]>([]);

  if (!messageContainerRef.current) {
    const container = document.createElement('div');
    messageContainerRef.current = container;
    Object.assign(container.style, {
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    });
    document.body.append(container);
  }

  useEffect(() => {
    return () => {
      if (messageContainerRef.current) document.body.removeChild(messageContainerRef.current);
    };
  }, []);

  const handleToast = () => {
    const messageIndex = Math.floor(Math.random() * 3);
    const colorIndex = Math.floor(Math.random() * 3);

    setMessages(prev => [{ text: messageOptions[messageIndex], color: colorOptions[colorIndex] }, ...prev]);

    setTimeout(() => {
      setMessages(prev => {
        const next = [...prev];
        next.pop();
        return next;
      });
    }, 3000);
  };

  return (
    <div className='min-h-full flex items-center justify-center bg-[#623697]'>
      <button
        className='p-4 bg-white rounded text-[#623697] text-[14px] active:scale-[.97]'
        onClick={handleToast}
      >
        Show Notification
      </button>

      {createPortal(
        <>
          {messages.map((x, i) => (
            <div
              key={`${x}${i}`}
              style={{ color: x.color }}
              className='shrink-0 grow-0 py-4 px-[30px] mt-2 bg-white rounded text-center'
            >
              {x.text}
            </div>
          ))}
        </>,
        messageContainerRef.current,
      )}
    </div>
  );
};

export default ToastNotification;
