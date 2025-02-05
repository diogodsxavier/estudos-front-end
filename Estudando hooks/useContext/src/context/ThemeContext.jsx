/* eslint-disable react/prop-types */
import { useContext } from "react";

function ThemeContext({ children }) {
    const ContextTheme = useContext();
    const [theme, setTheme] = ('light');
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    return (
        <ContextTheme.provider value={{ theme, toggleTheme }} >
            {children}
        </ContextTheme.provider>
    )
};

export default ThemeContext;