import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])

    const [form, setForm] = useState({
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

     
        if (!form.email || !form.password) {
            alert("All fields are required.")
            return
        }

        
        const user = users.find((item) => item.email === form.email)


        if (user) {
            if (user.password === form.password) {

                axios.post(`http://localhost:4040/login`, user)
                .then((res) => {
                    console.log("User created", res.data)
                })
                .catch(err => console.log(err))
                
                navigate("/home")
            } else {
                alert("Invalid password")
            }
        } else {
            alert("Invalid email")
        }
    }

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="col-md-6 col-lg-5 bg-light shadow-lg p-5 rounded-4">
                    <h2 className="text-center mb-4 text-primary">Login</h2>
                    <form onSubmit={formSubmit}>
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
                        <Link to={"/Forgotpassword"}  className="text-decoration-none">forgot password</Link>
                        <button className="btn btn-primary w-100 mt-3">Login</button>
                    </form>

                    <div className="mt-4 text-center">
                        <p>Don't have an account?  <Link to={"/"}  className="text-decoration-none">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
