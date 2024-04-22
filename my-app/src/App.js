import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Todo from './components/Todo';
import {store} from './redux/Store'

function App() {
  return (
   
      <Provider  store={store}> 
      <Todo/>
      </Provider>
   
  );
}

export default App;
