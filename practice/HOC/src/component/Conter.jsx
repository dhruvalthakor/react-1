import React from 'react'
import Hoc from './Hoc';

function Conter(props) {
  const { count, incrementCount } = props;

  return (
    <>
        <div className="container text-center">
        <button className="btn btn-dark text-white" onClick={incrementCount}>click me</button>
        <h1 className="text-white">{count}</h1>
      </div>
    </>
  )
}

export default Hoc(Conter)
