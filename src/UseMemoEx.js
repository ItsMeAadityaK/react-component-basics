import React, { useState, useMemo } from 'react';

function expensiveCalculation(num) {
  console.log(' Calculating...');
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result += num * Math.random();
  }
  return result;
}

function UseMemoEx() {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState('');

  const memoizedResult = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Expensive Calculation Example</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          const value = e.target.value;
          setNumber(value ? parseInt(value, 10) : 0);
        }}
      />
      <p>Calculated Value: {memoizedResult}</p>

      <input
        type="text"
        value={text}
        placeholder="Type something"
        onChange={(e) => setText(e.target.value)}
      />
      <p>Text: {text}</p>
    </div>
  );
}

export default UseMemoEx;
