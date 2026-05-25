import useCounter from '../contexts/counter/useCounter';

export default function Counter() {
  const { count, decrement, increment, reset } = useCounter();
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => decrement(1)}>-</button>
      <button onClick={() => increment(1)}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
