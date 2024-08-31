import React from 'react'
import Hoc from './Hoc';

function Hoverconter(props) {
  const { count, incrementCount } = props;
  return (
    <>
      <div className="container text-center" onMouseMoveCapture={incrementCount}>
        <button className="btn btn-dark text-white" >click me</button>
        <h1 className="text-white">{count}</h1>
      </div>
    </>
  )
}

export default Hoc(Hoverconter,20)
