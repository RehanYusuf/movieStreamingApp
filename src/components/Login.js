import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignin,setSignin] = useState(true);
  const handleBtn = () => {
    setSignin(!isSignin);
  }

  return (
    <>
     <Header/>


     <div className='absolute'>
       <img src='https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg'/>
     </div>



     <form className='absolute w-3/12 bg-black bg-opacity-75 my-36 mx-auto left-0 right-0 p-12'>


        <h1 className='text-white text-3xl mb-4'>{isSignin ? "Sign In" : "Sign Up"}</h1>

        {isSignin ? "" : <input type='text' placeholder='Full Name' className='p-2 my-4  w-full bg-gray-700'/>}

        <input type='text' placeholder='Email Address' className='p-2 my-4  w-full bg-gray-700'/>

        <input type='password' placeholder = 'Password' className='p-2 my-4 w-full bg-gray-700'/>

        <button className='my-4 p-2 bg-red-600 text-white w-full rounded-lg'>{isSignin ? "Sign In" : "Sign Up"}</button>

        <p className='text-white cursor-pointer hover:underline' onClick={handleBtn}>{isSignin ? "New To Netflix? Sign Up Now" : "Already a User Sign In Now"}</p>


     </form>
    </>
  )
}

export default Login