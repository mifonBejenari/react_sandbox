import React from 'react';

const Todo = props => {
  const {
    title,
    completed,
  } = props;

  return (
    <li className={completed === true ? 'todo--completed' : ''}>
      <h4>{title}</h4>
    </li>
  )
};

export default Todo;
