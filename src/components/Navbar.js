import React from 'react'
import { Link } from "react-router-dom"
import "../assets/Navbar.css"
function Navbar() {
  return (
    <div className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/createpost">Create Post</Link>
        <Link to="/login">Login</Link>
    </div>
  )
}

export default Navbar