import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import Navbar from './Navbar'

function Home() {

  const [list, setlist] = useState([]);
 

useEffect(() => {
  const dateff = async () => {
    try {
      const maind = await fetch(`https://fakestoreapi.com/products`);
      const data1 = await maind.json();
      console.log(data1);

      setlist(data1);
    } catch (error) {
      console.log("error");
    }
  };
  dateff();
}, []);

  return (
    <>
      <Navbar />
<section className="container d-flex justify-content-center flex-wrap gap-3 mt-4">
  {
    list.map((product) => (
      <div
      className="card shadow-lg mb-4"
      style={{
        width: "400px",
        // backgroundColor: "#2c3e50",
        // color: "#ecf0f1", 
        border: "none",
        borderRadius: "15px", 
      }}
      key={product.id}
    >
      <div className="row g-0 align-items-center px-3 py-3">
        <div className="col-md-4">
          <img
            src={product.image}
            className="img-fluid rounded-start"
            style={{ maxHeight: "150px", objectFit: "contain" }}
            alt={product.title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title fw-bold">{product.title.slice(0, 40)}</h5>
            <p className="card-text text-truncate">{product.description.slice(0, 75)}</p>
            <a
              href="#"
              className="btn w-100 d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "#e67e22", // Orange CTA button color
                color: "#fff", // White text for the button
                borderRadius: "5px", // Slightly rounded button
                fontWeight: "bold",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-currency-rupee me-2"
                viewBox="0 0 16 16"
              >
                <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
              </svg>
              {product.price}
            </a>
          </div>
        </div>
      </div>
    </div>
    
    ))
  }
</section>
    </>
  )
}

export default Home
