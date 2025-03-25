import { FunctionComponent } from "react";

interface buttonProps {
    theme?: string;
}

const Button: FunctionComponent<buttonProps> = () => {
    return <button>Click me</button>;
}

export default Button;