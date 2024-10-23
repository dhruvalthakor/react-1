import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <>
      <footer className="footer bg-light text-dark py-4">
  <div className="container">
    <div className="row">
      {/* <!-- Company Info --> */}
      <div className="col-md-3">
        <h5>
          {/* <img src="src/assets/logo-two-black.png" alt="Logo" className="w-75" /> */}
          marketpro
          </h5>
        <p>Marketpro has become the largest computer parts, gaming PC parts, and other IT-related products provider.</p>
        <ul className="list-unstyled">
          <li><i className="fas fa-phone" style={{color:"darkorange"}}></i> +00 123 456 789</li>
          <li><i className="fas fa-envelope" style={{color:"darkorange"}}></i> support24@marketpro.com</li>
          <li><i className="fas fa-map-marker-alt" style={{color:"darkorange"}}></i> 789 Inner Lane, California, USA</li>
        </ul>
      </div>

      {/* <!-- About Us --> */}
      <div className="col-md-2">
        <h5 className="text-uppercase mb-4 font-weight-bold" style={{fontfamily:" var(--heading-font-two)"}}>About Us</h5>
        <ul className="list-unstyled">
          <li><a href="#" className="text-dark text-decoration-none">Company Profile</a></li>
          <li><a href="#" className="text-dark text-decoration-none">All Retail Store</a></li>
          <li><a href="#" className="text-dark text-decoration-none">Merchant Center</a></li>
          <li><a href="#" className="text-dark text-decoration-none">Affiliate</a></li>
          <li><a href="#" className="text-dark text-decoration-none">Contact Us</a></li>
        </ul>
      </div>

      {/* <!-- Customer Support --> */}
      <div className="col-md-2">
        <h5 className="text-uppercase mb-4 font-weight-bold" style={{fontfamily:" var(--heading-font-two)"}}>Customer Support</h5>
        <ul className="list-unstyled">
          <li><a href="#" className="text-dark text-decoration-none">Help Center</a></li>
          <li><a href="#" className="text-dark text-decoration-none">Contact Us</a></li>
          <li><a href="#" className="text-dark text-decoration-none">Gift Card</a></li>
          <li><a href="#" className="text-dark text-decoration-none">Report Abuse</a></li>
          <li><a href="#" className="text-dark text-decoration-none">Submit and Dispute</a></li>
        </ul>
      </div>

      {/* <!-- My Account --> */}
      <div className="col-md-2">
        <h5 className="text-uppercase mb-4 font-weight-bold" style={{fontfamily:" var(--heading-font-two)"}}>My Account</h5>
        <ul className="list-unstyled">
          <li><a href="#" className="text-dark text-decoration-none">My Account</a></li>
          <li><a href="#" className="text-dark text-decoration-none">Order History</a></li>
          <li><a href="#" className="text-dark text-decoration-none">Shopping Cart</a></li>
          <li><a href="#" className="text-dark text-decoration-none">Wishlist</a></li>
          <li><a href="#" className="text-dark text-decoration-none">Compare</a></li>
        </ul>
      </div>

      {/* <!-- Shop On The Go --> */}
      <div className="col-md-3">
        <h5 className="text-uppercase mb-4 font-weight-bold" style={{fontfamily:" var(--heading-font-two)"}}>Shop on The Go</h5>
        <p>Marketpro App is available. Get it now.</p>
       <p className="d-flex ">
       <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDj0QiwPuLMelAVLOK-xIkwVhLOtflcqDfZUiQssV-cF1gX4KcJHHk5MeAVsaexCp1fA&usqp=CAU" alt="App Store" className="img-fluid me-2" style={{width:"1200px" ,marginLeft:"-10px"}}/></a>
        <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Google_Play_2022_logo.svg/2560px-Google_Play_2022_logo.svg.png" alt="Google Play" className="img-fluid w-50"/></a>
       </p>
        <ul className="list-inline mt-3">
          <li className="list-inline-item "><a href="#" className="text-dark"><i className="fab fa-facebook" style={{color:"darkorange"}}></i></a></li>
          <li className="list-inline-item"><a href="#" className="text-dark"><i className="fab fa-twitter" style={{color:"darkorange"}}></i></a></li>
          <li className="list-inline-item"><a href="#" className="text-dark"><i className="fab fa-instagram" style={{color:"darkorange"}}></i></a></li>
          <li className="list-inline-item"><a href="#" className="text-dark"><i className="fab fa-linkedin" style={{color:"darkorange"}}></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer
