import React, { useEffect, useState } from 'react';
import Navder from './Navder';
import Footer from './Footer';

function Useeffactcard1() {
  const [list, setlist] = useState([]);
  const [lists, setlists] = useState([]);

  useEffect(() => {
    const dateff = async () => {
      try {
        const maind = await fetch(`https://fakestoreapi.com/products`);
        const data1 = await maind.json();
        console.log(data1);

        setlists(data1);
        setlist(data1);
      } catch (error) {
        console.log("error");
      }
    };
    dateff();
  }, []);

  let mensection = () => {
    setlist(lists.filter((ele) => ele.category === "men's clothing"));
  };

  let womensection = () => {
    setlist(lists.filter((ele) => ele.category === "women's clothing"));
  };

  let jewelerysection = () => {
    setlist(lists.filter((ele) => ele.category === "jewelery"));
  };

  let electronicssection = () => {
    setlist(lists.filter((ele) => ele.category === "electronics"));
  };

  let allsection = () => {
    setlist(lists);
  };

 

  return (
    <>
      <header>
        <Navder
          mensection={mensection}
          womensection={womensection}
          jewelerysection={jewelerysection}
          electronicssection={electronicssection}
          allsection={allsection}
        />
      </header>

      <main>
        <section>
          <div className="d-flex justify-content-center gap-4 flex-wrap text-center w-100" style={{ backgroundColor: "#2c3e50" }}>
            <h1 className="mt-3" style={{ color: "#ecf0f1" }}>Product</h1>
            <div className="d-flex justify-content-center gap-4 flex-wrap text-center mb-5">
              {
list?(
list.map((product) => (
  <div
    className="card"
    style={{
      width: "400px",
      height: "auto",
      // maxHeight: "auto",
      backgroundColor: "#2c3e50", 
      color: "#ecf0f1", 
      border: "3px solid #34495e", 
    }}
    key={product.id}
  >
    <div className="row g-0 justify-content-center align-items-center px-3 py-3 w-100">
      <div className="col-md-4 w-25">
        <img
          src={product.image}
          className="card-img-top object-fit-contain w-100 h-50"
          alt={product.title}
        />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{product.title.slice(0, 40)}</h5>
          <p className="card-text">{product.description.slice(0, 75)}</p>
          <a
            href="#"
            className="btn w-100 d-flex justify-content-center align-items-center"
            style={{
              backgroundColor: "#e67e22", 
              color: "#2c3e50", 
            }}
          >
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
            {product.price}
          </a>
        </div>
      </div>
    </div>
  </div>
))
):(
  <>
 <h1 style={{ color: "#ecf0f1" }}> loading</h1>
  </>
)}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Useeffactcard1;
