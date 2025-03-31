import './App.css'
import Button from './components/Button'
import TextField from './components/TextField'

function App() {
  return (
    <div>
      <Button theme='light' onClick={() => console.log('Button clicked!')}>
        Click me
      </Button>
      
      <TextField onChange={e => e.target.value } />
    </div>
  )
}

export default App
