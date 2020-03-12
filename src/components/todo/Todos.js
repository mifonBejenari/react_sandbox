import React from 'react';
import Todo from './Todo';

const Todos = props => {
  const {
    todos,
  } = props;
  return (
    <div>
      <h2>TODOS:</h2>
      <ul>
        {todos.map((todo) => (
          <Todo {...todo} key={todo.id}/>
        ))}
      </ul>
    </div>
  );
};

export default Todos;