import React, { useState } from 'react'

function Colorchenge() {
    const [data, setdata] = useState(
        {
          frist:" ",
          second:"",
      
        
        })
    
      function heandstate(e) {
        setdata({
        
          frist:e.target.value,
          second:"white",
        })
      }
    
    //   function secondcolor(e) {
    //     setdata({
         
    //         second:e.target.value
    //     })
    //   }
    //   function thirdcolor(e) {
    //     setdata({
    //         third:e.target.value
    //     })
    //   }
    
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor:data.frist}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{color:data.second}}>Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
       
          <select className="nav-link dropdown-toggle"  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"   value={data.frist} onChange={heandstate}>
        <option value=""> coloes</option>
            <option value="#003135" >Action</option>
            <option value="#3D52A0">Another</option>
            <option value="#2C3531">Something</option>
          </select>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>
    </>
  )
}

export default Colorchenge
