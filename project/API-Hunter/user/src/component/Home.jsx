import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import Navbar from './Navbar'

function Home() {
  const [users, setUsers] = useState([])
 

const main= users.map((item)=>{
console.log(item.name);
return item.name
  
})


  useEffect(() => {
    axios.get(`http://localhost:4040/users`)
        .then((res) => setUsers(res.data))
        .catch(err => console.log(err))
}, [])


  return (
    <>
      <Navbar name={`${main}`}/>

    </>
  )
}

export default Home
