import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function TaskInput() {
    const [task, setTask] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const editingId = location.state?.editingId || null;

    useEffect(() => {
        if (editingId) {
            const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            const taskToEdit = tasks.find(item => item.id === editingId);
            if (taskToEdit) {
                setTask(taskToEdit.task);
            }
        }
    }, [editingId]);

    const handleTaskAddOrEdit = () => {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        if (task.trim()) {
            if (editingId !== null) {
                // Edit task
                const updatedTasks = tasks.map(item => 
                    item.id === editingId ? { ...item, task } : item
                );
                localStorage.setItem("tasks", JSON.stringify(updatedTasks));
            } else {
                // Add new task
                const newTask = { id: tasks.length + 1, task };
                tasks.push(newTask);
                localStorage.setItem("tasks", JSON.stringify(tasks));
            }
            setTask("");
            navigate('/tasks');
        } else {
            alert("Enter a task");
        }
    };

    return (
        <div className="container my-4">
            <h1 className="text-center mb-4">
                {editingId !== null ? "Edit Task" : "Add Task"}
            </h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleTaskAddOrEdit();
                }}
                className="input-group"
            >
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter a task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button className="btn btn-primary" type="submit">
                    {editingId !== null ? "Update Task" : "Add Task"}
                </button>
            </form>
        </div>
    );
}

export default TaskInput;
