import { configureStore } from "@reduxjs/toolkit";
import todoReducer  from '../redux/Reducer'

 export const  store=  configureStore({ 
  reducer: todoReducer 
});

