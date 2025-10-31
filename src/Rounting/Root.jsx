import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About";
import Help from "./Help";
import Contact from "./Contact";
import Home from "./Home";
import Layout from "./Layout";

const Root = () => {
  const paths = createBrowserRouter([
    {path:'/',
        element:<Layout/>,
        children:[
    { path: "/home", element: <Home/> },
    { path: "/about", element: <About /> },
    { path: "/help", element: <Help /> },
    { path: "/contact", element: <Contact /> }
    ]}
   
  ]);
  // inside the createbrowserrouter the one path must contain only one default path is allowed that is ('/)
  return <RouterProvider router={paths} />;
};

export default Root;
