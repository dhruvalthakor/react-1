import React from 'react';

function Navder({
    mensection,
    womensection,
    jewelerysection,
    electronicssection,
    allsection
}) {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#2c3e50" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="20"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav mb-2 mb-lg-0 d-flex gap-5">
              <li className="nav-item">
                <button className="btn" style={{ backgroundColor: '#34495e', color: '#ecf0f1' }} onClick={allsection}>All products</button>
              </li>
              <li className="nav-item">
                <button className="btn" style={{ backgroundColor: '#34495e', color: '#ecf0f1' }} onClick={mensection}>Men's Clothing</button>
              </li>
              <li className="nav-item">
                <button className="btn" style={{ backgroundColor: '#34495e', color: '#ecf0f1' }} onClick={womensection}>Women's Clothing</button>
              </li>
              <li className="nav-item">
                <button className="btn" style={{ backgroundColor: '#34495e', color: '#ecf0f1' }} onClick={electronicssection}>Electronics</button>
              </li>
              <li className="nav-item">
                <button className="btn" style={{ backgroundColor: '#34495e', color: '#ecf0f1' }} onClick={jewelerysection}>Jewelry</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navder;
