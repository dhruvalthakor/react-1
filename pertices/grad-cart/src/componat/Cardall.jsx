import React from 'react'

function Cardall(props) {
  
  return (
    <div>
      <div className="card p-3" style={{width: 300,height:500}}>
    <img  src={props.img} className="card-img-top border object-fit-contain" style={{height:250}} alt="..."/>
  <div className="card-body position-relative text-center">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.detalis}</p>
    <a href="#" className="btn btn-primary bg-black ">Go somewhere</a>
  </div>
</div>
    </div>
  )
} 

export default Cardall
