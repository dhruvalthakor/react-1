import React from 'react'

function Navbar({tities}) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-secondary">
  <div class="container-md d-flex justify-content-center">
    <a class="navbar-brand" href="#">{tities}</a>
  </div>
</nav>
    </div>
  )
}

export default Navbar
