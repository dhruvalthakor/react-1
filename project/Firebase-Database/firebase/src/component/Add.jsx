import React, { useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';
import { app } from '../firebase';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

function Add() {
  const [form, setForm] = useState({
    name: "",
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

  const validateForm = () => {
    const newErrors = {
      name: !form.name,
      email: !form.email,
      password: !form.password
    };
    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.password;
  };

  const sendData = () => {
    if (validateForm()) {
      const id = uuidv4();

      set(ref(db, `users/${id}`), {
        id: id,
        name: form.name,
        email: form.email,
        password: form.password
      })
        .then(() => navigate("/"))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="container bg-dark p-5 rounded rounded-4 text-center w-50 mt-5">
      <h1 className="text-white mb-4">Add User</h1>
      <div className="mb-3">
        <label htmlFor="name" className="form-label text-white">User Name</label>
        <input
          type="text"
          id="name"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          placeholder="Enter name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <div className="invalid-feedback">Name is required.</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label text-white">User Email</label>
        <input
          type="email"
          id="email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          placeholder="Enter email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <div className="invalid-feedback">Valid email is required.</div>}
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="form-label text-white">User Password</label>
        <input
          type="password"
          id="password"
          className={`form-control ${errors.password ? "is-invalid" : ""}`}
          placeholder="Enter password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        {errors.password && <div className="invalid-feedback">Password is required.</div>}
      </div>
      <div className="d-grid">
        <button className="btn btn-success btn-lg" onClick={sendData}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Add;
