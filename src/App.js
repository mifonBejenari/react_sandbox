import React, {
  useState,
  useEffect,
  // createContext
} from 'react';
import './App.css';
// import Users from "./components/user/Users";
import Todos from "./components/todo/Todos";
// import Posts from './components/post/Posts';
// import UsersContext from './components/context/UserContext';

function App() {

  // const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  // const [posts, setPosts] = useState([]);

  const getData = (link, setSt) => {
    fetch(link)
      .then(response => response.json())
      .then(json =>  setSt(json)
      );
  };

  // eslint-disable-next-line
  useEffect(() => {
    getData('https://jsonplaceholder.typicode.com/todos', setTodos);
  },[setTodos]);

  return (
    <>
      {/*<Posts posts={posts} getData={getData} setPosts={setPosts}/>*/}
      {/*<Users users={users} todos={todos} getJson={getJson} setUsers={setUsers} />*/}
      {/*<UsersContext.Provider value={users} >*/}
      <Todos todos={todos} />
      {/*</UsersContext.Provider>*/}
    </>
  );
}

export default App;
