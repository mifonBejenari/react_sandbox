import React, {
  useState
} from 'react';
import TodoForm from '../form/TodoForm';

const Todo = props => {
  const {
    title,
    completed,
  } = props;

  const [formState, setFormState] = useState(false);

  const clickHandler = () => {
    setFormState(!formState);
  };

  return (
    <li className={completed === true ? 'todo--completed' : ''}>
      <h4>{title}</h4>
      <button onClick={clickHandler}>E</button>
      {formState ? <TodoForm {...props}/> : null}
    </li>
  )
};

export default Todo;
