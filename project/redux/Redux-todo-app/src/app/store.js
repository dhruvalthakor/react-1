import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../features/Counter/counterSlice"
import todoappSlice from '../features/Counter/Todoapp/todoappSlice'



export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todoapp: todoappSlice,
  },

})