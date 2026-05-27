import { useCallback, useState } from 'react';
// import { useMemo,  } from 'react';
import { Child } from './Child';

export default function Parent() {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState('open');

  // Sending object props without useMemo
  // const user = { name: 'John' };

  // useMemo is for preventing Child rendered bcz of Sending Object as Props
  // const user = useMemo(() => {
  //   return {
  //     name: 'John',
  //   };
  // }, []);

  // Sending function props Without useCallback
  // function handleClick() {
  //   setOpen((prev) => (prev === 'open' ? 'close' : 'open'));
  // }

  // useCallback is for preventing Child rendered bcz of sending function as Props
  const handleClick = useCallback(() => {
    setOpen((prev) => (prev === 'open' ? 'close' : 'open'));
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>

      <p>{open}</p>
      <Child handleClick={handleClick} />
    </div>
  );
}
