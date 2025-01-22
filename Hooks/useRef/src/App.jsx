import { useRef } from "react";
// import { useState } from "react";

const App = () => {
  // const [name, setName] = useState('');

  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} type="text" /> 
      <button onClick={focusInput}>Focar no Input.</button>
    </div>
  );
};

export default App;