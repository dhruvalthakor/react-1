import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addhender, deletehender, editHandler } from "../features/Counter/Todoapp/todoappSlice";
import { v4 as uuidv4 } from 'uuid';

function Applist() {
  const tasks = useSelector((state) => state.todoapp.tasks);
  const dispatch = useDispatch();

  const [task, setTask] = useState("");
  const [editingId, setEditingId] = useState(null);

  function handleTaskAdd() {
    if (task) {
      const newTask = { id: uuidv4(), task };
      dispatch(addhender(newTask));
      setTask("");
    } else {
      alert("Please enter a task");
    }
  }

  function handleTaskUpdate() {
    if (task) {
    const updatedTask = { id: editingId, task };
    dispatch(editHandler(updatedTask));
    setTask("");
    setEditingId(null);
  } else {
    alert("Please enter a task");
  }
  }

  function handleTaskEdit(id) {

      const editedTask = tasks.find((item) => item.id === id);
    setTask(editedTask.task);
    setEditingId(id);
   
    
  }

  const itemData = tasks.map((item) => (
    <div key={item.id} className="card my-3 shadow-sm border-0">
      <div className="card-body d-flex justify-content-between align-items-center">
        <span className="fs-5">{item.task}</span>
        <div>
          <button
            className="btn btn-outline-success btn-sm mx-1"
            onClick={() => handleTaskEdit(item.id)}
          >
            Edit
          </button>
          <button
            className="btn btn-outline-danger btn-sm mx-1"
            onClick={() => dispatch(deletehender(item.id))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container mt-5 w-75">
      <div className="bg-light text-dark rounded-4 p-4 shadow-lg">
        <h1 className="text-center mb-3">Todo List</h1>
{/*         
        Progress Bar (for visual touch)
        <div className="progress mb-4" style={{ height: "10px" }}>
          <div
            className="progress-bar progress-bar-striped bg-info progress-bar-animated"
            role="progressbar"
            style={{ width: `${(tasks.length / 10) * 100}%` }}
            aria-valuenow={tasks.length}
             aria-label="Animated striped example"
            aria-valuemin="0"
            aria-valuemax="10"
          ></div>
        </div> */}
        {/* <h1>{tasks.length }</h1>  */}

    

        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={(e) => e.preventDefault()} className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter a task here"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <button
                className={`btn ${editingId !== null ? "btn-warning" : "btn-info"} px-4`}
                onClick={editingId !== null ? handleTaskUpdate : handleTaskAdd}
              >
                {editingId !== null ? "Update" : "Add"}
              </button>
            </form>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-md-8">
            <div className="list-group">
              {itemData}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Applist);
