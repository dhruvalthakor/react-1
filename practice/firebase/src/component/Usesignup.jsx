import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { app } from '../firebase'

const auth=getAuth(app)



function Usesignup() {
const[from,setFrom]=useState({
    email:"",
    password:""
})


const sighupuser=()=>{
createUserWithEmailAndPassword(auth,from.email,from.password).then(()=>alert("user added successfully")).catch((err)=>console.log(err)
)


}

  return (
    <>
      
      <div className="container bg-dark p-4 rounded rounded-4 text-center">
        <h1 className="text-white">user </h1>
        <div className="col">
            <label htmlFor="">user email</label>
            <input type="text" name="email" id="user-email" required placeholder='enter email ' className="form-control" value={from.email}
             onChange={(e)=>setFrom({...from,email:e.target.value})}/>
        </div>
        <div className="col  my-4">
            <label htmlFor="">user password</label>
            <input type="password" name="password" id="user-password" required placeholder='enter password ' className="form-control" value={from.password} onChange={(e)=>setFrom({...from,password:e.target.value})}/>
        </div>
        <div className="col">
           <button className="btn btn-danger" onClick={sighupuser}>submit</button>
        </div>
      </div>



    </>
  )
}

export default Usesignup
