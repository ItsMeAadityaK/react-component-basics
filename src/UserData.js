import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserData() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('/api/user').then((response) => {
      setUser(response.data);
    });
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

export default UserData;
