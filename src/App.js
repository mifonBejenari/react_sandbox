import React, { useState } from 'react';
import './App.css';
import Users from "./components/user/Users";
import Todos from "./components/todo/Todos";

function App() {

  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);

  const getJson = (link, setSt) => {
    fetch(link)
      .then(response => response.json())
      .then(json =>  setSt(json)
      );
  };

  return (
    <>
      <Users users={users} todos={todos} getJson={getJson} setUsers={setUsers} />
    </>
  );
}

export default App;
