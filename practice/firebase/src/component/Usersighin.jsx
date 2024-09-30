import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { app } from '../firebase'




const auth=getAuth(app)

function Usersighin() {
    const[from,setFrom]=useState({
        email:"",
        password:""
    })
    


function sighupuser() {
    signInWithEmailAndPassword(auth,from.email,from.password).then(()=>alert("user sign in suuccfully")).catch((err)=>console.log(err)
    )
}

  return (
    <>
       <div className="container bg-dark p-4 rounded rounded-4 text-center ">
        <h1 className="text-white">sigh-in </h1>
        <div className="col">
            <label htmlFor="">enter your email</label>
            <input type="text" name="" id="" required placeholder='enter email ' className="form-control" 
            value={from.email}
             onChange={(e)=>setFrom({...from,email:e.target.value})}
             />
        </div>
        <div className="col  my-4">
            <label htmlFor="">enter your password</label>
            <input type="password" name="" id="" required placeholder='enter password ' className="form-control"
             value={from.password} onChange={(e)=>setFrom({...from,password:e.target.value})}
            />
        </div>
        <div className="col">
           <button className="btn btn-danger" onClick={sighupuser}>sing up</button>
        </div>
      </div>
    </>
  )
}

export default Usersighin
