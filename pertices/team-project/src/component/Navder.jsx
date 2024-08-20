import React, { useState } from 'react';
import SessionStorage from './SessionStorage';
import Textlist from './Textlist';
import Display from './Display';

function Navder() {
  const [currentView, setCurrentView] = useState('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <div>Home Content</div>;
      case 'team':
        return <div>Team Content</div>;
      case 'sessionStorage':
        return <SessionStorage />;
      case 'localStorage':
        return <Textlist/>;
        case 'Display':
          return <Display/>;
      default:
        return <div>Home Content</div>;
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" onClick={() => setCurrentView('home')}>Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4 flex-grow-0 w-75 justify-content-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" onClick={() => setCurrentView('home')}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setCurrentView('team')}>Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setCurrentView('sessionStorage')}>Session Storage</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setCurrentView('localStorage')}>Local Storage</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setCurrentView('Display')}>Display</a>
              </li>
            </ul>
            <form className="d-flex gap-3" role="search">
              <a href="#" className="text-decoration-none text-dark"><i className="fa-brands fa-linkedin fa-xl"></i></a>
              <a href="#" className="text-decoration-none text-dark"><i className="fa-brands fa-github fa-xl"></i></a>
            </form>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        {renderView()}
      </div>
    </>
  );
}

export default Navder;
