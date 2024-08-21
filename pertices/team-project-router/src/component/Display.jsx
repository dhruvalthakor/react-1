import React, { useState } from 'react'

function Display() {
    const [items, setItems] = useState(()=>{
        return JSON.parse(localStorage.getItem("tasks")) || []
    });


  return (
    <>
     <div className="container">
     <div className="row g-3">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="col-12 bg-dark text-white  rounded-3 d-flex justify-content-between align-items-center p-3 shadow-sm"
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
    </>
  )
}

export default Display
