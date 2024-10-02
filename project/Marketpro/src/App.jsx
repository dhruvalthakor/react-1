import React from 'react'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './component/Navbar';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/> </>,
    },
    {
      path: "/from",
      element: <> </>,
    },
  ]);


  return (
    <>

    
<RouterProvider router={router} />
    
    
    </>
  )
}

export default App
