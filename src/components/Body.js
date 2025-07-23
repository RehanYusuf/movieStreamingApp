import React, { useEffect  } from 'react'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import Login from './Login'
import Browse from './Browse'
import ErrorPage from './ErrorPage.js'
import { auth } from "../utils/firebase.js"
import { onAuthStateChanged } from 'firebase/auth'
import {useDispatch} from "react-redux"
import { addUser , removeUser } from '../utils/UserSlice.js'

const Body = () => {
  const dispatch = useDispatch();

   const appRouter = createBrowserRouter([
     {
      path: "/browse",
      element: <Browse/>
    },
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/errorPage",
      element: <ErrorPage/>
    }
   ]
    
   )
   
  useEffect(() => {
     onAuthStateChanged(auth, (user) => {
       if (user) {
        // signin Case
         const {uid , email, displayName , photoURL} = user;
         dispatch(addUser({uid: uid,email: email , displayName: displayName, photoURL: photoURL}));
         
       } 
       else {
         // signout Case
         dispatch(removeUser());
         
       }
     });
  },[])

  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default Body