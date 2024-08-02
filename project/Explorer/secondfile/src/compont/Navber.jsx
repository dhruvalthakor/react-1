import React from "react";


function Navber() {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark" id="home">
        <a className="navbar-brand" href="#">
            <img width={120} style={{height:50,objectFit:"cover"}} src="src/assets/logo.png" alt="Logo"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-center me-4 flex-grow-0 w-100" id="navbarNav">
            <ul className="navbar-nav nav-underline ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Pages">Pages</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Services">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Shop">Shop</a>
                </li>
              
                <li className="nav-item">
                    <a className="nav-link" href="#Contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>

    </>
  );
}

export default Navber;
