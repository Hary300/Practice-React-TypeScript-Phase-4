type Action =
  | { type: 'increment'; payload: number }
  | { type: 'decrement'; payload: number }
  | { type: 'reset' };

export function increment(amount: number): Action {
  return {
    type: 'increment',
    payload: amount,
  };
}

export function decrement(amount: number): Action {
  return {
    type: 'decrement',
    payload: amount,
  };
}

export function reset(): Action {
  return {
    type: 'reset',
  };
}
