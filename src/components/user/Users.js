import React, { useEffect } from 'react';
import User from './User';

const Users = props => {
  const {
    users,
    todos,
    getJson,
    setUsers
  } = props;

  useEffect(() => {
    getJson('https://jsonplaceholder.typicode.com/users', setUsers);
  }, [setUsers]);

  return (
    <div>
      <h2>Users List:</h2>
      <ol>
        {users.map((user) => (
          <User
            key={user.id}
            {...user}
            usersTodos={todos.filter(usersTodo => usersTodo.userId === user.id)}
          />
        ))}
      </ol>
    </div>
  )
};

export default Users;