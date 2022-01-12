import React from 'react'

import '../App.css'


const NavBar = () =>{
    return(
        <nav>
        <div className="nav-wrapper black">
          <a href="/" className="brand-logo left">TRVL</a>
          <ul id="nav-mobile" className="right">
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Signup</a></li>
            <li><a href="/profile">Profile</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default NavBar