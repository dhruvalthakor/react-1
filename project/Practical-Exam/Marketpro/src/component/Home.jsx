import React, { useEffect, useState } from 'react';
import { getDatabase, increment, ref, set } from 'firebase/database';
import { ProductData } from "./Data";
import "./home.css"
import { app } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addhender } from '../features/cart/cartSlice';
import { json, Link } from 'react-router-dom';


function Home() {
  const [Wishlistdata, setWishlistdata] = useState(JSON.parse(localStorage.getItem("Wishlist")) || []);
  const count = useSelector((state) => state.addcart.items)
  let products = ProductData || [];
  const db = getDatabase(app);
  const dispatch = useDispatch()






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
<section>
  <div className="container-fluid d-flex justify-content-center mt-3">
    <div className="card p-2 border-0" style={{ width: "98%" }}>
      <img
        src="https://react.marketpro.wowtheme7.com/assets/images/bg/banner-two-bg.png"
        className="card-img object-fit-cover img-fluid"
        alt="Background"
        style={{ maxHeight: "100%" }}
      />
      <div className="card-img-overlay d-flex justify-content-center align-items-center flex-column">
        <div className="row w-100" style={{ maxWidth: "840px" }}>
          <div className="col-md-6 d-flex flex-column justify-content-center text-center text-md-start text-white">
            <span className="text-white mb-2 h3">Starting at only $250</span>
            <h1 className="banner-item-two__title text-white">Get The Sound You Love For Less</h1>
            <Link className="mt-3" to={"/shop"}>
              <button className="shop-btn btn text-white border border-1 rounded-5 px-4 py-2">
                Shop Now <i className="fa-solid fa-cart-shopping" style={{ color: "#f2f2f2" }}></i>
              </button>
            </Link>
          </div>
          <div className="col-md-6 d-none d-md-flex justify-content-center align-items-center">
            <img
              src="https://react.marketpro.wowtheme7.com/assets/images/thumbs/banner-two-img.png"
              className="img-fluid rounded-start object-fit-contain"
              alt="Product"
              style={{ maxHeight: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      <section>
        <div className="container custom-card-container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="custom-product-card card-one">
                <div className="custom-card-content">
                  <p className="custom-deal-info">Latest Deal</p>
                  <h2 className="custom-product-name">iPhone 15 Pro Max</h2>
                  <Link to={"/shop"} className="custom-shop-now">Shop Now <span>+</span></Link>
                </div>
                <img src="https://m.media-amazon.com/images/I/81fxjeu8fdL._AC_UY327_FMwebp_QL65_.jpg" className="deal-img" alt="iPhone 15 Pro Max" />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="custom-product-card card-two">
                <div className="custom-card-content">
                  <p className="custom-deal-info">Get 60% Off</p>
                  <h2 className="custom-product-name">Instax Mini 11 Camera</h2>
                  <Link to={"/shop"} className="custom-shop-now">Shop Now <span>+</span></Link>
                </div>
                <img src="https://m.media-amazon.com/images/I/61+5Ld-oc1L._AC_UY327_FMwebp_QL65_.jpg" className="deal-img" alt="Instax Mini 11 Camera" />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="custom-product-card card-three">
                <div className="custom-card-content">
                  <p className="custom-deal-info">Start From $250</p>
                  <h2 className="custom-product-name">Airpod Headphone</h2>
                  <Link to={"/shop"} className="custom-shop-now">Shop Now <span>+</span></Link>
                </div>
                <img src="https://www.apple.com/v/airpods-max/h/images/overview/contrast/airpods_max_midnight__ddy8oa1y3y4i_large.png" className="deal-img" alt="Airpod Headphone" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container my-5">
          <div class="row">
            {/* <!-- Banner Section --> */}
            <div class="col-lg-3">
              <div class="banner p-3 rounded text-center">
                <h2 class="mb-4">Polaroid Now+ Gen 2 - White</h2>
                <img src="https://react.marketpro.wowtheme7.com/assets/images/thumbs/deal-img.png" alt="Polaroid Camera" class="img-fluid my-3" />
                <Link to={"/shop"} class="btn btn-outline-primary btn-lg">Shop Now</Link>
              </div>
            </div>

            {/* <!-- Product Cards Section --> */}
            <div class="col-lg-9">
              <h3 class="mb-4">Top Selling Products</h3>
              <div className="row">
  {/* <!-- Product 1 --> */}
  {ProductData.filter(({ category }) => (category ? "Smartphones".includes(category) : true)).map((ele) => (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card card-Selling shadow-sm position-relative">
        <img src={ele.image} className="card-img-top object-fit-contain p-2" style={{ height: "150px" }} alt="Product Image" />
        <div className="card-body">
          <h5 className="card-title">{ele.name}</h5>
          <p className="card-text text-muted">By Lucky Supermarket</p>
          <p className="card-text">
            <span className="text-muted text-decoration-line-through">₹{(ele.price.amount * 1.3)}</span>
            <span className="text-primary"> ₹{ele.price.amount}</span> /-
          </p>
          <div className="d-flex gap-2 align-items-center">
            <Link className="btn btn-outline-success btn-sm" to={"/shop"}>
              Shop Now
            </Link>
            {Wishlistdata.find((pro) => pro.id === ele.id) ? (
              <i className="fa-solid fa-heart fa-xl position-absolute" style={{ right: "10px", top: "15px" }}></i>
            ) : (
              <i className="fa-regular fa-heart fa-xl position-absolute" onClick={() => wishlistdata(ele)} style={{ right: "10px", top: "15px" }}></i>
            )}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

            </div>
          </div>
        </div>

      </section>



      <section class="cyber-sale-banner container">
        <div class="container-fluid row align-items-center cyber-sale-banner-content">
          <div class="col-md-4 d-flex justify-content-center">
            <img
              src="https://react.marketpro.wowtheme7.com/assets/images/thumbs/day-sale-img1.png"
              alt="Shopping Girl"
              class="cyber-sale-girl-img img-fluid"
            />
          </div>
          <div class="col-md-4 text-center text-md-left">
            <h2>CYBER MONDAY SALE</h2>
            <p>Up to 30% OFF</p>
            <p>Computer & Mobile Accessories</p>
            <Link class="cyber-sale-shop-btn mt-2 btn btn-primary" to={"/shop"}>
              Shop Now +
            </Link>
          </div>
          <div class="col-md-4 d-flex justify-content-center">
            <img
              src="https://react.marketpro.wowtheme7.com/assets/images/thumbs/day-sale-img2.png"
              alt="Products"
              class="cyber-sale-products-img img-fluid"
            />
          </div>
        </div>
      </section>



      <section>
        <div class="container my-5">
          <div class="row">
            {/* <!-- Banner Section --> */}


            {/* <!-- Product Cards Section --> */}
            <div class="col-lg-9">
              <h3 class="mb-4">Top Selling Products</h3>
              <div className="row">
  {/* <!-- Product 1 --> */}
  {ProductData.filter(({ category }) => (category ? category === "Laptops" : true)).map((ele) => (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card card-Selling shadow-sm position-relative">
        <img src={ele.image} className="card-img-top object-fit-contain p-2" style={{ height: "150px" }} alt="Product Image" />
        <div className="card-body">
          <h5 className="card-title">{ele.name}</h5>
          <p className="card-text text-muted">By Lucky Supermarket</p>
          <p className="card-text">
            <span className="text-muted text-decoration-line-through">₹{(ele.price.amount * 1.3)}</span>
            <span className="text-primary"> ₹{ele.price.amount}</span> /-
          </p>
          <div className="d-flex gap-2 align-items-center">
            <Link className="btn btn-outline-success btn-sm" to={"/shop"}>
              Shop Now
            </Link>
            {Wishlistdata.find((pro) => pro.id === ele.id) ? (
              <i className="fa-solid fa-heart fa-xl position-absolute" style={{ right: "10px", top: "15px" }}></i>
            ) : (
              <i className="fa-regular fa-heart fa-xl position-absolute" onClick={() => wishlistdata(ele)} style={{ right: "10px", top: "15px" }}></i>
            )}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

            </div>
            <div class="col-lg-3">
              <div class="banner p-3 rounded text-center">
                <h2 class="mb-4">Polaroid Now+ Gen 2 - White</h2>
                <img src="https://react.marketpro.wowtheme7.com/assets/images/thumbs/recommended-img.png" alt="Polaroid Camera" class="img-fluid my-3" />
                <Link to={"/shop"} class="btn btn-outline-primary btn-lg">Shop Now</Link>
              </div>
            </div>
          </div>
        </div>

      </section>


















    </>
  );
}

export default Home;
