const { useState } = require("react");

const App = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <p>Hello! My name is {name}</p>
    </div>
  );
};

export default App;