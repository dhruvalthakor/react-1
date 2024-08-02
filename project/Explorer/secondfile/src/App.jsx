import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navber from './compont/Navber'
import Container from './compont/Container'
import "./App.css"
import Footer from './compont/Footer'


function App() {
  return (
    <>
    <header>
<Navber/>
    </header>

    <Container/>
 
    <Footer/>
   
    </>
  )
}

export default App
