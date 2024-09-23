import React from 'react'
import User from './Comonents/User'
import Navber from './Comonents/Navber';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Filtering from './Comonents/Filtering';
import Sorting from './Comonents/Sorting';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<><Navber/><Filtering/></>,
    },
    {
      path: "/User",
      element:<><Navber/><User/></>,
    },
    // {
    //   path: "/Sorting",
    //   element:<><Navber/><Sorting/></>,
    // },
  
  ]);

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
