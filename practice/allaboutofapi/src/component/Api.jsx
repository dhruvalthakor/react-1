import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Api() {
  const [data, setData] = useState([]);
  const [main, setMain] = useState([]);

  const navigate = useNavigate();

// function maindata() {
  // axios.get('http://localhost:4040/users')
  // .then((res) => {
  //   setData(Object.keys(res.data[0]));
  //   setMain(res.data);
  // })
  // .catch((err) => console.log(err));
// }


    useEffect(() => {
      axios.get('http://localhost:4040/users')
  .then((res) => {
    setData(Object.keys(res.data[0]));
    setMain(res.data);
  })
  .catch((err) => console.log(err));
    }, []);
 


  function deletehe(i) {

    axios.delete(`http://localhost:4040/users/${i}`)
      .then((res) => {
        console.log(res.data);
        navigate("/")
      })
      .catch((err) => console.log(err));

   
  }


  // maindata()

  
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2 className="text-light display-4">User Information</h2>
        <p className="text-secondary">Manage your user database efficiently</p>
        <Link className="btn btn-custom mt-3" to={"/display"}>➕ Add New User</Link>
      </div>

      <div className="custom-card shadow-lg p-4">
        <div className="table-responsive">
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                {data.map((e, i) => (

                  <th key={i} scope="col" className="text-uppercase">{e}</th>

                ))}
                <th scope="col" className="text-uppercase"> action</th>
              </tr>
            </thead>
            <tbody>
              {main.map((item, i) => (
                <tr key={i} className="fade-in">
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td className="">
                    <a className="me-1" onClick={() => deletehe(item.id)}>
                      <i className="fa-solid fa-trash" style={{ color: "#fafafa" }}></i>
                    </a>
                    <Link className="ms-3" to={`/edit/${item.id}`}>
                      <i className="fa-solid fa-pen-nib" style={{ color: "#efeff1" }}></i>
                    </Link>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Api);
