import { createContext } from 'react';

type CounterContextType = {
  count: number;
  increment: (amount: number) => void;
  decrement: (amount: number) => void;
  reset: () => void;
};

export const CounterContext = createContext<CounterContextType | null>(null);
