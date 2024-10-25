import React, { useState, useEffect } from "react";
import { storage } from "../firebase";
import { getStorage, ref } from "firebase/storage";
import { app } from '../firebase';

const Add = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentFileName, setCurrentFileName] = useState("");


  const storage = getStorage(app);
  const storageRef = ref(storage);

function uploadTodo() {
  
  todos.push({todo})
  console.log(todos);

  // const imagesRef = ref(storageRef, todos);


  setTodo("")
}



  return (
    <div className="todo-app">
      <h1>Todo App with Firebase Storage</h1>
      <input
        type="text"
        placeholder="Enter your todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      {editMode ? (
        <button onClick={saveEditTodo}>Save Todo</button>
      ) : (
        <button onClick={uploadTodo}>Add Todo</button>
      )}

      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item.todo}
            <button onClick={() => startEditTodo(item.fileName, item.text)}>Edit</button>
            <button onClick={() => deleteTodo(item.fileName)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Add;