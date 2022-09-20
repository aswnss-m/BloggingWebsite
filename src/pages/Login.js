import React from 'react'
import "../assets/Login.css"
import { auth , provider } from "../firebase-config"
import { signInWithPopup } from 'firebase/auth'
import {useNavigate} from "react-router-dom"
function Login({ setIsAuth }) {
  const navigate = useNavigate()
  const signInWithGoogle = () => {
    signInWithPopup(auth,provider).then((result) => {
      localStorage.setItem("isAuth",true);
      setIsAuth(true)
      navigate('/')
    })
  }
  return (
    <div className='loginPage'>
      <p>Sign in with google to continue</p>
      <button onClick={signInWithGoogle}>
        Sign In
      </button>
    </div>
  )
}
// https://www.youtube.com/watch?v=zL0dKETbCNE
export default Login  