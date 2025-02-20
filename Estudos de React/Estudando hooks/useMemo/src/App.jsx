/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import { useMemo, useState } from "react";

function App() {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState('');

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  return (
    <div>
      <p>{number}</p>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => setNumber(2)}>Increment</button>
      <p>text: {text}</p>
    </div>
  )
}

function slowFunction(num) {
  console.log('Slow function is being called!');
  for (let i = 0; i < 10000; i++) {}
  return num * 2;  
};

export default App