import Message from "./components/Message"
import './App.css';
import ThemeProvider from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Message />
    </ThemeProvider>
  )
}

export default App