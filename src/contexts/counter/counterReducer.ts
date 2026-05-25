type State = {
  count: number;
};

export type Action =
  | { type: 'INCREMENT'; payload: number }
  | { type: 'DECREMENT'; payload: number }
  | { type: 'RESET' };

export const initialState: State = {
  count: 0,
};

export function counterReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.payload,
      };
    case 'DECREMENT':
      return {
        count: state.count - action.payload,
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}
