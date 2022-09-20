import React from 'react'
import "../assets/Login.css"
import { auth , provider } from "../firebase-config"
import { signInWithPopup } from 'firebase/auth'
function Login({ setIsAuth }) {
  const signInWithGoogle = () => {
    signInWithPopup(auth,provider).then((result) => {
      localStorage.setItem("isAuth",true);
      setIsAuth(true)

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