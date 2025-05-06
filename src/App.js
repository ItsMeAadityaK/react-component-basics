import React, { useEffect } from 'react';
import { axiosInstance } from './api/axiosInstance';
import HelloWorld from './HelloWorld';

function App() {
  useEffect(() => {
    axiosInstance.post('/posts', { title: 'Test', body: 'Testing Axios POST', userId: 1 })
      .then((response) => {
        console.log('✅ API Response:', response.data);
      })
      .catch((error) => {
        if (error.code === 'ECONNABORTED') {
          console.error('❌ Request timed out');
        } else {
          console.error('❌ API Error:', error.message);
        }
      });
  }, []);

  return (
    <div className="App">
      <HelloWorld name="Aaditya" />
    </div>
  );
}

export default App;
