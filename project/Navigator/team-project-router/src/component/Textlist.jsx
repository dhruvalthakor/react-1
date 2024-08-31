import React, { useEffect, useState } from 'react'

let nextId = 0;

function Textlist() {
   
    let [task, setTask] = useState("");
    let [items, setItems] = useState(JSON.parse(localStorage.getItem("lsItems")) || []); // get items in localStorage
    let [editId, setEditId] = useState(null);


    // Store in LocalStorage
    useEffect(() => {
        localStorage.setItem("lsItems", JSON.stringify(items))
    }, [items])


    function addHandler() {
        if (task !== "") {
            setItems([...items, { id: nextId++, task: task }])
            setTask("")
        } else {
            alert("Enter value")
        }
    }

    let finalData = items.map((item) =>
        <li key={item.id} className='d-flex justify-content-between my-2 text-black'>
            {item.task}
            <span>
                <button className='btn btn-success' onClick={() => editHendler(item.id, item.task)}>Edit</button>
                <button className='btn btn-success ms-2' onClick={() => deleteHendler(item.id)}>Delete</button>
            </span>
        </li>
    )

    // Delete task 
    function deleteHendler(id) {
        setItems(items.filter((e) => e.id !== id))
        console.log("deleted");

    }

    // Edit task 
    function editHendler(id, t) {
        setTask(t)
        setEditId(id)
    }

    // Update task
    function updateHandler() {
        if (task !== "") {
            let one = items.map((item) =>
                (item.id === editId) ? ({ ...item, task: task }) : (item)
            )
            setItems(one)
            setTask("")
            setEditId(null)
        } else {
            alert("Enter value")
        }
    }
    return (
        <div>
            
        <div className="container  text-white my-4 border border-3 rounded-4 border-dark shadow p-4">
        <h1 className="text-center text-black mb-4">Todo List with Local Storage</h1>
    
        <div className="row justify-content-center mb-4">
            <div className="col-md-8 col-lg-6">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                    disabled={editId !== null}
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
                        onClick={(editId == null) ? (addHandler) : (updateHandler)}>
                        {(editId == null) ? "Add" : "Update"}
                    </button>
                </form>
            </div>
        </div>

    </div>
    
                        </div>
    );
}

export default Textlist
