import { FunctionComponent, useRef } from "react";

interface TextFieldProps {
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const TextField: FunctionComponent<TextFieldProps> = ({ onChange }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
    const hRef = useRef<HTMLHeadingElement>(null);

    return (
        <div ref={divRef}>
            <h1 ref={hRef}>Hello word!</h1>
            <input ref={inputRef} type="text" onChange={onChange} />
        </div>
    )
};

export default TextField;