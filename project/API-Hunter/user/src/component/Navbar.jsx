import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const [users, setUsers] = useState("")
const navigate = useNavigate()


useEffect(() => {
    axios.get(`http://localhost:4040/login/1`)
        .then((res) => setUsers(res.data))
        .catch(err => console.log(err))
}, [])



    function logouthandle() {
    
            axios.delete(`http://localhost:4040/login/1`,{})
                .then((res) => navigate("/login"))
                .catch(err => console.log(err))
    

    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-secondary">
                <div className="container">
                    <a className="navbar-brand" href="#"><h5>Home</h5></a>
                    <a className="navbar-brand" href="#"><h5>{users.name}</h5></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end flex-grow-0" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {users ? (
                                <li className="nav-item">
                                    <Link className="nav-link active" href="#" onClick={logouthandle}>Log out</Link>
                                </li>
                             ) : ( 
                                <li className="nav-item">
                                    <Link className="nav-link active " aria-current="page" to="/login">Login</Link>
                                </li>
                             )} 
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
