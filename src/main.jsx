import React from 'react'
import ReactDOM from 'react-dom/client'
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
import AuthProvider from './components/Provider/AuthProvider.jsx';
import Private from './components/Private/Private.jsx';
import Error from './Pages/Error/Error.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
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
        element: <Private><Booking></Booking></Private>
      },
      {
        path: "/classes",
        element: <Private><Classes></Classes></Private>,
        loader: () => fetch("/classes.json")
      },
      {
        path: "/details/:id",
        element: <Private><ShowMore></ShowMore></Private>,
        loader: () => fetch ("/services.json")
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
