import React, { useState } from "react";

let a=0;
let ss;
function Color() {
  const colors = ["orange", "red", "green"];
  const[count,setcount]=useState(0);

  function Decrement() {
    if (count > 0) {
      setcount(count - 1);
  
  }else{
    setcount(2)
  }
  }
  
  function changeColor() {
  
    if (count<colors.length-1) {
          
      setcount(count + 1);
}else{
  setcount(0)
}
  }
  return (
    <div>
      <div className="container-fluid mb-5" style={{marginTop:120}}>
      <h1 className=" text-center bg-dark py-2" style={{color:colors[count]}}>COLORS</h1>
        <div style={{ height: 300 }} className="d-flex align-items-center mt-5">
          <div className="w-25 h-25  d-flex align-items-center justify-content-center">
            <button className="btn btn-success" onClick={Decrement}>Change Color</button>
          </div>
          <div className="w-50 h-100 border border-1 d-flex align-items-center justify-content-center" style={{backgroundColor:colors[count]}}>
          
          </div>
          <div className="w-25 h-25  d-flex align-items-center justify-content-center">
            <button className="btn btn-success"  onClick={changeColor}>Another Button</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Color;
