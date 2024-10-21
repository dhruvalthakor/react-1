import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Wishlistdata() {
    const [Wishlistdata, setWishlistdata] = useState(JSON.parse(localStorage.getItem("Wishlistdata"))||[]);
  return (
    <>
      <div className="container my-5">
      <div class="row">
          {/* <!-- Product 1 --> */}
         {Wishlistdata .filter(({ category }) => (category ? category === "Smartphones"&&"Cameras" : true)).map((ele)=>(
           <div class="col-md-4 w-25 ">
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
             
                <i class="fa-solid fa-heart fa-xl position-absolute" style={{right:"10px",top:"15px"}}></i>
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
