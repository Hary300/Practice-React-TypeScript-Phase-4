type State = {
  count: number;
};

type Action =
  | { type: 'increment'; payload: number }
  | { type: 'decrement'; payload: number }
  | { type: 'reset' };

export const initialState: State = {
  count: 0,
};

export function counterReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + action.payload,
      };
    case 'decrement':
      return {
        count: state.count - action.payload,
      };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}
