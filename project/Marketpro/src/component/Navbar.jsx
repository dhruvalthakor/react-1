import React from 'react';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg p-3" style={{ background: "rgb(18,21,53)" }}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#"><img src="src/assets/logo-two.png" alt="Logo" /></a>
                    <div className="collapse navbar-collapse d-flex w-100 justify-content-around flex-grow-0" id="navbarTogglerDemo03">
                        {/* Search Form */}
                        <div class="input-group w-50">

                            <select class="form-select input-group-text" style={{ width: "1%" }} aria-label="Default select example" id="basic-addon1">
                                <option selected>All Categories</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                            <input type="text" class="form-control" style={{ width: "200px" }} placeholder="search for a brand " aria-label="Username" aria-describedby="basic-addon1" />
                            <span class="input-group-text px-3 py-3" id="basic-addon2" style={{ background: "rgb(250,104,0)" }}>
                                <i class="fa-solid fa-magnifying-glass" style={{ color: "#fcfcfc" }}></i>
                            </span>
                        </div>

                        {/* Navbar Items */}
                        <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center gap-3">
                            <li className="nav-item">
                                <a className="nav-link active text-white text-center" aria-current="page" href="#">
                                    <i class="fa-regular fa-user fa-xl" style={{ color: "#f7f7f8" }}></i>
                                    <span class="text-md text-white fs-5  d-none d-lg-flex">Profile</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white text-center" href="#">
                                    <i class="fa-regular fa-heart fa-xl" style={{ color: "#f9fafb" }}></i>
                                    <span class="text-md text-white fs-5  d-none d-lg-flex">Wishlist</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white text-center" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                    </svg>         
                                    <span class="text-md text-white fs-5  d-none d-lg-flex">Cart</span>                 
                                       </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </>
    );
}

export default Navbar;
