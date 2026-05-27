import { useState } from 'react';

export default function BuggyCounter() {
  const [count, setCount] = useState(0);

  if (count >= 5) {
    throw new Error('Counter crashed, Please refresh');
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </>
  );
}
