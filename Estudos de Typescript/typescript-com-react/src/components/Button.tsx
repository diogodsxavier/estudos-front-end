import { FunctionComponent, ReactNode, useState } from 'react';

interface ButtonOptions {
    variant: 'primary' | 'secondary';
}

interface ButtonProps {
    options?: ButtonOptions;
    theme?: 'dark' | 'light';
    onClick?: () => void;
    children?: ReactNode;
}

interface Task {
    id: number;
    completed: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({ theme, onClick, children }) => {
    const [ tasks, setTasks ] = useState<Task[]>([]);
    const [ count, setCount ] = useState<number>(0);

    setTasks([{ id: 1, completed: false }]);

    return (
        <button onClick={onClick} className={`button button-${theme}`}>{children}</button>
    )
}

export default Button;