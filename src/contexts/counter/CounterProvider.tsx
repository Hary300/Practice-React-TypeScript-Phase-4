import { useReducer } from 'react';
import { CounterContext } from './CounterContext';
import { counterReducer, initialState } from './counterReducer';

type CounterProviderProps = {
  children: React.ReactNode;
};
export default function CounterProvider({ children }: CounterProviderProps) {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  function increment(amount: number) {
    dispatch({ type: 'INCREMENT', payload: amount });
  }

  function decrement(amount: number) {
    dispatch({ type: 'DECREMENT', payload: amount });
  }

  function reset() {
    dispatch({ type: 'RESET' });
  }

  return (
    <CounterContext.Provider
      value={{ count: state.count, increment, decrement, reset }}
    >
      {children}
    </CounterContext.Provider>
  );
}
