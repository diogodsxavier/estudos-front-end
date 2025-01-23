import { useRef } from "react";

function App() {
  const inputRef = useRef();
  const focusInput = () => inputRef.current.focus();
  return (
    <div>
      <input ref={inputRef} type="text"/>
      <button onClick={focusInput}>Focar no Input</button>
    </div>
  )
}

export default App