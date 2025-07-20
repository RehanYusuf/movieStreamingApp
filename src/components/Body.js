import React from 'react'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import Login from './Login'
import Browse from './Browse'

const Body = () => {
   const appRouter = createBrowserRouter([
     {
      path: "/browse",
      element: <Browse/>
    },
    {
      path: "/",
      element: <Login/>
    }
   ]
    
   )

  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default Body