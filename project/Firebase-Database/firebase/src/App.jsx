import React from 'react'
import Table from './component/Table'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Edit from './component/Edit';
import Add from './component/Add';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Table/></>,
    },
    { 
      path: "/from",
      element: <> <Add/></>,
    },
    { 
      path: "/edit/:id",
      element: <> <Edit/></>,
    },
  ]);


  return (
    <>

    
<RouterProvider router={router} />
    
    
    </>
  )
}

export default App
