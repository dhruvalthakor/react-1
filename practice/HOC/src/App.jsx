import React from 'react'
import Conter from './component/Conter'
import Hoverconter from './component/Hoverconter'

function App() {
  return (
    <>
      <div className="container bg-dark mt-5 p-5">
<div className="row">
<div className="col">
<Conter/>
</div>
<div className="col">
<Hoverconter/>
</div>
</div>
      </div>
    </>
  )
}

export default App
