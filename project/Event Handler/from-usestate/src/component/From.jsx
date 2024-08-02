import React, { useState } from "react";




function From() {
  const [data, setdata] = useState(
    {
      frist:" ",
      last:"",
      email:"",
      password:"",
      Address:" ",
      Phone:" ",
      City:" ",
      State:" "
    })

  function heandfristname(e) {
    setdata({
      ...data,
      frist:e.target.value
    })
  }

  function heandlestname(e) {
    setdata({
      ...data,
      last:e.target.value
    })
  }
  function heandemilname(e) {
    setdata({
      ...data,
      email:e.target.value
    })
  }
  function heandPassword(e) {
    setdata({
      ...data, 
      password:e.target.value 
    })
  }

  function heandPhone(e) {
    setdata({
      ...data,
      Phone:e.target.value
    })
  }
  function heandAddress(e) {
    setdata({
      ...data,
      Address:e.target.value
    })
  }
  function heandCity(e) {
    setdata({
      ...data,
      City:e.target.value
    })
  }
  function heandstate(e) {
    setdata({
      ...data,
      State:e.target.value
    })
  }
  return (
    <>
      <div className="container mt-5 w-50">
        <h1 className="text-center">FORM</h1>
        <form
          className=" border border-1 mt-2 p-4 px-5 rounded rounded-4 bg-dark text-white row g-3"
          onSubmit={(e) => e.preventDefault()}
        >
        
        <div class="col-md-6">
    <label for="inputEmail4" class="form-label">first name</label>
    <input type="email" class="form-control" id="inputEmail4" value={data.frist} onChange={heandfristname}/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">last name</label>
    <input type="password" class="form-control" id="inputPassword4" value={data.last} onChange={heandlestname}/>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" value={data.email} onChange={heandemilname}/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4" value={data.password} onChange={heandPassword}/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <textarea type="text" class="form-control" id="inputAddress" value={data.Address} onChange={heandAddress}/>
  </div>
  <div class="col-md-4">
    <label for="inputZip" class="form-label">Phone</label>
    <input type="text" class="form-control" id="inputZip" value={data.Phone} onChange={heandPhone}/>
  </div>
  <div class="col-md-4">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity" value={data.City} onChange={heandCity}/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select"  value={data.State} onChange={heandstate}>
    <option  selected value="Gujarat">Gujarat</option>
    <option value="Andhra Pradesh">Andhra Pradesh</option>
    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
    <option value="Assam">Assam</option>
    <option value="Bihar">Bihar</option>
    <option value="Chhattisgarh">Chhattisgarh</option>
    <option value="Goa">Goa</option>
    </select>
  </div>
  

  <div class="col-12">
    <button type="submit" class="btn btn-success px-4">submit</button>
  </div>
        </form>
      </div>
   <h1 className=" mt-5 text-center"> FORM DETAILS</h1>
      <div className=" container border border-2 mb-4 bg-dark text-white p-3 d-flex flex-column w-50 rounded rounded-5 gap-2">
      <h2>Name:-{data.frist} {data.last}</h2>
      <h2>Email:-{data.email}</h2>
      <h2>Password:-{data.password}</h2>
      <h2>Phone:-{data.Phone}</h2>
      <h2>Address:-{data.Address}</h2>
      <h2>Address:-{data.City},{data.State}</h2>
     
      </div>
    </>
  );
}

export default From;