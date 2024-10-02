import React, { useState } from 'react'
import { getDatabase, ref, set } from 'firebase/database'
import { app } from '../firebase'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';



function Add() {
  const [form, setform] = useState({
    name: "",
    email: "",
    password: ""
  })

  const Navigate = useNavigate()

  const db = getDatabase(app)


  const senddata = () => {



    if (!form.name || !form.email || !form.password) {
      alert("All fields are required.")
  } else {
    set(ref(db, `user/` + uuidv4()),
      {

        id: uuidv4(),
        name: form.name,
        email: form.email,
        password: form.password
      }).then(() => Navigate("/")
      ).catch((err) => console.log(err)
      )

    }




  }

  return (
    <div className="container bg-dark p-4 rounded rounded-4 text-center w-50 mt-5">
      <h1 className="text-white">user </h1>
      <div className="col">
        <label htmlFor="">user name</label>
        <input type="text" name="" id="name" required placeholder='enter name ' className="form-control" value={form.name}
          onChange={(e) => setform({ ...form, name: e.target.value })} />
      </div>
      <div className="col my-4">
        <label htmlFor="">user email</label>
        <input type="email" name="" id="email" required placeholder='enter email ' className="form-control" value={form.email}
          onChange={(e) => setform({ ...form, email: e.target.value })} />
      </div>
      <div className="col">
        <label htmlFor="">user password</label>
        <input type="password" name="" id="password" required placeholder='enter password ' className="form-control" value={form.password} onChange={(e) => setform({ ...form, password: e.target.value })} />
      </div>
      <div className="col mt-3">
        <button className="btn btn-danger" onClick={senddata}>submit</button>
      </div>
    </div>

  )
}

export default Add
