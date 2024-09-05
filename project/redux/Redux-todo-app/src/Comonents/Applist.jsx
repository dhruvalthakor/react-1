
import React, {useEffect ,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addhender, deletehender, editehender } from "../features/Counter/Todoapp/todoappSlice";
import { v4 as uuidv4 } from 'uuid';



function Applist() {
  const tasks = useSelector((state) => state.todoapp.tasks);
  const dispatch = useDispatch()

  const [task, setTask] = useState("");
  const [editingId, setEditingId] = useState(null); 






  const itemData = tasks.map((item) => (
    <div
      key={item.id}
      className="row justify-content-between align-items-center my-4 text-bg-secondary p-2 rounded rounded-4"
    >
      <h2 className="col-8 col-md-9 text-capitalize">{item.task}</h2>
      <div className="col-4 col-md-3 text-end">
        <button
          className="btn btn-success mx-1"
          onClick={() => dispatch(editehender( item.id))}
        >
          Edit
        </button>
        <button
          className="btn btn-danger mx-1"
          onClick={() => dispatch(deletehender(item.id))}
        >
          Delete
        </button>
      </div>
    </div>
  ));





 

 
  return (
    <div className="mt-5">
      <div className="container text-bg-dark my-4 rounded-5 p-4  ">
      <h1 className="text-center">Todo List</h1>
      <div className="row text-center mb-4">
        <div className="col">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            disabled={editingId !== null}
          >
            <input
              type="text"
              className="form-control mb-2 mb-md-0"
              placeholder="Enter a task here"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
        
            <button
              className="btn btn-info mx-1 mt-3"
              onClick={() => {
                if (task) {
                  const newTask = { id: uuidv4(), task };
                  dispatch(addhender(newTask))
                  setTask("");
                } else {
                  alert("enter")
                }
              }}
             
            >
             Add
            </button>
          </form>
        </div>
      </div>
      <div className="row p-5 ">
        {itemData}
      </div>
    </div>
    </div>
  );
}

export default React.memo(Applist);