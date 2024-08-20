import React, { useEffect, useState } from 'react'

let nextId = 0;

function Textlist() {
    const [task, setTask] = useState("");
    const [items, setItems] = useState(()=>{
        return JSON.parse(localStorage.getItem("tasks")) || []
    });
    
    const [editingId, setEditingId] = useState(null); 



    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(items))
    }, [items])


    function handleTaskAdd() {
        if (task) {
            setItems([...items, { id: nextId++, task: task }]);
            setTask(""); 
          }else{
        alert("Enter a task")
          }
    }

 

    //   Delete 

    function handleTaskDelete(id) {
        console.log("delete");
        setItems(items.filter((e) => e.id !== id));
        console.log(id);
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
        <h1 className="text-center mb-4">Todo List with Local Storage</h1>
    
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

export default Textlist
