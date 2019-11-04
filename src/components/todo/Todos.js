import React, { useEffect } from 'react';
import Todo from './Todo';

const Todos = props => {
  const {
    todos,
    getJson,
    setTodos,
  } = props;

  useEffect(() => {
    getJson('https://jsonplaceholder.typicode.com/todos', setTodos)
  }, [setTodos]);

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