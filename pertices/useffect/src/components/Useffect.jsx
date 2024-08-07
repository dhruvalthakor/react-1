import React, { useEffect, useState } from 'react'

function Useffect() {
    const [count,setcount]=useState(0)



   
    useEffect(()=>{
console.log("asdfghfdsa",count);

return(()=>{
    console.log("asdfghg");
    
})
    },[count])
  return (
    <>
     <div className="container text-center d-flex align-items-center justify-content-center mt-5">
     <button className="btn btn-success" onClick={()=>{setcount(count-1)}}>-</button>
  <p className="mx-3 my-2">{count}</p>
      <button className="btn btn-success" onClick={()=>{setcount(count+1)}}>+</button>
     </div>
    </>
  )
}

export default Useffect
