import React from 'react'
import Counter from './Comonents/Counter'
import Applist from './Comonents/applist'


function App() {
  return (
    <>
    <div className="container">
    <div className="row">
      <div className="col-12"> 
        <div>
        <Applist/>
        </div>
        </div>
      {/* <div className="col-5"> <Counter/></div> */}
    </div>
    </div>
  
   
    </>
  )
}

export default App
