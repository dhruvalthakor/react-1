import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

function Wishlistdata() {
  const [Wishlistdata, setWishlistdata] = useState(JSON.parse(localStorage.getItem("Wishlist")) || []);



  useEffect(() => {
    localStorage.setItem("Wishlist", JSON.stringify(Wishlistdata));
  }, [Wishlistdata]);

  
  function wishlistdata(ele) {
   
      setWishlistdata(Wishlistdata.filter((e) => e.id !== ele.id))
    
  }

  return (
    <>
    <div className="container-fluid p-2 px-5 d-flex justify-content-between" style={{ backgroundColor: "rgb(255,240,229)" }}>
        <div><h4>shop</h4></div>
        <div className="d-flex gap-2 align-items-center">
          <NavLink to={"/"} className="navitem text-decoration-none text-black">
            <i className="fa-solid fa-house" style={{ color: "black" }}></i> Home
          </NavLink>
          <i className="fa-solid fa-angle-right"></i>
          <Link to={"/wishlist"} className="text-decoration-none text-danger">wishlist</Link>
        </div>
      </div>
      <div className="container my-5">
      <div class="row">
          {/* <!-- Product 1 --> */}
         {Wishlistdata.map((ele)=>(
           <div class="col-md-4 w-25">
           <div class="card card-Selling mb-4 shadow-sm position-relative">
             <img src={ele.image} class="card-img-top object-fit-contain p-2" style={{height:"150px"}} alt="Product Image"/>
             <div class="card-body">
           
               <h5 class="card-title">{ele.name}</h5>
               <p class="card-text text-muted">By Lucky Supermarket</p>
               <p class="card-text">
                 <span class="text-muted text-decoration-line-through">₹{(ele.price.amount * 1.3)}</span>
                 <span class="text-primary">₹{ele.price.amount}</span>/-
               </p>
              <div className="d-flex gap-2 align-items-center"> <Link class="btn btn-outline-success btn-sm" to={"/shop"}>Shop Now</Link>
             
                <i class="fa-solid fa-heart fa-xl position-absolute" style={{right:"20px",top:"25px"}}></i>
              
                <i class="fa-solid fa-circle-xmark fa-xl position-absolute" style={{right:"-10px",top:"0px"}} onClick={() => wishlistdata(ele)}></i>
              </div>
             </div>
           </div>
         </div>
         ))}
        </div>
      </div>
    </>
  )
}

export default Wishlistdata
