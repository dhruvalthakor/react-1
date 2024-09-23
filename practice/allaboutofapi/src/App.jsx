import React from 'react'
import Api from './component/Api'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Display from './component/Display';
import Editdata from './component/Editdata';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Api/></>,
    }, {
      path: "/display",
      element: <><Display/></>,
    }, {
      path: "/edit/:i",
      element: <><Editdata/></>,
    },
  ]);





  return (
    <>
     <RouterProvider router={router} />
      
    </>
  )
}

export default App
