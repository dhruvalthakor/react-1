import React, { useCallback, useEffect, useState } from 'react'
import ButtonCounter from './ButtonCounter'
import counterContext from "./context/conter"

function hooks() {
    const [count , setCount] = useState(0)


    const increment = useCallback(() =>{
      console.log("increment");

        setCount(prevCount => prevCount + 1)
    }, [])

    useEffect(() => {
      console.log("Inside useEffect");
      
    }, [increment])
    




  return (
    <>
    <counterContext.Provider value={{count, increment}}>

        <div className="container text-bg-dark p-5 text-center">
        {/* <h1>Count : {count}</h1> */}
        <ButtonCounter/>
        </div>

    </counterContext.Provider>

    </>
  )
}

export default hooks
