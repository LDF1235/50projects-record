import clsx from 'clsx';
import React, { useState } from 'react';

const TodoList = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<{ text: string; complete: boolean }[]>(() => {
    let todos = [];
    try {
      todos = JSON.parse(localStorage.getItem('todo') || '[]');
    } catch (error) {}

    return todos;
  });

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setText('');
      const nextTodos = [...todos, { text, complete: false }];
      setTodos(nextTodos);
      localStorage.setItem('todo', JSON.stringify(nextTodos));
    }
  };

  const handleTodoClick = (i: number) => {
    const nextTodos = todos.map((x, index) => {
      if (index === i) return { ...x, complete: !x.complete };
      return x;
    });
    setTodos(nextTodos);
    localStorage.setItem('todo', JSON.stringify(nextTodos));
  };

  const handleTodoContextMenu = (e: React.MouseEvent, i: number) => {
    e.preventDefault();
    const nextTodos = todos.filter((_, index) => index !== i);
    setTodos(nextTodos);
    localStorage.setItem('todo', JSON.stringify(nextTodos));
  };

  return (
    <div className='min-h-full bg-[#f5f5f5] flex flex-col justify-center items-center'>
      <h2 className='text-[rgb(179,131,226)] opacity-40 text-[160px] font-bold'>todos</h2>
      <div className='shadow-md  mt-[108px]'>
        <input
          className='py-4 px-8 text-[32px] w-[400px] outline-[rgb(179,131,226)]'
          placeholder='Enter your todo'
          value={text}
          onChange={e => {
            setText(e.target.value);
          }}
          onKeyUp={handleKeyUp}
        />
        {todos.map((x, i) => (
          <div
            key={`${x.text}${i}`}
            onClick={() => {
              handleTodoClick(i);
            }}
            className={clsx(
              x.complete ? 'line-through text-[#b6b6b6]' : '',
              'px-8 py-4 bg-white border-solid cursor-pointer border-t-[1px] text-[24px] border-[#e5e5e5]',
            )}
            onContextMenu={e => {
              handleTodoContextMenu(e, i);
            }}
          >
            {x.text}
          </div>
        ))}
      </div>
      <p className='text-[#b5b5b5] text-center mt-12'>Left click to toggle completed.</p>
      <p className='text-[#b5b5b5] text-center'>Right click to delete todo</p>
    </div>
  );
};

export default TodoList;
