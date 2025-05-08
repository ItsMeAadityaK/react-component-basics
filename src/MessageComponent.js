import React, { useState } from 'react';

function MessageComponent() {
  const [message, setMessage] = useState('Welcome!');

  return (
    <div>
      <h2>{message}</h2>
      <button onClick={() => setMessage('Thanks for clicking!')}>Click Me</button>
    </div>
  );
}

export default MessageComponent;
