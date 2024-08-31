
import React, { useEffect, useState } from 'react'

function Display() {
    let [task, setTask] = useState("");
    let [items, setItems] = useState(JSON.parse(localStorage.getItem("lsItems")) || []);
    let [editId, setEditId] = useState(null);

    let finalData = items.map((item) =>
        <li key={item.id} className='d-flex justify-content-between my-2'>
            {item.task}
            <span>
                <button className='btn btn-danger' onClick={() => editHendler(item)}>Edit</button>
                <button className='btn btn-danger ms-2' onClick={() => deleteHendler(item.id)}>Delete</button>
            </span>
        </li>
    )

    useEffect(() => {
        localStorage.setItem("lsItems", JSON.stringify(items))
    }, [items])

    // Delete task 
    function deleteHendler(id) {
        setItems(items.filter((e) => e.id !== id))
        console.log("deleted");

    }

    // Edit task 
    function editHendler(item) {
        let pro = prompt("Edit Value", item.task)
        { (pro == "") ? (alert("please fill edit value")) : (item.task = pro) }

        let one = items.map((item) =>
            (item.id === editId) ? ({ ...item, task: task }) : (item)
        )
        setItems(one)
        setTask("")
        setEditId(null)
    }

    return (
        <>
            <div className='d-flex flex-column justify-content-center align-items-center' style={{ minHeight: "85vh" }}>
                <h2 className='text-center py-2'>LocalStorage Data Display</h2>
                <ul className='w-50 border border-3 border-dark rounded-3 px-4'>
                    {finalData}
                </ul>
            </div>
        </>
    )
}

export default Display