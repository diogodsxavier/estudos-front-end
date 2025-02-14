import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Message() {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div style={{
            background: theme === 'light' ? '#fff' : '#333',
            color: theme === 'light' ? '#fff' : '#333',
            padding: '20px',
            margin: '10px'
        }}>
            <h2>Current Theme: {theme}</h2>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

export default Message;