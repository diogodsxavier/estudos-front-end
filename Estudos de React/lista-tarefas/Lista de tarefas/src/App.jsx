import { useState } from "react";

function App() {
  // STATE
  const [message, setMessage] = useState('Olá Mundo!');
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => {
        setMessage('Olá, fui clicado.')
      }}> Botão </button>
    </div>
  )
}

export default App;
