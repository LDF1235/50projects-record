import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

const NotesApp = () => {
  const [notes, setNotes] = useState<{ id: string; text: string }[]>(() => {
    const notes = localStorage.getItem('notes');

    if (!notes) return [];

    try {
      const notesArr = JSON.parse(notes);

      if (Array.isArray(notesArr) && notesArr.every(x => typeof x === 'string')) {
        return notesArr.map(x => ({ id: nanoid(), text: x }));
      }
    } catch (err) {}

    return [];
  });
  const [editId, setEditId] = useState('');

  useEffect(() => {
    if (notes.length) {
      localStorage.setItem('notes', JSON.stringify(notes.map(x => x.text)));
    } else {
      localStorage.removeItem('notes');
    }
  }, [notes]);

  return (
    <div className='min-h-full flex flex-wrap gap-5 pt-10 px-4 pb-4 bg-[#89DBF2]'>
      <button
        onClick={() => {
          setNotes(x => [...x, { text: '', id: nanoid() }]);
        }}
        className='px-3 py-1 z-[1] text-[14px] text-white bg-[#9ec862] rounded fixed right-4 top-4 '
      >
        <FontAwesomeIcon icon={faPlus} />
        <span className='ml-2'>Add note</span>
      </button>

      {notes.map((x, i) => (
        <div
          className='w-[400px]'
          key={x.id}
        >
          <div className='h-[40px] bg-[#9ec862] flex items-center justify-end pr-4 text-white'>
            <FontAwesomeIcon
              onClick={() => {
                setEditId(prev => (prev === x.id ? '' : x.id));
              }}
              className='cursor-pointer'
              icon={faEdit}
            />
            <FontAwesomeIcon
              icon={faTrash}
              className='ml-3 cursor-pointer'
              onClick={() => {
                setNotes(prev => prev.filter((_, index) => index !== i));
              }}
            />
          </div>
          <div className='h-[400px] bg-white'>
            {editId === x.id ? (
              <textarea
                value={x.text}
                autoFocus
                className='w-full h-full p-2 resize-none outline-none'
                onChange={e => {
                  setNotes(prev => prev.map((x, index) => (index === i ? { ...x, text: e.target.value } : x)));
                }}
              />
            ) : (
              <div className='h-full break-words overflow-auto p-2'>{x.text}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotesApp;
