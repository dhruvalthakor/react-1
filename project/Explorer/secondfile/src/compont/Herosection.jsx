import React from "react";

function Herosection() {
  return (
    <div>
      <div className="card text-bg-dark mb-3">
        <img
          src="https://media.istockphoto.com/id/1390785589/photo/car-in-a-studio.jpg?s=612x612&w=0&k=20&c=nfrfuGlQHS28sfnV6RGm-EGSAYuAUJ9jRsCzCsOgPo8="
          className="card-img "style={{height:634,objectFit:"cover"}}
          alt="..."
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center " >
        <div className="hero">
        <div className="overlay">
            <h1>Get all Luxurious Cars</h1>
        </div>
    </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
