import React, { useRef, useState } from 'react'
import Header from './Header'
import { Validate } from './Validate.js'
import { validatePassword, createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase.js"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/UserSlice.js';

const Login = () => {
  const [isSignin,setSignin] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleBtn = () => {
    setSignin(!isSignin);
  }

  const handleClick = () => {
      const message = Validate(email.current.value,password.current.value);

      setErrorMessage(message);
      
      if(message){
        return;
      }

      if(!isSignin){
          // signup Logic

          createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
              // Signed up
              const user = userCredential.user;

              updateProfile(user, {
                displayName: name.current.value,
                photoURL: "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg",
              })
                .then(() => {
                  const {uid , email, displayName , photoURL} = auth.currentUser;
                           dispatch(addUser({uid: uid,email: email , displayName: displayName, photoURL: photoURL}));
                  navigate("/browse");
                }).catch((error) => {
                  setErrorMessage(error.message)
                });

              // console.log(user);
              // navigate("/browse");
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage);
              // ..
            });
      }
 
      else{
          // sign in logic
          
          signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log(user);
              navigate("/browse");
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage);
            });
      }
       
       
  }

  return (
    <>
     <Header/>


     <div className='absolute'>
       <img src='https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg'/>
     </div>



     <form onSubmit={(e) => e.preventDefault()} className='absolute w-3/12 bg-black bg-opacity-75 my-36 mx-auto left-0 right-0 p-12'>


        <h1 className='text-white text-3xl mb-4'>{isSignin ? "Sign In" : "Sign Up"}</h1>

        {isSignin ? "" : <input type='text' placeholder='Full Name' className='p-2 my-4  w-full bg-gray-700'/>}

        <input ref={email} type='text' placeholder='Email Address' className='p-2 my-4  w-full bg-gray-700'/>

        <input ref={password} type='password' placeholder = 'Password' className='p-2 my-4 w-full bg-gray-700'/>

        <p className='text-red-500 font-bold'>{errorMessage}</p>

        <button className='my-4 p-2 bg-red-600 text-white w-full rounded-lg' onClick={handleClick}>{isSignin ? "Sign In" : "Sign Up"}</button>

        <p className='text-white cursor-pointer hover:underline' onClick={handleBtn}>{isSignin ? "New To Netflix? Sign Up Now" : "Already a User Sign In Now"}</p>


     </form>
    </>
  )
}

export default Login