import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Textlist from './component/Textlist'
import ToDoList from './component/ToDoList'


function App() {


  return (
    <>
   <div className=" container">
   <div className="row">
<div className="col-6">
<Textlist/>
</div>
<div className="col-6">
<ToDoList/>
</div>
     </div>
   </div>
    </>
  )
}

export default App
