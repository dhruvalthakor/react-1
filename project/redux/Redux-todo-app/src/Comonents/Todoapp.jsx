import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid"; // For generating unique IDs

// Task Item Component
const TaskItem = ({ item, onEdit, onDelete }) => (
  <div
    key={item.id}
    className="row justify-content-between align-items-center my-4 text-bg-secondary p-2"
  >
    <h2 className="col-8 col-md-9 text-capitalize">{item.task}</h2>
    <div className="col-4 col-md-3 text-end">
      <button className="btn btn-success mx-1" onClick={() => onEdit(item.id)}>
        Edit
      </button>
      <button className="btn btn-danger mx-1" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </div>
  </div>
);

// Main ToDoList Component
function Todoapp() {
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Add or Update Task
  const handleTaskSubmit = () => {
    if (editingId !== null) {
      // Update Task
      setItems(
        items.map((item) =>
          item.id === editingId ? { ...item, task: task } : item
        )
      );
      setEditingId(null);
    } else {
      // Add Task
      setItems([...items, { id: uuidv4(), task }]);
    }
    setTask(""); // Clear input
  };

  // Edit Task
  const handleTaskEdit = (id) => {
    const editedTask = items.find((item) => item.id === id);
    setTask(editedTask.task);
    setEditingId(id);
  };

  // Delete Task
  const handleTaskDelete = (id) => {
    setItems(items.filter((e) => e.id !== id));
  };

  return (
    <div className="container text-bg-dark my-4 border border-5 border-danger-subtle rounded-5 p-4">
      <h1 className="text-center">Todo List</h1>
      <div className="row text-center mb-4">
        <div className="col">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleTaskSubmit();
            }}
          >
            <input
              type="text"
              className="form-control mb-2 mb-md-0"
              placeholder="Enter a task here"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button className="btn btn-info mx-1">
              {editingId !== null ? "Update" : "Add"}
            </button>
          </form>
        </div>
      </div>
      <div className="row p-5 border border-5 border-warning-subtle">
        {items.map((item) => (
          <TaskItem
            key={item.id}
            item={item}
            onEdit={handleTaskEdit}
            onDelete={handleTaskDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default Todoapp;