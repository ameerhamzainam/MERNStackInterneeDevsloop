import React, { useState, useEffect } from'react';
import axios from 'axios';

function UserData( ) {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);  //expression
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
     .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
     .catch(error => {
        console.error(error);
      });
  }, []);

if (loading) {
  return (
    <div className='text-4xl bg-amber-500 '>
      Loading...
    </div>
  );
}

return (
  <div>
    <h1>Users</h1>
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  </div>
);
}
export default UserData;