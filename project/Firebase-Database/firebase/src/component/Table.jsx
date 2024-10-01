import { getDatabase, onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { app } from '../firebase';
import { Link } from 'react-router-dom';

function Table() {
  const [data, setData] = useState([]);
  const [main, setMain] = useState([]);


  const db = getDatabase(app);

  useEffect(() => {
    const starCountRef = ref(db, 'user/');


    onValue(starCountRef, (snapshot) => {
      const fetchedData = snapshot.val();

      if (!!fetchedData) {
        const formattedData = Object.keys(fetchedData).map((key) => ({

          // id: key,
          ...fetchedData[key]


        }));
        setData(formattedData)
      } else {
        console.log('Data not found');
      }

    });
  }, [db]);



function deletehe() {
  
}


  return (
    <>
<div className="d-flex justify-content-center">

      <table className="table table-dark table-hover w-75 mt-5">
        <thead>
          <tr>

            <th scope="col" className="text-uppercase"> action</th>
            <th scope="col" className="text-uppercase"> action</th>
            <th scope="col" className="text-uppercase"> action</th>
            {/* <th scope="col" className="text-uppercase"> action</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i} className="fade-in">
          
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
    </>
  );
}

export default Table;
