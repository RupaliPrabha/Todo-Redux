
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, clearTodo, editTodo } from '../redux/Reducer';
import '../css/Todo.css';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const [editToDoObj, setEditTodoObj] = useState({});
  const [isEdit, setIsEdit] = useState(false); 
  
  const dispatch = useDispatch();
  const todosMain = useSelector(state => state.todos);

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input === '') {
      alert("Input is empty");
    } else {
      dispatch(addTodo(input));
      setInput('');
    }
  }

  const clearAll = () => {
    dispatch(clearTodo());
  }

  const editHandler = (inputvalue) => {
    setEditTodoObj(inputvalue);
    setInput(inputvalue.text);
    setIsEdit(true);
  }

  const saveBtnHandler = () => {
    dispatch(editTodo({ id: editToDoObj.id, text: input }));
    setInput('');
    setIsEdit(false);
  }

  return (
    <div className='Main_div'>
      <h1>Todos List</h1>
      <div className='input_div'>
        <input
          type="text"
          placeholder='Enter a text'
          value={input}
          onChange={(e) => setInput(e.target.value)} />
        <button onClick={isEdit ? saveBtnHandler : addTodoHandler}>{isEdit ? "Update" : "Add"}</button>
        <button id='clear' onClick={clearAll}>Clear All</button>
      </div>
      <div className='listitem'>
        <ul>
          {todosMain.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button id='delete' onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
              <button className='editbtn' onClick={() => editHandler(todo)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AddTodo;
