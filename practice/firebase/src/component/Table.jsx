import { getDatabase, onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { app } from '../firebase';

function Table() {
  const [data, setData] = useState([]);


  const db = getDatabase(app);

  useEffect(() => {
    const starCountRef = ref(db, 'user/');


    onValue(starCountRef, (snapshot) => {
      const fetchedData = snapshot.val();

      if( !!fetchedData ) {
        setData([fetchedData]);
      } else {
        console.log('Data not found');
      }  
      
    });
  }, [db]);
  console.log(data);

  return (
    <>

      {/* {data.map((item, i) => (
                <tr key={i} className="fade-in">
                  <td>{item.name.id}</td> */}
                  {/* <td>{item.name}</td> */}
                  {/* <td>{item.email}</td> */}
      {/* <td className="">
                    <a className="me-1" onClick={() => deletehe(item.id)}>
                      <i className="fa-solid fa-trash" style={{ color: "#fafafa" }}></i>
                    </a>
                    <Link className="ms-3" to={`/edit/${item.id}`}>
                      <i className="fa-solid fa-pen-nib" style={{ color: "#efeff1" }}></i>
                    </Link>
                  </td> */}

      {/* </tr>
      ))}  */}

    </>
  );
}

export default Table;
