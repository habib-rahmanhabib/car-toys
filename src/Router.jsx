
import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";

import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import AddedToys from "./AddedToys";
import MyToys from "./MyToys";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
     errorElement: <ErrorPage></ErrorPage>,
   
    children: [
      {
        path:'/',
        element: <Home></Home>

      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element: <Register></Register>
      },
      {
        path:'addToys',
        element:<AddedToys></AddedToys>
      },
      {
        path:'myToys',
        element:<MyToys></MyToys>,
        loader:  ()=>fetch('http://localhost:5000/Toys')
      }
    ]
  },
  ]);

  
export default router;      
   