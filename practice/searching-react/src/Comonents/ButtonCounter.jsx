import React, { useContext } from 'react'
import counterContext from './context/conter';


function ButtonCounter() {
    console.log("Inside ButtonCounter");

   
  const value = useContext(counterContext)
  return (
    <>
    <h1>{value.count}</h1>
       <button className='btn btn-primary' onClick={value.increment} >+</button>
    </>
  )
}

export default React.memo(ButtonCounter)
