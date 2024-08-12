import React, { useState } from 'react'


function Textlist() {
    const [task, settask] = useState({
        name: "",
        indx:null,

    })
    const [lists, setlists] = useState([])

    let listfuction = () => {
        if (task.name.trim() !== "") {
            if (task.indx!==null) {
                const updatedLists = lists.map((item, index) =>
                    index === task.indx ? { name: task.name } : item
                );
                setlists(updatedLists);
            } else {
                setlists([...lists,{ name: task.name }])
            }
            settask({ name: "" ,indx:null})
        } else {
            alert("enter task")
        }
    }


    // edithandler

    const edithandler = ((i) => {

        let newdata = lists[i]
        settask({name:newdata.name,indx:i})

    })

    // deletehandler
    function deletehandler(index) {

        setlists(lists.filter((ele, i) => i != index))
        
    }


    return (
        <div className="container d-flex justify-content-center mt-5 flex-column align-items-center">
            <div className="card bg-dark text-white rounded-4 shadow-lg" style={{ width: "50%  " }}>
                <div className="card-body text-center">
                    <h3 className="mb-4">Todolist</h3>
                    <input
                        type="text"z
                        className="form-control mb-3 rounded-pill shadow-sm"
                        placeholder="Enter your task..."
                        value={task.name}
                        onChange={(e) => settask({ ...task, name: e.target.value })}
                    />
                    <button
                        className="btn btn-primary rounded-pill px-4 shadow-sm"
                        onClick={listfuction}
                    >
                      {task.indx!==null?"Updeta task":"Add task"}
                    </button>
                </div>
            </div>

            <div className="card-body w-50">
                <h2 className="text-center mt-4">Tasks</h2>
                <ul className="list-unstyled mt-3">
                    {
                        lists.map((data, indx) => (
                            <li
                                key={indx}
                                className=" w-100 d-flex justify-content-between align-items-center bg-light py-2 px-3 rounded-3 shadow shadow-lg mb-3 flex-wrap text-center align-items-center"

                            >
                                <h5>{data.name}</h5>
                                <div>
                                    <button
                                        className="btn btn-outline-dark me-2 mb-2"
                                        onClick={() => edithandler(indx)}
                                    >
                                        edit
                                    </button>
                                    <button
                                        className="btn btn-outline-dark ms-2"
                                        onClick={() => deletehandler(indx)}
                                    >
                                        delete
                                    </button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Textlist
