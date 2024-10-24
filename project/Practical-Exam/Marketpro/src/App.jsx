import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Cart from "./component/Cart";
import Shop from "./component/Shop";
import UserContext from "./context/context";
import Footer from "./component/Footer";
import Wishlistdata from "./component/Wishlistdata";
import Login from "./component/Login";

function App() {
  const [Data, setData] = useState("");



  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar Data={Data} setData={setData}/> <Home /><Footer/>
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <Navbar />
          <Cart />
          <Footer/>
        </>
      ),
    },
    {
      path: "/shop",
      element: (
        <>
          <Navbar />
          <Shop />
          <Footer/>
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Login/>
        </>
      ),
    },
    {
      path: "/wishlist",
      element: (
        <>
        <Navbar />
          <Wishlistdata/>
          <Footer/>
        </>
      ),
    },
  ]);

  return (
    <>
      <UserContext.Provider value={{Data, setData}}>
      <RouterProvider router={router} />
      </UserContext.Provider>


    </>
  );
}

export default App;
