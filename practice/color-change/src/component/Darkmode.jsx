import React, { useState } from 'react'

function Darkmode() {

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
<nav className="navbar navbar-expand-lg" style={{backgroundColor:colors[color]}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{color:colors2[color2]}}>Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 " >
        <li className="nav-item">
          <a className="nav-link active" style={{color:colors2[color2]}} aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color:colors2[color2]}} href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" style={{color:colors2[color2]}}  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" style={{backgroundColor:colors[color]}}>
            <li><a className="dropdown-item" style={{color:colors2[color2]}} href="#">Action</a></li>
            <li><a className="dropdown-item" style={{color:colors2[color2]}} href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" style={{color:colors2[color2]}} href="#">Something else here</a></li>
          </ul>
        </li>
       
      </ul>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={changecolor}/>
</div>
    </div>
  </div>
</nav>


    
    </>
  )
}

export default Darkmode
