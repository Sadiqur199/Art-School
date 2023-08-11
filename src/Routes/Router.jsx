import {
  Link,
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import img1 from '../assets/404page.jpg'
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import Instructor from "../Pages/Instructor/Instructor";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import Myselesct from "../Pages/Dashboard/Myselesct";
import PrivateRoute from "./PrivateRoute";
import Alluser from "../Pages/Dashboard/AllUser/Alluser";
import AdminRoutes from "./AdminRoutes";

export const router = createBrowserRouter([
  {
   path:'*',
   element:<div className="w-full">
      <img className="mx-auto w-full"  src={img1} alt="" />
      <Link to='/'><button className='absolute right-0 mr-4 mt-[-55%] px-4 py-5 rounded bg-slate-500 text-white'>Back To Home </button></Link>
   </div>
  },
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'instructors',
        element:<Instructor></Instructor>
      },
      {
        path:'classes',
        element:<Classes></Classes>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'singup',
        element:<SingUp></SingUp>
      }
    ]
  },
  {
    path:'dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:'myselect',
        element:<Myselesct></Myselesct>
      },
      {
        path:'users',
        element:<AdminRoutes><Alluser></Alluser></AdminRoutes>
      },
    ]
  }
]);