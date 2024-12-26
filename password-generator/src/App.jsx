import { useState, useCallback, useEffect, useRef } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  // useRef Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "$%^&*@#+=";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    // passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Display "Copied!" for 2 seconds
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className='flex justify-center items-center min-h-screen bg-wenge w-full'>
      <div className='bg-white p-8 rounded-lg shadow-md w-96'>
        <h1 className='text-2xl font-bold mb-4 text-center'>
          Password Generator
        </h1>
        <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-2 px-4 text-gray-700'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className={`bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-r-lg ${
              copied ? "bg-green-500" : ""
            }`}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <div className='flex items-center space-x-4 mt-4'>
          <input
            type='range'
            min={6}
            max={20}
            value={length}
            className='w-40'
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <span className='text-gray-600'>Length: {length}</span>
        </div>
        <div className='flex items-center space-x-4 mt-4'>
          <input
            type='checkbox'
            id='numberInput'
            checked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            className='text-blue-500 accent-blue-500'
          />
          <label htmlFor='numberInput' className='text-gray-600'>
            Numbers
          </label>
        </div>
        <div className='flex items-center space-x-4 mt-4'>
          <input
            type='checkbox'
            id='characterInput'
            checked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            className='text-blue-500 accent-blue-500'
          />
          <label htmlFor='characterInput' className='text-gray-600'>
            Characters
          </label>
        </div>
      </div>
    </div>
  );
};

export default App;
