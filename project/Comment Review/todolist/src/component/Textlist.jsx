import React, { useState } from 'react'

function Textlist() {
    const [task, settask] = useState({
        name: ""
    })
    const [lists, setlists] = useState(null)



    
    let listfuction = () => {
        const listarr = [{name: task.name }]
       
        const Item = listarr.map(data => (
            <li key={data} className=" w-100 d-flex justify-content-between bg-success py-2 px-2 text-white  rounded rounded-3" style={{ gap: 150 }}>
                <div>
                    <h3>{data.name}</h3>
                </div>
                <div>
                    <button className="btn btn-dark  text-white me-2">edit</button>
                    <button className="btn btn-dark text-white ms-2">delete</button>
                </div>
            </li>
        ))
        setlists(Item)
       


    }

    function add(e) {
        settask({ ...task, name: e.target.value })

    }




    return (
        <>
            <div className="container d-flex justify-content-center mt-5 flex-column w-50">
                <div className="card d-flex justify-content-center align-items-center px-4 py-4 bg-dark text-white rounded rounded-4" style={{ width: "38rem" }}>
                    <h3>Todolist</h3>
                    <input type="text" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" value={task.name} onChange={add} />
                    <button className="btn btn-success mt-4 px-4" onClick={listfuction}>Add task</button>
                    <div className="card-body">
                        <div className="mt-3">
                            <ul className=" list-unstyled ">
                                {lists}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Textlist
