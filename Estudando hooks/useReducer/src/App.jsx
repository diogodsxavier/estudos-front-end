import { useReducer } from "react";

function App() {
    const initialState = { count: 0};

    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment': 
                return { count: state.count + 1 }; 
            case 'decrement':
                return { count: state.count - 1 };
            default:
                return state;
        }
    }

    const [state, dispath] = useReducer(reducer, initialState);

    return (
        <div>
            <p>Contagem: {state.count}</p>
            <button onClick={() => dispath({ type: 'increment' })}>+</button>
            <button onClick={() => dispath({ type: 'decrement' })}>-</button>
        </div>
    )
}

export default App;