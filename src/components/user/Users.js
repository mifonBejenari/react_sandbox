import React, { useState, useEffect } from 'react';
import User from './User';

const Users = props => {

  const [users, setUsers] = useState([]);

  const getJson = (link) => {
    fetch(link)
      .then(response => response.json())
      .then(json =>  setUsers(json)
      );
  };

  useEffect(() => {
    getJson('https://jsonplaceholder.typicode.com/users');
  }, []);

  return (
    <>
      <h1>Users</h1>
      <ol>
        {users.map((user) => (
          <User {...user} key={user.id}/>
        ))}
      </ol>
    </>
  )
};

export default Users;