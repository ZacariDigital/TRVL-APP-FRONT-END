import React from 'react';

const NavBar = ()=>{
    return(
        <nav>
        <div className="nav-wrapper white">
          <a href="#" className="brand-logo right">Logo</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><a href="sass.html">Login</a></li>
            <li><a href="badges.html">Signup</a></li>
            <li><a href="collapsible.html">Home</a></li>
          </ul>
        </div>
      </nav>

    )
}

export default NavBar