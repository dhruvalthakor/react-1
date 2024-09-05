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
    // console.log(action.payload);
    
      state.tasks.push({
        id: action.payload.id,
        task: action.payload.task,
      });


      // console.log(state.tasks); 
    },
    deletehender: (state,action) => {
  //  console.log(action.payload);
   
    state.tasks=state.tasks.filter((e) => e.id !==action.payload);

    },
    editehender: (state,action) => {
       console.log(action.payload);
      
       
        },
  },
});

export const { addhender, deletehender, editehender} = todoappSlice.actions;

export default todoappSlice.reducer;