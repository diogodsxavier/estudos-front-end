import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Outlet />
      <h1>Olá Mundo</h1>
    </div>
  )
}

export default App
