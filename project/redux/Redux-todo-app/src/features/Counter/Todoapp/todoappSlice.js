import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks:[
{
  id:0,
  task:"hello"
}
  ],
};

const todoappSlice = createSlice({
  name: 'todoapp',
  initialState,
  reducers: {
    addhender: (state, action) => {
      state.tasks.push(action.payload);
    },
    deletehender: (state,action) => {
    state.tasks=state.tasks.filter((e) => e.id !==action.payload);
    },
    editHandler: (state, action) => {
    
      const existingTask = state.tasks.find((item) => item.id === action.payload.id);
        console.log(existingTask);
      
      if (existingTask) {
        existingTask.task = action.payload.task;
      }
    },
  },
});

export const { addhender, deletehender, editHandler} = todoappSlice.actions;

export default todoappSlice.reducer;