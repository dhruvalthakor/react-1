import React, { useState } from "react";

let nextId = 0;

function ToDoList() {
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null); 



  function handleTaskAdd() {
  if (task) {
    setItems([...items, { id: nextId++, task: task }]);
    setTask(""); 
  }else{
alert("Enter a task")
  }
  }

  const itemData = items.map((item) => (
    <div
      key={item.id}
      className="row justify-content-between align-items-center my-4 text-bg-secondary p-2"
    >
      <h2 className="col-8 col-md-9 text-capitalize">{item.task}</h2>
      <div className="col-4 col-md-3 text-end">
        <button
          className="btn btn-success mx-1"
          onClick={() => handleTaskEdit(item.id)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger mx-1"
          onClick={() => handleTaskDelete(item.id)}
        >
          Delete
        </button>
      </div>
    </div>
  ));

  //   Delete 

  function handleTaskDelete(id) {

    setItems(items.filter((e) => e.id !== id));

  }

  //   Edit

  function handleTaskEdit(id) {
    const editedTask = items.find((item) => item.id === id);
    setTask(editedTask.task); 
    setEditingId(id); 
  }

  //   Update 

  function handleTaskUpdate() {
    setItems(
      items.map((item) => {
        if (task) {
          if (item.id === editingId) {
              return  { ...item, task: task }; 
          }
        }else{
          alert("Enter a task")
        }
          return item;
      })
  );
  setTask(""); 
  setEditingId(null);
  }
  return (
    <div className="container  text-white my-4 border border-3 rounded-4 border-dark shadow p-4">
        <h1 className="text-center mb-4">Todo List with out Local Storage</h1>
    
        <div className="row justify-content-center mb-4">
            <div className="col-md-8 col-lg-6">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                    disabled={editingId !== null}
                    className="input-group"
                >
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter a task"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button
                        className="btn btn-danger text-white"
                        onClick={editingId !== null ? handleTaskUpdate : handleTaskAdd}
                    >
                        {editingId !== null ? "Update Task" : "Add Task"}
                    </button>
                </form>
            </div>
        </div>
    
        <div className="row g-3">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="col-12 bg-dark  rounded-3 d-flex justify-content-between align-items-center p-3 shadow-sm"
                >
                    <h2 className="mb-0 fs-5 text-capitalize">{item.task}</h2>
                    <div>
                        <button
                            className="btn btn-success btn-sm me-2"
                            onClick={() => handleTaskEdit(item.id)}
                        >
                            Edit
                        </button>
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleTaskDelete(item.id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
    
  );
}

export default ToDoList;