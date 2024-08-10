import React, { useState } from 'react'

function Tecklist3() {

    const[tesk,settask]=useState({
        name:"",
    })
    
    const [item,setitem]=useState([])
    
    function addtask(e) {
        settask({...tesk,name:e.target.value})
    }
    
    function listfuction() {
        setitem([...item,{name:tesk.name}])
    }
    
    
    
    const Data=item.map((data,index)=>(
        <li key={index} className="d-flex justify-content-between ">
            <h3>{data.name}</h3>
            <span>
                <button className="btn btn-danger text-white me-2">edit</button>
                <button className="btn btn-danger text-white ms-3">delete</button>
            </span>
        </li>
    ))


  return (
    <>
      
      <div className="container d-flex justify-content-center mt-5 flex-column w-50">
                <div className="card d-flex justify-content-center align-items-center px-4 py-4 bg-dark text-white rounded rounded-4" style={{ width: "38rem" }}>
                    <h3>Todolist</h3>
                    <input type="text" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" value={tesk.name} onChange={addtask} />
                    <button className="btn btn-success mt-4 px-4" onClick={listfuction}>
                 Add task
                        </button>

                     

                    <div className="card-body" style={{width:"90%"}}>
                        <div className="mt-3 text-center">
                            <h2>Lists</h2>
                            <ul style={{width:"100%"}}>
                                {Data}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>






    </>
  )
}

export default Tecklist3
