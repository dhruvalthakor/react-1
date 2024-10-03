import { getDatabase, onValue, ref, remove } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { app } from '../firebase';
import { Link } from 'react-router-dom';

function Table() {
  const [data, setData] = useState([]);
  const [key, setKey] = useState([]);

  const db = getDatabase(app);

  useEffect(() => {
    const starCountRef = ref(db, 'users/');

    onValue(starCountRef, (snapshot) => {
      const fetchedData = snapshot.val();

      if (fetchedData) {
        setData(Object.values(fetchedData));
        const keys = Object.keys(fetchedData);
        setKey(keys);
      } else {
        setData([]);
        setKey([]);
      }
    });
  }, [db]);

  function deleteUser(index) {
    const deleteItemRef = ref(db, `users/${key[index]}`);
    remove(deleteItemRef)
      .then(() => console.log("Deleted successfully"))
      .catch((err) => console.log(err));
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="text-light">User List</h2>
        <Link to={"/from"}>
          <button className="btn btn-success">Add User</button>
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-hover table-bordered table-striped text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th scope="col" className="text-uppercase">Name</th>
              <th scope="col" className="text-uppercase">Email</th>
              <th scope="col" className="text-uppercase">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="fade-in">
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button 
                    className="btn btn-danger btn-sm me-2"
                    onClick={() => deleteUser(i)}
                    title="Delete User"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <Link 
                    to={`/edit/${key[i]}`} 
                    className="btn btn-primary btn-sm"
                    title="Edit User"
                  >
                    <i className="fa-solid fa-pen-nib"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
