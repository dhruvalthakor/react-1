import React from 'react'

function prodect() {
  return (
    <>
       <li key={prodect.id}>
    <div className="card pb-2 p-1 bg-success-subtle" style={{ width: 300, height: 400 }}>
      <img
        src={prodect.image}
        className="card-img-top object-fit-contain h-50"
        alt={prodect.title}
      />
      <div className="card-body">
        <h5 className="card-title">{prodect.title.slice(0, 40)}</h5>
        <p className="card-text">{prodect.description.slice(0, 75)}</p>

        <a href="#" className="btn btn-dark w-100">
          {prodect.price}
        </a>
      </div>
    </div>
  </li>
    </>
  )
}

export default prodect
