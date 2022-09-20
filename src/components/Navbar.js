import React from 'react'
import { Link } from "react-router-dom"
import "../assets/Navbar.css"
import {signOut} from "firebase/auth"
import { auth } from '../firebase-config'
function Navbar({isAuth, setIsAuth}) {
  const signOutUser = () =>{
    signOut(auth).then(()=>{
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = "/login"
    })
  }
  return (
    <div className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/createpost">Create Post</Link>
        {!isAuth?<Link to="/login">Login</Link>:<button onClick={signOutUser}>Log Out</button>}
    </div>
  )
}

export default Navbar