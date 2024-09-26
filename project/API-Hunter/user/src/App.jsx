
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from './component/Signup';
import Login from './component/Login';
import Home from './component/Home';
import Forgotpassword from './component/Forgotpassword';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function App() {
  const router = createBrowserRouter([
    {
      path: "/Signup",
      element: <><Signup/></>,
    },
    {
      path: "/login",
      element: <><Login/></>,
    },
    {
      path: "/",
      element: <><Home/><Footer/></>,
    },
    {
      path: "/Forgotpassword",
      element: <><Forgotpassword/></>,
    },
  ]);


 



  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
