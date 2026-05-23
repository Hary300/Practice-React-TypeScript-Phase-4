import { useReducer } from 'react';
import { initialState, counterReducer } from './counterReducer';
import { decrement, increment, reset } from './counterAction';

export default function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  console.log(dispatch);
  return (
    <div>
      <p>{state.count}</p>
      <button
        onClick={() => dispatch(decrement(1))}
        className='p-2 cursor-pointer bg-red-500 rounded-lg text-white'
      >
        -
      </button>
      <button
        onClick={() => dispatch(increment(1))}
        className='p-2 cursor-pointer bg-green-500 rounded-lg text-white'
      >
        +
      </button>
      <button
        onClick={() => reset()}
        className='p-2 cursor-pointer bg-blue-500 rounded-lg text-white'
      >
        Reset
      </button>
    </div>
  );
}
