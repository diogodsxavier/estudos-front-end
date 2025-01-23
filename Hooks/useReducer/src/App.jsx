import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                counter: state.counter + 1
            }

        case 'decrement':
            return {
                counter: state.counter - 1
            } 
    }
};

function App() {
    const [state, dispath] = useReducer(reducer, { counter: 0 });
    return (
        <div>
            <p>{state.counter}</p>
            <button onClick={() => dispath({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispath({ type: 'decrement'})}>Decrement</button>
        </div>
    )
};

export default App;