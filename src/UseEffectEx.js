import React, { useEffect, useState } from 'react';

function UseEffectEx() {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("🟢 Component mounted");

    return () => {
      console.log("🔴 Component unmounted");
    };
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await res.json();
      setData(data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };
  

  return (
    <div style={{ padding: '1rem' }}>
      <h2>useEffect Demo</h2>
      <button onClick={fetchData}>Fetch Post</button>
      {data && (
        <div>
            <p>Task: {data.title}</p>
            <p>Completed: {data.completed ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
}

export default UseEffectEx;
