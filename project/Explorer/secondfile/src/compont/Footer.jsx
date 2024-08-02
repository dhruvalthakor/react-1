import React from 'react'
function Footer() {
  return (
    <footer  className="footer">
       <div className="container ">
            <div className="row ">
                <div className="col-md-3">
                    <h5 className=" mb-3">Discover More</h5>
                    <ul className="list-unstyled">
                        <li><a href="#">Exclusive offers</a></li>
                        <li><a href="#">Find a dealer</a></li>
                        <li><a href="#">Inventory</a></li>
                        <li><a href="#">Certified owned</a></li>
                        <li><a href="#">Brochures</a></li>
                        <li><a href="#">Roadside Assistance</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5 className=" mb-3">Informations</h5>
                    <ul className="list-unstyled">
                        <li><a href="#">Request a quote</a></li>
                        <li><a href="#">Estimate a payment</a></li>
                        <li><a href="#">Trade-in value</a></li>
                        <li><a href="#">Leasing</a></li>
                        <li><a href="#">Financing</a></li>
                        <li><a href="#">Apply for financing</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5 className=" mb-3">Other Services</h5>
                    <ul className="list-unstyled">
                        <li><a href="#">Service and Parts</a></li>
                        <li><a href="#">Mobile Apps</a></li>
                        <li><a href="#">Financial Services</a></li>
                        <li><a href="#">Collection Store</a></li>
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Brand connect</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5 className=" mb-3">Company</h5>
                    <ul className="list-unstyled">
                        <li><a href="#">About Karde</a></li>
                        <li><a href="#">News and Media</a></li>
                        <li><a href="#">Career with us</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Smart Service</a></li>
                        <li><a href="#">Track your car</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom text-center">
                <div className="row">
                    <div className="col-md-6 ">
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="#">Site Map</a></li>
                            <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                            <li className="list-inline-item"><a href="#">Terms</a></li>
                            <li className="list-inline-item"><a href="#">Recalls</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 ">
                        <ul className="list-inline social-icons">
                            <li className="list-inline-item"><a href="#">Facebook</a></li>
                            <li className="list-inline-item"><a href="#">Twitter</a></li>
                            <li className="list-inline-item"><a href="#">YouTube</a></li>
                            <li className="list-inline-item"><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center ">
                        <img src="src/assets/logo.png" alt="Logo" className="img-fluid" style={{height:80}}/>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
