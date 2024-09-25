import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    })

    useEffect(() => {
        axios.get(`http://localhost:4040/users`)
            .then((res) => setUsers(res.data))
            .catch(err => console.log(err))
    }, [])

    const formSubmit = (e) => {
        e.preventDefault()

        if (!form.name || !form.email || !form.password) {
            alert("All fields are required.")
        } else {
            const existingUser = users.find((user) => user.email === form.email)

            if (existingUser) {
                if (existingUser.password === form.password) {
                    console.log("Login successful")
                    navigate("/login")
                } else {
                    alert("Invalid password")
                }
            } else {
                axios.post(`http://localhost:4040/users`, form)
                    .then((res) => {
                        console.log("User created", res.data)
                        navigate("/login")
                    })
                    .catch(err => console.log(err))
            }
        }
    }

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="col-md-6 col-lg-5 bg-light shadow-lg p-5 rounded-4">
                    <h2 className="text-center mb-4 text-primary">Sign Up</h2>
                    <form onSubmit={formSubmit}>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingName"
                                placeholder="John Doe"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                            />
                            <label htmlFor="floatingName">Name</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingEmail"
                                placeholder="name@example.com"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                            />
                            <label htmlFor="floatingEmail">Email</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                                value={form.password}
                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                            />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                      

                        <button className="btn btn-primary w-100 mt-3">Sign Up</button>
                    </form>

                    <div className="mt-4 text-center">
                        <p>Already have an account? <Link to={"/login"}  className="text-decoration-none">Login</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
