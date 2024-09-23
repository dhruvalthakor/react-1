import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


function Navber() {


  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
          <a className="navbar-brand" href="#"><span className='text-danger fw-bold fs-4'>D</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4 flex-grow-0 w-100 justify-content-center fs-4">
                <li className="nav-item">
                  <NavLink className={(e) => e.isActive ? "crimson" : ""} to="/">Filtering</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className={(e) => e.isActive ? "crimson" : ""} to="/User">Searching</NavLink>

                </li>
                {/* <li className="nav-item">
                <NavLink className={(e) => e.isActive ? "crimson" : ""} to="/Sorting">Sorting</NavLink>

                </li> */}
              </ul>
             
            </div>
          </div>
        </nav>
      </header>




    </>
  );
}

export default Navber;
