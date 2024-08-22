import Navber from "./component/Navber"
import SessionStorage from './component/SessionStorage';
import Textlist from './component/Textlist';
import Display from './component/Display';
import Home from './component/Home';
import Team from './component/Team';
import Footer from './component/Footer';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:<><Navber/><Home/><Footer/></>,
    },
    {
      path: "/team",
      element:<><Navber/><Team/><Footer/></>,
    },
    {
      path: "/SessionStorage",
      element:<><Navber/><SessionStorage/><Footer/></>,
    },
    {
      path: "/Textlist",
      element:<><Navber/><Textlist /><Footer/></>,
    },
    {
      path: "/Display",
      element:<><Navber/><Display/><Footer/></>,
    },
  ]);


  return (
    <>
   
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
