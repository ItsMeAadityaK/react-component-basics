/*import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;
*/

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, selectCount } from './features/counterSlice';

function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const getMessage = () => {
    if (count > 10) return ' Going strong!';
    if (count > 5) return ' Keep it up!';
    return ' Let’s get started!';
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Redux Counter</h2>
      <p>Count: {count}</p>
      <p>{getMessage()}</p>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default Counter;

