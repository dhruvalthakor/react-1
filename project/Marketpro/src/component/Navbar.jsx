import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../context/context';

function Navbar() {
    const value = useContext(UserContext);
    const navigate = useNavigate();

    function sherching() {
        if (value.Data) {
            navigate("/shop");
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg p-3" style={{ background: "rgb(18,21,53)" }}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand " href="#">
                        <img src="src/assets/logo-two.png" alt="Logo" />
                    {/* marketpro */}
                    </a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">

                        {/* Search Form */}
                        <form className="input-group w-100 w-md-50" onSubmit={(e) => e.preventDefault()}>
                            <input type="text" className="form-control mt-3" placeholder="Search for a brand" 
                                   aria-label="search" aria-describedby="basic-addon1" value={value.Data} 
                                   onChange={(e) => value.setData(e.target.value)} />
                            <button className="input-group-text px-3 py-3 mt-3" onClick={sherching} id="basic-addon2" 
                                    style={{ background: "rgb(250,104,0)" }}>
                                <i className="fa-solid fa-magnifying-glass" style={{ color: "#fcfcfc" }}></i>
                            </button>
                        </form>

                        {/* Navbar Items */}
                        <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center gap-3 ms-3 me-3">
                            <li className="nav-item">
                                <Link className="nav-link text-white text-center" to="/shop">
                                    <i className="fa-solid fa-cart-shopping fa-xl" style={{ color: "#f2f2f2" }}></i>
                                    <span className="text-md text-white fs-5 d-none d-md-block">Shop</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white text-center" to="/login">
                                    <i className="fa-regular fa-user fa-xl" style={{ color: "#f7f7f8" }}></i>
                                    <span className="text-md text-white fs-5 d-none d-md-block">Profile</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white text-center" to={"/wishlist"}>
                                    <i className="fa-regular fa-heart fa-xl" style={{ color: "#f9fafb" }}></i>
                                    <span className="text-md text-white fs-5 d-none d-md-block">Wishlist</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white text-center position-relative" to="/cart">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                    </svg>
                                    <span className="text-md text-white fs-5 d-none d-md-block">Cart</span>
                                    <span className="position-absolute top-0">1</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
