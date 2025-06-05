import "./App.css";
import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm";
    if (num) str += "1234567890";
    if (character) str += "!@#$%&*(){}[]+";
    let pass = "";
    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, num, character]);

  useEffect(() => {
    passwordGenerator();
  }, [length, num, character, passwordGenerator]);

  const passwordRef = useRef();
  const CopyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="mx-auto text-center text-2xl  w-full max-w-max py-4 my-8 text-dark-500 bg-gray-400 shadow-md rounded-lg">
        <h1 className="mb-5 text-4xl">Password</h1>
        <div className=" flex shadow rounded-lg overflow-hidden mb-4 mx-4">
          <input
            type="text"
            className="w-full outline-none px-3 py-1 bg-green-100 rounded-lg "
            value={password}
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={CopyPasswordToClipboard}
            className="bg-blue-600 text-white px-4 py-2  active:opacity-50 rounded active:scale-85 transition transform"
          >
            copy
          </button>
        </div>
        <div className="flex px-4  text-2xl gap-x-2">
          <div className="flex items-center  text-orange-900 gap-x-1">
            <input
              type="range"
              min={6}
              max={32}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(Number(e.target.value));
              }}
            />
            <label> length : {length}</label>
          </div>
          <div className="flex  ml-4  text-orange-900 items-center gap-x-1">
            <input
              type="checkbox"
              checked={num}
              id="numberInput"
              className="scale-190 mx-2"
              onChange={() => {
                setNum((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput"> Numbers</label>
          </div>
          <div className="flex  ml-4 text-orange-900 items-center gap-x-1">
            <input
              type="checkbox"
              className="scale-190 mx-2"
              checked={character}
              id="characterInput"
              onChange={() => {
                setCharacter((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput"> Character</label>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
