import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from './Layout'
import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact'

const Rout = () => {
    // const paths=createBrowserRouter([
    //     {path:'/',
    //         element:<Layout/>,
    //         children:[
    //             {path:'/home',element:<Home/>},
    //             {path:'/about',element:<About/>},
    //             {path:'/contact',element:<Contact/>}
    //         ]
    //     }
    // ]) //!one way to use react-route
    
    const paths=createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout/>}>
                <Route path='home' element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='Contact' element={<Contact/>}/>
                <Route/>
                <Route/>
            </Route>
        ) //!one way to use react-route
    )
  return (
    <RouterProvider router={paths}/>
  )
}

export default Rout