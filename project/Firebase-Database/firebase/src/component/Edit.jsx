import React, { useEffect, useState } from 'react';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { app } from '../firebase';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
  const { id } = useParams(); // Extract id from params
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const db = getDatabase(app);

  // Fetch the data of the specific user when the component mounts
  useEffect(() => {
    const userRef = ref(db, `user/`);
    onValue(userRef, (snapshot) => {
      const data =Object.values(snapshot.val());
      const update=data.find((e)=>e.id==id)
      
      if (update) {
        setForm({
          name: update.name,
          email: update.email,
          password: update.password
        });
      }
    });
  }, [db, id]);

  const sendData = () => {
    if (!form.name || !form.email || !form.password) {
      alert("All fields are required.");
    } else {
      set(ref(db, `user/`), {
        id: id, // Use existing id to update the user
        name: form.name,
        email: form.email,
        password: form.password
      })
        .then(() => navigate("/")) // Navigate after update
        .catch((err) => console.log(err));
    }
  };


  return (
    <>
      <div className="container bg-dark p-4 rounded-4 text-center w-50 mt-5">
        <h1 className="text-white">Update User</h1>
        <div className="col">
          <label htmlFor="name">User Name</label>
          <input
            type="text"
            id="name"
            required
            placeholder="Enter name"
            className="form-control"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="col my-4">
          <label htmlFor="email">User Email</label>
          <input
            type="email"
            id="email"
            required
            placeholder="Enter email"
            className="form-control"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div className="col">
          <label htmlFor="password">User Password</label>
          <input
            type="password"
            id="password"
            required
            placeholder="Enter password"
            className="form-control"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>
        <div className="col mt-3">
          <button className="btn btn-danger" onClick={sendData}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Edit;
