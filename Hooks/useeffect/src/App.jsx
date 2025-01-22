/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState([]);
  const [resourceType, setResourceType] = useState('posts');

  useEffect(() => {
    const fetchResourceType = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`);
      const responseJson = await response.json();
      setItems(responseJson);
    };

    fetchResourceType();
  }, [resourceType]);

  // const changeResourceType = (resourceType) => setResourceType(resourceType);

  return (
    <div>
      <h1>{resourceType}</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
        <button onClick={() => setResourceType('todos')}>Todos</button>
      </div>
      {items.map(item => <p>{item.id}</p>)}
    </div>
  )
}

export default App
