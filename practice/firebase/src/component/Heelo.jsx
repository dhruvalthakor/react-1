import React, { useState } from 'react'
import { getDatabase, ref, set } from 'firebase/database'
import { app } from '../firebase'
import { v4 as uuidv4 } from 'uuid';

function Heelo() {
  const[from,setFrom]=useState({
    name:"",
    email:"",
    password:""
})



    const db = getDatabase(app)


const senddata=()=>{
  set(ref(db,`user/${from.name}`),
{
 
  id:uuidv4(),
    name:from.name,
    email:from.email,
    password:from.password
}).then(()=>console.log("data added successfully")
)






}

  return (
    <div className="container bg-dark p-4 rounded rounded-4 text-center w-50 mt-5">
        <h1 className="text-white">user </h1>
        <div className="col">
            <label htmlFor="">user email</label>
            <input type="text" name="" id="" required placeholder='enter name ' className="form-control" value={from.name}
             onChange={(e)=>setFrom({...from,name:e.target.value})}/>
        </div>
        <div className="col my-4">
            <label htmlFor="">user email</label>
            <input type="email" name="" id="" required placeholder='enter email ' className="form-control" value={from.email}
             onChange={(e)=>setFrom({...from,email:e.target.value})}/>
        </div>
        <div className="col">
            <label htmlFor="">user password</label>
            <input type="password" name="" id="" required placeholder='enter password ' className="form-control" value={from.password} onChange={(e)=>setFrom({...from,password:e.target.value})}/>
        </div>
        <div className="col mt-3">
           <button className="btn btn-danger" onClick={senddata}>submit</button>
        </div>
      </div>

  )
}

export default Heelo
