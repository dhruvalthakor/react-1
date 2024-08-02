import React, { useState } from "react";
import { ProductData } from "./Data";

function Mainprodect() {
  const [count, setCount] = useState(0);

  let prodect = ProductData[count];

  function Decrement() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(19);
    }
  }

  function Increment() {
    if (count < ProductData.length-1) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  }

  return (
    <div className="container-fluid mb-5">
      <h1 className="text-center bg-dark text-white py-2">Products</h1>
      <div className="container text-center mt-5 d-flex align-items-center justify-content-center">
        <button className="btn" onClick={Decrement}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-arrow-left-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
          </svg>
        </button>
        <ul className="list-unstyled mx-4">
          <li className="mt-5 mb-5">
            <div className="card mb-3" style={{width: "540px",height:"250px",maxHeight:"auto"}}>
              <div className="row g-0 justify-content-center align-items-center px-3 py-3 w-100 ">
                <div className="col-md-4 w-25" >
                  <img 
                    src={prodect.image}
                    className="card-img-top object-fit-contain w-100 h-50"
                    alt={prodect.title} 
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{prodect.title.slice(0, 40)}</h5>
                    <p className="card-text">
                      {prodect.description.slice(0, 75)}
                    </p>
                    <a href="#" className="btn btn-dark w-100 d-flex justify-content-center align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-currency-rupee"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                      </svg>
                      {prodect.price}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <button className="btn" onClick={Increment}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
             width="30"
            height="30"
            fill="currentColor"
            className="bi bi-arrow-right-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Mainprodect;

// ----------------------------------------------------------------------------------------------------
// import React, { useState } from 'react';
// import { ProductData } from "./Data";
// // import prodect from './prodect';

// function Mainprodect() {
//     const [count, setCount] = useState(0);
//     const [box, setBox] = useState([cart(ProductData[0])]);

//     function cart(prodect) {
//         return (
//             <li key={prodect.id}>
//                 <div className="card pb-2 p-1 bg-success-subtle" style={{ width: 300, height: 400 }}>
//                     <img
//                         src={prodect.image}
//                         className="card-img-top object-fit-contain h-50"
//                         alt={prodect.title}
//                     />
//                     <div className="card-body">
//                         <h5 className="card-title">{prodect.title.slice(0, 40)}</h5>
//                         <p className="card-text">{prodect.description.slice(0, 75)}</p>
//                         <a href="#" className="btn btn-dark w-100">
//                             {prodect.price}
//                         </a>
//                     </div>
//                 </div>
//             </li>
//         );
//     }

//     function Decrement() {
//         const newCount = (count - 1 + ProductData.length) % ProductData.length;
//         setCount(newCount);
//         setBox([cart(ProductData[newCount])]);
//     }

//     function Increment() {
//         const newCount = (count + 1) % ProductData.length;
//         setCount(newCount);
//         setBox([cart(ProductData[newCount])]);
//     }

//     return (
//         <div className="container">
//             <h1 className="text-center">Prodect</h1>
//             <div className="container text-center mt-5 d-flex align-items-center justify-content-center">
//                 <button className="btn btn-dark" onClick={Decrement}>
//                     Decrement
//                 </button>
//                 <ul className="list-unstyled mx-4">
//                     {box}
//                 </ul>
//                 <button className="btn btn-primary" onClick={Increment}>
//                     Increment
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Mainprodect;
