import React, { useState } from 'react';
import SessionStorage from './SessionStorage';
import Textlist from './Textlist';
import Display from './Display';
import Home from './Home';
import Team from './Team';

function Navder() {
  const [currentView, setCurrentView] = useState('home');

  const renderView = () => {
   if (currentView== 'home') {
    return <Home/>;
   }else if (currentView== 'team'){
    return <Team/>;
   } else if (currentView== 'sessionStorage'){
     return <SessionStorage />;
   } else if (currentView== 'localStorage'){
    return <Textlist/>;
   } else if (currentView== 'Display'){
    return <Display/>;
   } else{
    return <div>Home Content</div>;
   }
      
    
  };

  return (
    <>
   <header>
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
   </header>
    <main>
      <section>
      <div className="">
        {renderView()}
      </div>
      </section>
    </main>
 
    <footer className="bg-body-tertiary text-center text-lg-start">
    <div class="card rounded-0" data-bs-theme="dark">
                <div class="container d-flex justify-content-between rounded-5 my-3 card-footer text-body-secondary">
                    <h6 className='m-0'> © Copyright 2024. ShopNow PVT LTD. All Rights Reserved.</h6>
                 <div>
                 <a href="#" className="text-decoration-none "><i className="fa-brands fa-linkedin fa-xl"></i></a>
                 <a href="#" className="text-decoration-none ms-3"><i className="fa-brands fa-github fa-xl"></i></a>
                 </div>
                </div>
            </div>
 
</footer>

    </>
  );
}

export default Navder;
