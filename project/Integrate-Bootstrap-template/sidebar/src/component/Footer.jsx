import React from 'react';

function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: "#2c3e50" }}>
        
        {/* Social Media Links Section */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" style={{ backgroundColor: "#34495e" }}>
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        {/* Links and Contact Info Section */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              
              {/* Company Name and Description */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4" style={{ color: "#e67e22" }}>
                  <i className="fas fa-gem me-3"></i>Company Name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              
              {/* Products Section */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4" style={{ color: "#e67e22" }}>
                  Products
                </h6>
                <p><a href="#!" className="text-reset text-decoration-none">Angular</a></p>
                <p><a href="#!" className="text-reset text-decoration-none">React</a></p>
                <p><a href="#!" className="text-reset text-decoration-none">Vue</a></p>
                <p><a href="#!" className="text-reset text-decoration-none">Laravel</a></p>
              </div>
              
              {/* Useful Links Section */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4" style={{ color: "#e67e22" }}>
                  Useful links
                </h6>
                <p><a href="#!" className="text-reset text-decoration-none">Pricing</a></p>
                <p><a href="#!" className="text-reset text-decoration-none">Settings</a></p>
                <p><a href="#!" className="text-reset text-decoration-none">Orders</a></p>
                <p><a href="#!" className="text-reset text-decoration-none">Help</a></p>
              </div>
              
              {/* Contact Section */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4" style={{ color: "#e67e22" }}>Contact</h6>
                <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                <p><i className="fas fa-envelope me-3"></i> info@example.com</p>
                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
              </div>
            </div>
          </div>
        </section>

        {/* Copyright Section */}
        <div className="text-center p-4" style={{ backgroundColor: "#1a252f" }}>
          © 2021 Copyright:
          <a className="text-reset fw-bold text-decoration-none" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>

      </footer>
    </>
  );
}

export default Footer;
