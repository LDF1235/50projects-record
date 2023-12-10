import { useState } from 'react';

const PasswordStrengthBackground = () => {
  const [password, setPassword] = useState('');

  return (
    <div className=' relative  min-h-full flex items-center justify-center overflow-hidden '>
      <div
        className=' absolute -left-5 -top-5 -right-5 -bottom-5 bg-[url(https://images.unsplash.com/photo-1556745757-8d76bdb6984b)] bg-no-repeat bg-center bg-cover '
        style={{ filter: `blur(${20 - password.length * 2}px)` }}
      />
      <div className='p-8 bg-white rounded-md relative z-10'>
        <h1 className=' text-[32px] text-center'>Image Password Strength</h1>
        <p className='text-[14px] text-center'>Change the password to see the effect</p>
        <label htmlFor='email'>Email:</label>
        <input
          id='email'
          placeholder='Enter Email'
          className='block outline-none border-[1px] rounded-md w-full p-2 my-2 border-solid border-gray-300'
        />
        <label htmlFor='password'>Password:</label>
        <input
          id='password'
          placeholder='Enter Password'
          type='password'
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          className='block outline-none border-[1px] rounded-md w-full p-2 mt-2 border-solid border-gray-300'
        />

        <button className='bg-black block w-full py-2 text-white rounded-md mt-8 active:scale-95'>Submit</button>
      </div>
    </div>
  );
};

export default PasswordStrengthBackground;
