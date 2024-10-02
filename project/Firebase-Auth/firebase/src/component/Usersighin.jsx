import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { app } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const auth = getAuth(app);

function Usersighin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  function signInUser() {
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then(() => {
        alert('User signed in successfully');
        navigate('/home');
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="container d-flex align-items-center justify-content-center min-vh-100">
        <div className="card p-5 shadow-lg rounded-4 w-100" style={{ maxWidth: '500px' }}>
          <h2 className="text-center mb-4">Sign In</h2>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

          <div className="d-grid gap-2">
            <button className="btn btn-primary mb-3" onClick={signInUser}>
              Sign In
            </button>
          </div>

          <div className="text-center">
            <small className="text-muted">
              Don't have an account? <Link to={"/"}>Sign Up</Link>
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export default Usersighin;
