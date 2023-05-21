
import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";

import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import AddedToys from "./AddedToys";
import MyToys from "./MyToys";
import UpdateToys from "./UpdateToys";
import Blogs from "./Blogs/Blogs";
import AllToyes from "./AllToys/AllToyes";
import PrivateRoute from "./PrivetRouter";



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
        element:<PrivateRoute><AddedToys></AddedToys></PrivateRoute>
      },
      {
        path:'myToys',
        element:<PrivateRoute><MyToys></MyToys></PrivateRoute>,
        loader:  ()=>fetch('https://toy-fullstack-server-habib-rahmanhabib.vercel.app/Toys')
      },
      {
        path:'allToys',
        element:<AllToyes></AllToyes>,
        loader: ()=>fetch('https://toy-fullstack-server-habib-rahmanhabib.vercel.app/Toys')
      },
      {
        path:'updtaeToys/:id',
        element:<UpdateToys></UpdateToys>,
        loader:  ({params})=>fetch(`https://toy-fullstack-server-habib-rahmanhabib.vercel.app/Toys/${params.id}`)
      },
      {
        path:'blogs',
        element:<Blogs></Blogs>
      }
    ]
  },
  ]);

  
export default router;      
   