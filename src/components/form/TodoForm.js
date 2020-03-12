import React, {
  useState,
  useEffect
} from 'react';

const TodoForm = (props) => {
  const {
    id,
    userId,
    title,
    completed,
  } = props;

  const [formTitle, setFormTitle] = useState('');
  const [formCompleted, setFormCompleted] = useState(false);

  // eslint-disable-next-line
  useEffect(() => {
    setFormTitle(title);
    setFormCompleted(completed);
  }, [setFormTitle, setFormCompleted]);

  const handleChangedInput = ({target}) => {
    const { value } = target;
    setFormTitle(
      value
    )
  };

  const handleChangedCheck = () => {
    setFormCompleted(
      !formCompleted
    )
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: id,
        title: formTitle,
        completed: formCompleted,
        userId: userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json))
  };

  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <input type="text" value={formTitle} onChange={handleChangedInput}/>
        <input type="checkbox" checked={formCompleted ? 'checked' : ''} onChange={handleChangedCheck} />
        <input type="submit" />
      </form>
    </>
  )
};

export default TodoForm;
