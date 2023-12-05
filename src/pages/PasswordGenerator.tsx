import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import shuffle from 'lodash.shuffle';
import { useState } from 'react';

const randomUpperLetters = () => {
  return String.fromCodePoint(Math.floor(Math.random() * 26 + 65));
};

const randomLowerLetters = () => {
  return String.fromCodePoint(Math.floor(Math.random() * 26 + 97));
};

const randomNumber = () => {
  return Math.floor(Math.random() * 10).toString();
};

const randomSymbol = () => {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [passwordLen, setPasswordLen] = useState(20);
  const [hasUpperLetters, setHasUpperLetters] = useState(true);
  const [hasLowerLetters, setHasLowerLetters] = useState(true);
  const [hasNumbers, setHasNumbers] = useState(true);
  const [hasSymbols, setHasSymbols] = useState(true);

  const handleGeneratePassword = () => {
    if ([hasUpperLetters, hasLowerLetters, hasNumbers, hasSymbols].every(x => !x)) return;

    const randomFns = [randomUpperLetters, randomLowerLetters, randomNumber, randomSymbol].filter(
      (_, i) => [hasUpperLetters, hasLowerLetters, hasNumbers, hasSymbols][i],
    );

    let i = 0;
    const passwords = [];

    while (i < randomFns.length) {
      passwords.push(randomFns[i]());
      i++;
    }

    while (i < passwordLen) {
      passwords.push(randomFns[Math.floor(Math.random() * randomFns.length)]());
      i++;
    }

    setPassword(shuffle(passwords).join(''));
  };

  const handleCopy = () => {
    const clipboard = navigator.clipboard;

    if (!clipboard || !password) return;

    clipboard
      .writeText(password)
      .then(() => {
        alert('Password copied to clipboard!');
      })
      .catch(() => {
        alert('Something went wrong!');
      });
  };

  return (
    <div className='min-h-full bg-[#3B3E96] flex items-center justify-center'>
      <div className='p-5 w-[350px] bg-[#23255A]'>
        <h2 className='font-bold text-white text-center text-[24px]'>Password Generator</h2>

        <div className='flex h-[48px] p-1 bg-[#151636] mt-4'>
          <div className='overflow-auto flex-1 text-white break-all'>{password}</div>

          <button
            onClick={handleCopy}
            className='w-10 h-10 shrink-0 grow-0 flex justify-center items-center text-white bg-[#3B3E96]'
          >
            <FontAwesomeIcon icon={faClipboard} />
          </button>
        </div>

        <div className='text-white flex justify-between mt-4'>
          <span>Password Length</span>
          <input
            type='number'
            min={20}
            max={100}
            value={passwordLen}
            onChange={e => {
              setPasswordLen(parseInt(e.target.value));
            }}
            className='text-black outline-none'
          />
        </div>

        <div className='text-white flex justify-between mt-4'>
          <span>Include uppercase letters</span>
          <input
            type='checkbox'
            checked={hasUpperLetters}
            onChange={e => {
              setHasUpperLetters(e.target.checked);
            }}
          />
        </div>

        <div className='text-white flex justify-between mt-4'>
          <span>Include lowercase letters</span>
          <input
            type='checkbox'
            checked={hasLowerLetters}
            onChange={e => {
              setHasLowerLetters(e.target.checked);
            }}
          />
        </div>

        <div className='text-white flex justify-between mt-4'>
          <span>Include numbers</span>
          <input
            type='checkbox'
            checked={hasNumbers}
            onChange={e => {
              setHasNumbers(e.target.checked);
            }}
          />
        </div>

        <div className='text-white flex justify-between mt-4'>
          <span>Include symbols</span>
          <input
            type='checkbox'
            checked={hasSymbols}
            onChange={e => {
              setHasSymbols(e.target.checked);
            }}
          />
        </div>

        <button
          onClick={handleGeneratePassword}
          className='w-full active:scale-[.97] text-white py-[6px] rounded mt-4 bg-[#3B3E96]'
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
