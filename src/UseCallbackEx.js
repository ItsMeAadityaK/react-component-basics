// src/UseCallbackExample.js
import React, { useState, useCallback } from 'react';

const Child = React.memo(({ onClick }) => {
  console.log('🔁 Child re-rendered');
  return (
    <div>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
});

function UseCallbackEx() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // ✅ useCallback to memoize the function
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <Child onClick={handleClick} />
      <button onClick={() => setOtherState((prev) => prev + 1)}>
        Update Other State
      </button>
    </div>
  );
}

export default UseCallbackEx;
