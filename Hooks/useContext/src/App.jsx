import { createContext, useContext } from "react";

function App() {
    const ThemeContext = createContext('Light');

    const ChildComponent = () => {
        const theme = useContext(ThemeContext);
        return <p>O tema atual é: {theme}</p>
    }

    return (
        <ThemeContext.Provider value='Dark'>
            <ChildComponent />
        </ThemeContext.Provider>
    )
}

export default App;