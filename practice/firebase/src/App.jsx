import React from 'react'
import Heelo from './component/heelo'
import Usesignup from './component/Usesignup'
import Usersighin from './component/Usersighin'
import Table from './component/Table'

function App() {
  return (
    <>
     <Heelo/>
     {/* <div className="row container">
      <div className=" col-6">
     <Usesignup/>
      </div>
      <div className=" col-6">

     <Usersighin/>
</div>
     </div> */}
     <Table/>
    </>
  )
}

export default App
