import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Display() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const [render, setRender] = useState(false);

  const navigate = useNavigate();

  function handleData(e) {
    e.preventDefault();

    axios.post("http://localhost:4040/users", formData)
      .then((res) => {
        console.log(res);
        setRender(true);
      })
      .catch((err) => console.log(err));
  }

  if (render) {
    navigate("/");
  }

  return (
    <div className="container my-5 w-50">
      <div className="card bg-dark text-white shadow-lg p-4">
        <h3 className="text-center mb-4">Add New User</h3>
        <form onSubmit={handleData}>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              placeholder="Enter name"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="Enter email"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-pill">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Display;
