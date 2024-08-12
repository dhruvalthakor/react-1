import React, { useState } from 'react'

function Cartcount() {

    const[count,setcount]=useState(0);

function Decrement() {
  if (count!=0) {
    setcount(count-1)
  }
}

function Increment() {

    setcount(count+1)

}
  return (
    <>
               <div className=" container text-center mt-5">
<button className=" btn btn-dark" onClick={Decrement}>
Decrement
</button>
<button className=" btn btn-success mx-2">
  {count}
</button>
<button className=" btn btn-primary" onClick={Increment}>
Increment
</button>
      </div>
    </>
  )
}

export default Cartcount
