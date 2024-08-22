import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function TaskList() {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setItems(storedTasks);
    }, []);

    const handleTaskDelete = (id) => {
        const updatedTasks = items.filter(item => item.id !== id);
        setItems(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    const handleTaskEdit = (id) => {
        navigate('/', { state: { editingId: id } });
    };

    return (
        <div className="container my-4">
            <h1 className="text-center mb-4">Task List</h1>
            <div className="row g-3">
                {items.length > 0 ? (
                    items.map((item) => (
                        <div
                            key={item.id}
                            className="col-12 bg-light text-dark rounded-3 d-flex justify-content-between align-items-center p-3 shadow-sm"
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
                    ))
                ) : (
                    <p className="text-center">No tasks available.</p>
                )}
            </div>
        </div>
    );
}

export default TaskList;
