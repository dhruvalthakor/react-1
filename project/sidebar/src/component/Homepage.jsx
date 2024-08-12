import React, { useState } from 'react'
import Useeffactcard1 from './Useeffactcard1'

function Homepage() {

  const [color,setcolor]=useState(0)
  const [color2,setcolor2]=useState(0)
const colors=["white","black"]
const colors2=["black","white"]

  function changecolor() {
 

if (color<1) {
  setcolor(color+1)
  setcolor2(color2+1)
}else{
  setcolor(0)
  setcolor2(0)
}
  }



  return (
    <>
<div>
  <div className="row">
    <div className="col-2">
    <nav className="navbar navbar-expand-lg shadow position-fixed" style={{height:"100vh", width:"12%",backgroundColor:colors[color]}}>
  <div className="container-fluid flex-column">
    <a className="navbar-brand" href="#" style={{color:colors2[color2]}}>Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-column">
        <li className="nav-item">
          <a className="nav-link active "  aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Prodects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Conctect</a>
        </li>
        <li className="nav-item">
        <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={changecolor}/>
</div>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
    </div>
    <div className="col-10">
    <div className=" d-flex" >
<Useeffactcard1/> 

</div>
    </div>
    
  </div>
</div>

























    </>
  )
}

export default Homepage
