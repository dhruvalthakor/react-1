import React, { useState, useEffect } from "react";
import { ref, uploadBytes, listAll, getDownloadURL, deleteObject } from "firebase/storage";
import { storage } from "../firebase"; // Firebase configuration

const Add = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentFileName, setCurrentFileName] = useState("");

  // Upload Todo to Firebase Storage
  const uploadTodo = async () => {
    if (!todo) {
      console.error("Todo is empty, please enter a value");
      return;
    }

    const todoRef = ref(storage, `todos/${Date.now()}.json`);
    const blob = new Blob([JSON.stringify({ text: todo })], { type: "application/json" });

    try {
      await uploadBytes(todoRef, blob);
      console.log("Todo added successfully");
      setTodo(""); // Clear input field
      fetchTodos(); // Refresh the list after adding the todo
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  // Fetch Todos from Firebase Storage
  const fetchTodos = async () => {
    const todosRef = ref(storage, 'todos/');
    try {
      const snapshot = await listAll(todosRef);
      if (snapshot.items.length === 0) {
        console.log("No todos found in Firebase Storage");
      }
      const todoPromises = snapshot.items.map(async (item) => {
        const url = await getDownloadURL(item);
        const response = await fetch(url);
        const data = await response.json();
        return { text: data.text, fileName: item.name };
      });
      const allTodos = await Promise.all(todoPromises);
      setTodos(allTodos);
      console.log("Todos fetched:", allTodos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  // Delete Todo
  const deleteTodo = async (fileName) => {
    const todoRef = ref(storage, `todos/${fileName}`);
    try {
      await deleteObject(todoRef);
      console.log(`Todo ${fileName} deleted successfully`);
      fetchTodos(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  // Start Edit Todo
  const startEditTodo = (fileName, text) => {
    setEditMode(true);
    setTodo(text);
    setCurrentFileName(fileName);
  };

  // Save Edit Todo
  const saveEditTodo = async () => {
    if (!todo) {
      console.error("Todo is empty, please enter a value");
      return;
    }

    const todoRef = ref(storage, `todos/${currentFileName}`);
    const blob = new Blob([JSON.stringify({ text: todo })], { type: "application/json" });

    try {
      // Update the existing todo
      await deleteObject(todoRef); // Delete old todo
      await uploadBytes(todoRef, blob); // Upload updated todo
      console.log("Todo edited successfully");

      setTodo("");
      setEditMode(false);
      setCurrentFileName("");
      fetchTodos(); // Refresh the list
    } catch (error) {
      console.error("Error editing todo:", error);
    }
  };

  useEffect(() => {
    fetchTodos(); // Fetch todos on component mount
  }, []);

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
            {item.text}
            <button onClick={() => startEditTodo(item.fileName, item.text)}>Edit</button>
            <button onClick={() => deleteTodo(item.fileName)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Add;