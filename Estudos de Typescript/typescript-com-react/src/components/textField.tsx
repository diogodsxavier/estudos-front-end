import { useRef } from "react";

const textField = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div>
            <input ref={inputRef} type="text" />
        </div>
    )
};

export default textField;