import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


function Editdata() {
  const params = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });
  const navigate = useNavigate();

  

  useEffect(() => {
    axios.get(`http://localhost:4040/users/${params.i}`)
      .then((res) => {
        
              setFormData({
                  name: res.data.name||"",
                  email: res.data.email||""
                });
       
        
      })
      .catch((err) => console.log(err));
  }, [params.i]);

  function handleData(e) {
    e.preventDefault();

    axios.put(`http://localhost:4040/users/${params.i}`, {
        name: formData.name,
        email: formData.email
    })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container my-5 w-50">
      <div className="card bg-dark text-white shadow-lg p-4">
        <h3 className="text-center mb-4">Edit User</h3>
        <form onSubmit={handleData}>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              value={formData.name}
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
              value={formData.email}
              placeholder="Enter email"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-pill">updeta</button>
        </form>
      </div>
    </div>
  );
}

export default React.memo(Editdata);
