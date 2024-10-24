import React, { useState, useEffect } from 'react';
import './login.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import { app } from '../firebase';

function Login() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [data, setData] = useState([]);
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [formlogin, setFormlogin] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        password: false,
    });
    const navigate = useNavigate();
    const db = getDatabase(app);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    const validateForm = () => {
        const newErrors = {
            name: !form.name,
            email: !form.email,
            password: !form.password
        };
        setErrors(newErrors);
        return !newErrors.name && !newErrors.email && !newErrors.password;
    };

    const sendData = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const user = data.find(user => user.email === form.email);
            if (user) {
                alert("User already exists, please sign in.");
            } else {
                const id = uuidv4();
                set(ref(db, `users/${id}`), {
                    id: id,
                    name: form.name,
                    email: form.email,
                    password: form.password
                })
                .then(() => {
                    setIsSignUp(false);
                    setForm({ name: "", email: "", password: "" });
                })
                .catch((err) => console.log(err));
            }
        }
    };

    useEffect(() => {
        const starCountRef = ref(db, 'users/');
        const unsubscribe = onValue(starCountRef, (snapshot) => {
            const fetchedData = snapshot.val();
            if (fetchedData) {
                setData(Object.values(fetchedData));
            } else {
                setData([]);
            }
        });
        return () => unsubscribe();
    }, [db]);

    const validatelogin = () => {
        const newErrors = {
            email: !formlogin.email,
            password: !formlogin.password
        };
        setErrors(newErrors);
        return !newErrors.email && !newErrors.password;
    };

    const logindata = (e) => {
        e.preventDefault();
        if (validatelogin()) {
            const user = data.find(user => user.email === formlogin.email);
            if (user) {
                if (user.password === formlogin.password) {
                    navigate("/");
                } else {
                    alert("Incorrect password.");
                }
            } else {
                alert("User not found. Please sign up.");
            }
        }
    };

    return (
        <>
  <div className="container-fluid p-2 px-5 d-flex justify-content-between" style={{ backgroundColor: "rgb(255,240,229)" }}>
        <div><h4>Login</h4></div>
        <div className="d-flex gap-2 align-items-center">
          <NavLink to={"/"} className="navitem text-decoration-none text-black">
            <i className="fa-solid fa-house" style={{ color: "black" }}></i> Home
          </NavLink>
          <i className="fa-solid fa-angle-right"></i>
         
        </div>
      </div>




        <div className="container-fluid-from">
            <div className="main-container">
                <div className={`form-box ${isSignUp ? 'sign-up-mode' : 'sign-in-mode'}`}>
                    <div className="form-content">
                        {isSignUp ? (
                            <div className="signup-form">
                                <h2>Create Account</h2>
                                <form>
                                    <div className="input-group">
                                        <label>Name</label>
                                        <input type="text" placeholder="Enter your name" className={` ${errors.name ? "is-invalid" : ""}`}
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })} />
                                        {errors.name && <div className="invalid-feedback">Name is required.</div>}
                                    </div>
                                    <div className="input-group">
                                        <label>Email</label>
                                        <input type="email" placeholder="Enter your email" className={` ${errors.email ? "is-invalid" : ""}`}
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })} />
                                        {errors.email && <div className="invalid-feedback">Valid email is required.</div>}
                                    </div>
                                    <div className="input-group">
                                        <label>Password</label>
                                        <input type="password" placeholder="Enter your password" className={` ${errors.password ? "is-invalid" : ""}`}
                                            value={form.password}
                                            onChange={(e) => setForm({ ...form, password: e.target.value })} />
                                        {errors.password && <div className="invalid-feedback">Password is required.</div>}
                                    </div>
                                    <button className="btn btn-success btn-lg" onClick={sendData}>Submit</button>
                                </form>
                                <p>Already have an account? <span onClick={toggleForm} className="toggle-link">Sign In</span></p>
                            </div>
                        ) : (
                            <div className="signin-form">
                                <h2>Welcome Back!</h2>
                                <form>
                                    <div className="input-group">
                                        <label>Email</label>
                                        <input type="email" placeholder="Enter your email" className={` ${errors.email ? "is-invalid" : ""}`}
                                            value={formlogin.email}
                                            onChange={(e) => setFormlogin({ ...formlogin, email: e.target.value })} />
                                        {errors.email && <div className="invalid-feedback">Valid email is required.</div>}
                                    </div>
                                    <div className="input-group">
                                        <label>Password</label>
                                        <input type="password" placeholder="Enter your password" className={` ${errors.password ? "is-invalid" : ""}`}
                                            value={formlogin.password}
                                            onChange={(e) => setFormlogin({ ...formlogin, password: e.target.value })} />
                                        {errors.password && <div className="invalid-feedback">Password is required.</div>}
                                    </div>
                                    <button className="btn btn-primary" onClick={logindata}>Sign In</button>
                                </form>
                                <p>Don't have an account? <span onClick={toggleForm} className="toggle-link">Sign Up</span></p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
                        </>
    );
}

export default Login;
