import React from 'react'
import {auth} from "../utils/firebase"
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user)
  const handleBtn = () => {
       signOut(auth)
         .then(() => {
           navigate("/");
         })
         .catch((error) => {
           // An error happened.
           navigate("/errorPage");
         });
  }
  return (
    <div className = 'absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>

      <img className='w-40' src = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />

      {user &&(
      <div className='flex p-3'>
        <img className='w-12 h-12' src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"/>

        <button onClick={handleBtn} className='font-bold text-white p-1'>{"Sign Out"}</button>
      </div>
      )}

    </div>
  )
}

export default Header