import { FunctionComponent, ReactNode, useMemo, useState } from 'react';

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

const Button: FunctionComponent<ButtonProps> = ({ theme, children }) => {
    // UseState
    const [tasks, setTasks] = useState<Task[]>([]);
    const [count, setCount] = useState<number>(0);

    setTasks([{ id: 1, completed: false }]);

    // UseMemo
    const completedTasks: boolean[] = useMemo(() => {
        return tasks
            .filter(task => task.completed)
            .map(task => task.completed);
    }, [tasks]);
    console.log(completedTasks);

    // UseCallback
    const handleClick: () => void = () => {
        setCount(count + 1);
    };
    console.log(handleClick);

    // UseEffect
    const handleButtonClick: () => void = () => {
        console.log('Button clicked!');
    }

    return (
        <button
            onClick={handleButtonClick}
            className={`button button-${theme}`}>
            {children}
        </button>
    )
}

export default Button;