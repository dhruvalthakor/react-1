import React from 'react'
import Table from './component/Table'
import Heelo from './component/Heelo'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Table/></>,
    },
    {
      path: "/from",
      element: <> <Heelo/></>,
    },
  ]);


  return (
    <>

    
<RouterProvider router={router} />
    
    
    </>
  )
}

export default App
