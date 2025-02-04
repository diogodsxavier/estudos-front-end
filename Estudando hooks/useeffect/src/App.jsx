/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('Diogo');
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
      const responseJson = await response.json();
      setItem(responseJson);
    }

    fetchApi();
  }, [name]);

  return (
    <div>
      <h1>{name}</h1>
      <div>
        <button onClick={() => setName('Daniel')}>Daniel</button>
        <button onClick={() => setName('Silva')}>Silva</button>
        <button onClick={() => setName('Xavier')}>Xavier</button>
      </div>
      {item.map((item) => <p>{item.title}</p>)}
    </div>
  )

}

export default App