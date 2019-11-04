import React from 'react';
import Contacts from './Contacts';
import Company from './Company'
import Todo from '../todo/Todo';

const User = props => {
  const {
    username,
    name,
    email,
    address,
    company,
    usersTodos,
  } = props;

  return (
    <li>
      <h3>Personal Information:</h3>
      <div>Username: {username}</div>
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <Contacts {...address} />
      <Company {...company}/>
      <h3>TODOS:</h3>
      <ul>
        {usersTodos.map(todo => (
          <Todo {...todo} key={todo.id}/>
        ))}
      </ul>
    </li>
  )
};

export default User;