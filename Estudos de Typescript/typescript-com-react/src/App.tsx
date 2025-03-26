import './App.css'
import Button from './components/Button'

function App() {
  return (
    <div>
      <Button theme='dark' onClick={() => console.log('Clicked')}>
        Click me
      </Button>
    </div>
  )
}

export default App
