/** =========================
  WITHOUT MEMO
=========================== */
// export default function Child() {
//   console.log('Child render');
//   return <div>Hello Child</div>;
// }

/** =========================
  WITH MEMO
=========================== */
// import { memo } from 'react';

// export const Child = memo(function Child() {
//   console.log('Child render');

//   return <div>Hello Child</div>;
// });

/** =========================
  WITH MEMO + OBJECT PROPS (Always Render, need useMemo in parent component)
=========================== */
// import { memo } from 'react';

// type ChildProps = {
//   user: {
//     name: string;
//   };
// };

// export const Child = memo(function Child({ user }: ChildProps) {
//   console.log('Child render');

//   return <div>Hello {user.name}</div>;
// });

/** =========================
  WITH MEMO + FUNCTION PROPS (Always Render, need useCallback in parent component)
=========================== */
import { memo } from 'react';

type ChildProps = {
  handleClick: () => void;
};

export const Child = memo(function Child({ handleClick }: ChildProps) {
  console.log('Child render');

  return <button onClick={handleClick}>Click</button>;
});
