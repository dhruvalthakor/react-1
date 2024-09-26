import React from 'react'
import { getDatabase, ref, set } from 'firebase/database'
import { app } from '../firebase'


function Heelo() {
    const db = getDatabase(app)


const senddata=()=>
    {set(ref(db,"user/dhruval"),
{
    id:1,
    name:"dhruval",
    email:"d@gmail.com"
}).then(()=>console.log("data added successfully")
)}

  return (
    <div>
      <h1>fire base</h1>
      <button className="btn btn-danger" onClick={senddata}>click</button>
    </div>
  )
}

export default Heelo
