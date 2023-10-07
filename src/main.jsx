import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import Booking from './Pages/Booking/Booking.jsx';
import Classes from './Pages/Classes/Classes.jsx';
import ShowMore from './Pages/ShowMore/ShowMore.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/booking",
        element: <Booking></Booking>
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
        loader: () => fetch("/classes.json")
      },
      {
        path: "/details/:id",
        element: <ShowMore></ShowMore>,
        loader: () => fetch ("/services.json")
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
