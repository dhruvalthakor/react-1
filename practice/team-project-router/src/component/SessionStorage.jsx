import React, { useEffect, useState } from 'react';

let nextId = 0;

function SessionStorage() {
    const [task, setTask] = useState("");
    const [items, setItems] = useState(() => JSON.parse(sessionStorage.getItem("tasks")) || []);
    const [save, setsave] = useState(() => JSON.parse(sessionStorage.getItem("save")) || []);
    const [editingId, setEditingId] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        sessionStorage.setItem("tasks", JSON.stringify(items));
    }, [items]);

    useEffect(() => {
        sessionStorage.setItem("save", JSON.stringify(save));
    }, [save]);

    function handleTaskAdd() {
        if (task) {
            setItems([...items, { id: nextId++, task }]);
            setTask("");
        } else {
            alert("Enter a task");
        }
    }

    function handleTaskDelete(id) {
        setsave(save.filter((e) => e.id !== id));
    }

    function handleTaskEdit(id) {
        const editedTask = items.find((item) => item.id === id);
        setTask(editedTask.task);
        setEditingId(id);
    }

    function handleTaskUpdate() {
        if (task) {
            setItems(
                items.map((item) =>
                    item.id === editingId ? { ...item, task } : item
                )
            );
            setTask("");
            setEditingId(null);
        } else {
            alert("Enter a task");
        }
    }

    function handleSaveTask(id) {
        const taskToSave = items.find((item) => item.id === id);
        if (taskToSave) {
            setsave([...save, taskToSave]);
         
        }
        console.log("delete");
        setItems(items.filter((e) => e.id !== id));
        console.log(id);
    }
   

    function handleModalOpen(item) {
        setSelectedItem(item); // Set the selected item to the state
    }

    return (
        <>
            <div className="container my-4 border border-3 rounded-4 border-dark shadow p-4">
                <h1 className="text-center mb-4">Todo List with SessionStorage</h1>

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
                    <div className="col-6 border border-2 p-3">
                        <h2 className="text-center">add tasks</h2>
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="bg-dark rounded-3 d-flex justify-content-between align-items-center p-3 shadow-sm mb-3"
                            >

                                <h2 className="mb-0 fs-5 text-capitalize text-white">{item.task}</h2>
                                <div>

                                    <button
                                        type="button"
                                        className="btn btn-dark d-flex justify-content-center align-items-center w-25"style={{height:"20px"}}
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => handleModalOpen(item)}
                                    >
                                        <div className="form-check d-flex justify-content-center">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                            <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                            </label>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-6 border border-2 p-3">
                        <h3 className="text-center ">save tesks</h3>
                        {save.map((i) => (
                            <div
                                key={i.id}
                                className="col-12 bg-dark rounded-3 d-flex justify-content-between align-items-center p-3 shadow-sm"
                            >
                                <h2 className="mb-0 fs-5 text-white">{i.task}</h2>
                                <div>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleTaskDelete(i.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal Code */}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <h2 className="text-danger">{selectedItem?.task}</h2>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                data-bs-dismiss="modal"
                                className="btn btn-success btn-sm me-2"
                                onClick={() => handleTaskEdit(selectedItem?.id)}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                data-bs-dismiss="modal"
                                className="btn btn-primary"
                                onClick={() => handleSaveTask(selectedItem?.id)}
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Modal Code */}
        </>
    );
}

export default SessionStorage;
