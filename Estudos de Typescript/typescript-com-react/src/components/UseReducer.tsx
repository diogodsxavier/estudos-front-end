import React, { useReducer } from 'react';

// Define os tipos de ações
type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' };

// Define o estado inicial e seu tipo
interface State {
    count: number;
}

const initialState: State = { count: 0 };

// Define o reducer
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            throw new Error('Ação desconhecida');
    }
};

const UseReducerExample: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>Contador: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Incrementar</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrementar</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Resetar</button>
        </div>
    );
};

export default UseReducerExample;