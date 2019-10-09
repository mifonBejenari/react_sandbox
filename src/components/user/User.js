import React from 'react';
import Address from './Address';

const User = props => {
  console.log(props);

  return (
    <>
      <li>
        <div>username: {props.username}</div>
        <div>name: {props.name}</div>
        <div>email: {props.email}</div>
        <Address {...props.address}/>
      </li>
    </>
  )
};

export default User;