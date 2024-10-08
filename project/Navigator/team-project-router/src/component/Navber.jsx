import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


function Navber() {


  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
          <a className="navbar-brand" href="#"><span className='text-danger fw-bold fs-4'>D & S</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4 flex-grow-0 w-100 justify-content-center text-black">
                <li className="nav-item">
                  <NavLink className={(e) => e.isActive ? "crimson" : "black"} to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className={(e) => e.isActive ? "crimson" : "black"} to="/team">Team</NavLink>

                </li>
                <li className="nav-item">
                <NavLink className={(e) => e.isActive ? "crimson" : "black"} to="/SessionStorage">SessionStorage</NavLink>

                </li>
                <li className="nav-item">
                <NavLink className={(e) => e.isActive ? "crimson" : "black"} to="/Textlist">localStorage</NavLink>

                </li>
                <li className="nav-item">
                <NavLink className={(e) => e.isActive ? "crimson" : "black"} to="/Display">Display</NavLink>

                </li>
              </ul>
              <form className="d-flex gap-3" role="search">
                <a href="#" className="text-decoration-none text-dark"><i className="fa-brands fa-linkedin fa-xl"></i></a>
                <a href="#" className="text-decoration-none text-dark"><i className="fa-brands fa-github fa-xl"></i></a>
              </form>
            </div>
          </div>
        </nav>
      </header>




    </>
  );
}

export default Navber;
