import React from 'react'
import { app } from '../firebase'
import { getDatabase, ref, set } from 'firebase/database'


function Hello() {
 const db= getDatabase(app)

 function click() {
    
    set(ref(db,"user/dhruval"),{
        id:1,
        name:"dhruval",
        email:"dhruval@gmail.com"
    }).then(()=>console.log("add")
    )

 }




  return (
    <div className="container">
        <div className="container p-5 text-center">
<h1>Fire-base</h1>
      <button className="btn btn-dark" onClick={click}>click</button>
        </div>
    </div>
  )
}

export default Hello
