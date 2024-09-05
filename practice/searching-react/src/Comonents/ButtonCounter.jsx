import React from 'react'

function ButtonCounter({increment}) {
    console.log("Inside ButtonCounter");
  return (
    <>
       <button className='btn btn-primary' onClick={increment} >+</button>
    </>
  )
}

export default React.memo(ButtonCounter)
