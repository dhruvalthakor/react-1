import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/Counter/counterSlice'


export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="container mt-5 d-flex  flex-column justify-content-center align-items-center  p-5 rounded rounded-5 bg-dark">
      <h1 className="text-center text-white">Counter</h1>

      <div className="d-flex gap-3 justify-content-center align-items-center">
        <button
        className="btn btn-danger"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className="text-white fs-2">{count}</span>
        <button className="btn btn-danger"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter
