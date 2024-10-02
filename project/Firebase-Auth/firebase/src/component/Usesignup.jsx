import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap import

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function Usesignup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const signupUser = () => {
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then(() => {
        alert('User added successfully');
        navigate('/signin');
      })
      .catch((err) => console.log(err));
  };

  async function signInWithGoogle() {
    await signInWithPopup(auth, provider);
    navigate('/home');
  }

  return (
    <>
      <div className="container d-flex align-items-center justify-content-center min-vh-100">
        <div className="card p-5 shadow-lg rounded-4 w-100" style={{ maxWidth: '500px' }}>
          <h1 className="text-center mb-4">Create an Account</h1>

          <div className="mb-3">
            <label htmlFor="user-email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="user-email"
              className="form-control"
              placeholder="Enter email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="user-password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="user-password"
              className="form-control"
              placeholder="Enter password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

          <div className="d-grid gap-2">
            <button className="btn btn-primary mb-3" onClick={signupUser}>
              Sign Up
            </button>
            <button className="btn btn-danger" onClick={signInWithGoogle}>
              <i className="fab fa-google me-2"></i> Sign In with Google
            </button>
          </div>

          <div className="text-center mt-3">
            <small className="text-muted">
              Already have an account? <Link to={"/signin"}>Sign In</Link>
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export default Usesignup;
