import React, {useReducer} from 'react';
import { Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import {TodoContext} from './Context/TodoContext';
import TodoReducer from "./Context/reducer";
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

const App = ()=> {
  const [todos, dispatch] = useReducer(TodoReducer, [])
  return(
    <TodoContext.Provider value={{todos, dispatch}}>
      <Container fluid>
        <h1>Todo App with Context</h1>
        <Todos />
        <TodoForm />
      </Container>
    </TodoContext.Provider>
  ); 
};
  export default App;
