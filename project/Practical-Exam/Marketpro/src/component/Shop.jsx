import React, { useContext, useEffect, useState } from 'react';
import { getDatabase, increment, ref, set } from 'firebase/database';
import { ProductData } from "./Data";
import "./shop.css"
import { app } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addhender } from '../features/cart/cartSlice';
import { Link, NavLink } from 'react-router-dom';
import UserContext from '../context/context';


function Shop() {
  const [filter, setFilter] = useState('');
  const [Brand, setBrand] = useState('');
  const [sortData, setSortData] = useState('');
  const [Wishlistdata, setWishlistdata] = useState(JSON.parse(localStorage.getItem("Wishlist")) || []);
  const count = useSelector((state) => state.addcart.items)
  let products = ProductData || [];
  const db = getDatabase(app);
  const dispatch = useDispatch()
  const value = useContext(UserContext)



  useEffect(() => {
    localStorage.setItem("Wishlist", JSON.stringify(Wishlistdata));
  }, [Wishlistdata]);

  
  function wishlistdata(ele) {
   
    if (!Wishlistdata.find(item => item.id === ele.id)) {
      const updatedWishlist = [...Wishlistdata, ele];
      setWishlistdata(updatedWishlist);
    }
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
          <Link to={"/shop"} className="text-decoration-none text-danger">shop</Link>
        </div>
      </div>

      <div className="container-fluid mt-4">
        <div className="row">
          {/* Sidebar for Product Categories */}
          <div className="col-12 col-md-3">
            <div className="card">
              <div className="card-body" style={{ textAlign: 'left' }}>
                <h1 className="card-title fs-4 fw-bold">Product Category</h1>
                <hr />
                <ul className="list-group list-group-flush list-unstyled overflow-auto" style={{ height: "400px" }}>
                  <li className="mt-3">
                    <button className="btn" value="" onClick={(e) => setFilter(e.target.value)}>All Categories</button>
                  </li>
                  <li className="mt-3"><button className=" btn" value="Headphones" onClick={(e) => setFilter(e.target.value)}>Headphones</button></li>
                  <li className="mt-3"><button className=" btn" value="Laptops" onClick={(e) => setFilter(e.target.value)}>Laptops</button></li>
                  <li className="mt-3"><button className=" btn" value="Smartphones" onClick={(e) => setFilter(e.target.value)}>Smartphones</button></li>
                  <li className="mt-3"><button className=" btn" value="Televisions" onClick={(e) => setFilter(e.target.value)}>Televisions</button></li>
                  <li className="mt-3"><button className=" btn" value="Cameras" onClick={(e) => setFilter(e.target.value)}>Cameras</button></li>
                  <li className="mt-3"><button className=" btn" value="Gaming Consoles" onClick={(e) => setFilter(e.target.value)}>Gaming Consoles</button></li>
                  <li className="mt-3"><button className=" btn" value="Tablets" onClick={(e) => setFilter(e.target.value)}>Tablets</button></li>
                  <li className="mt-3"><button className=" btn" value="Wearables" onClick={(e) => setFilter(e.target.value)}>Wearables</button></li>
                  <li className="mt-3"><button className=" btn" value="Accessories" onClick={(e) => setFilter(e.target.value)}>Accessories</button></li>
                  <li className="mt-3"><button className=" btn" value="Home Appliances" onClick={(e) => setFilter(e.target.value)}>Home Appliances</button></li>
                  <li className="mt-3"><button className=" btn" value="Speakers" onClick={(e) => setFilter(e.target.value)}>Speakers</button></li>
                  <li className="mt-3"><button className=" btn" value="Smart Home" onClick={(e) => setFilter(e.target.value)}>Smart Home</button></li>
                </ul>
              </div>
            </div>

        

            <div className="card mt-5">
              <div className="card-body" style={{ textAlign: 'left' }}>
                <h1 className="card-title fs-4 fw-bold">Filter by Brand</h1>
                <hr />
                <ul className="list-group list-group-flush list-unstyled overflow-auto" style={{ height: "400px" }}>
                  <li className="mt-3"><button className=" btn " value="" onClick={(e) => setBrand(e.target.value)}>All Brand</button></li>
                  <li className="mt-3"><button className=" btn" value="Sony" onClick={(e) => setBrand(e.target.value)}>Sony</button></li>
                  <li className="mt-3"><button className=" btn" value="Apple" onClick={(e) => setBrand(e.target.value)}>Apple</button></li>
                  <li className="mt-3"><button className=" btn" value="Samsung" onClick={(e) => setBrand(e.target.value)}>Samsung</button></li>
                  <li className="mt-3"><button className=" btn" value="LG" onClick={(e) => setBrand(e.target.value)}>LG</button></li>
                  <li className="mt-3"><button className=" btn" value="Dell" onClick={(e) => setBrand(e.target.value)}>Dell</button></li>
                  <li className="mt-3"><button className=" btn" value="Bose" onClick={(e) => setBrand(e.target.value)}>Bose</button></li>
                  <li className="mt-3"><button className=" btn" value="Microsoft" onClick={(e) => setBrand(e.target.value)}>Microsoft</button></li>
                  <li className="mt-3"><button className=" btn" value="Canon" onClick={(e) => setBrand(e.target.value)}>Canon</button></li>
                  <li className="mt-3"><button className=" btn" value="Fitbit" onClick={(e) => setBrand(e.target.value)}>Fitbit</button></li>
                  <li className="mt-3"><button className=" btn" value="Logitech" onClick={(e) => setBrand(e.target.value)}>Logitech</button></li>
                  <li className="mt-3"><button className=" btn" value="Anker" onClick={(e) => setBrand(e.target.value)}>Anker</button></li>
                  <li className="mt-3"><button className=" btn" value="Dyson" onClick={(e) => setBrand(e.target.value)}>Dyson</button></li>
                  <li className="mt-3"><button className=" btn" value="Google" onClick={(e) => setBrand(e.target.value)}>Google</button></li>
                  <li className="mt-3"><button className=" btn" value="Amazon" onClick={(e) => setBrand(e.target.value)}>Amazon</button></li>
                  <li className="mt-3"><button className=" btn" value="Razer" onClick={(e) => setBrand(e.target.value)}>Razer</button></li>
                  <li className="mt-3"><button className=" btn" value="HP" onClick={(e) => setBrand(e.target.value)}>HP</button></li>
                  <li className="mt-3"><button className=" btn" value="OnePlus" onClick={(e) => setBrand(e.target.value)}>OnePlus</button></li>
                  <li className="mt-3"><button className=" btn" value="Asus" onClick={(e) => setBrand(e.target.value)}>Asus</button></li>
                  <li className="mt-3"><button className=" btn" value="JBL" onClick={(e) => setBrand(e.target.value)}>JBL</button></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Product Listing */}
          <div className="col-12 col-md-9">
            <div className="d-flex justify-content-between mb-3">
              <span className="text-white">Showing 1-20 of 85 results</span>
              <div className="d-flex">
                <button className="btn btn-light me-2"><i className="bi bi-grid-fill"></i></button>
                <button className="btn btn-light me-2"><i className="bi bi-list-ul"></i></button>
                <div className="dropdown">
                  <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown">Sort by</button>
                  <ul className="dropdown-menu">
                    <li className="mt-3"><button className=" btn dropdown-item" value="" onClick={(e) => setSortData(e.target.value)}>Clear</button></li>
                  <li className="mt-3"><button className=" btn dropdown-item" value="Low to high" onClick={(e) => setSortData(e.target.value)} >Low to high</button></li>
                  <li className="mt-3"><button className=" btn dropdown-item" value="high to low" onClick={(e) => setSortData(e.target.value)} >high to low</button></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Responsive Product Cards */}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              {products
                .filter(({ category }) => (filter ? category === filter : true))
                .filter(({ brand }) => (Brand ? brand === Brand : true))
                .sort((a, b) => sortData === "Low to high" ? a.price.amount - b.price.amount : 0)
                .sort((a, b) => sortData === "high to low" ? b.price.amount - a.price.amount : 0)
                .filter(({ name }) => {
                  return name.indexOf(value.Data) >= 0;
                })
                .map((ele) => (
                  <div key={ele.id} className="col mb-4 position-relative">
                    <div className="card product-card h-100">
                      <img src={ele.image} className="card-img-top" alt={ele.name} style={{ maxHeight: "200px", objectFit: "cover" }} />
                      <div className="card-body">
                        <h5 className="card-title">{ele.name}</h5>
                        <div className="ratings">
                          <span className="text-warning">
                            {"★".repeat(Math.round(ele.rating)) + "☆".repeat(5 - Math.round(ele.rating))}
                          </span>
                          <span className="review-count">({ele.reviews} reviews)</span>
                        </div>
                        <div className="price-details mt-3">
                          <span className="discount">29% off</span>
                          <span className="festival text-success">Great Indian Festival</span>
                          <h4 className="current-price">₹{ele.price.amount}</h4>
                          <p className="original-price">
                            M.R.P.: <del>₹{(ele.price.amount * 1.3)}</del>
                          </p>
                        </div>
                       
                        <p className="free-delivery text-success">FREE Delivery </p>

                        <button className="btn btn-danger mt-3" onClick={() => dispatch(addhender(ele))}>
                          Add to Cart
                        </button>
                        {Wishlistdata.find(pro => pro.id === ele.id) ? (
          <i className="fa-solid fa-heart fa-xl position-absolute" style={{ right: "10px", top: "15px" }}></i>
        ) : (
          <i className="fa-regular fa-heart fa-xl position-absolute" onClick={() => wishlistdata(ele)} style={{ right: "10px", top: "15px" }}></i>
        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Shop;
