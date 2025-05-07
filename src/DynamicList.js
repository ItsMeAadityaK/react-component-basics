import React, { useState } from 'react';

function DynamicList() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Dynamic List</h2>
      <input
        type="text"
        placeholder="Enter item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddItem}>Add</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DynamicList;
