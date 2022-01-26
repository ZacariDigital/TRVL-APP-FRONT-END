import React,{useContext} from 'react'
import { UserContext } from '../App'


import '../App.css'


const NavBar = () =>{
  const {state,dispatch} = useContext(UserContext)
  const renderList = ()=>{
    if(state){
      return[
        <li><a href="/profile">Profile</a></li>,
        <li><a href="/createpost">Create post</a></li>

      ]
    }else{
      return[
        <li><a href="/login">Login</a></li>,
        <li><a href="/signup">Signup</a></li>

      ]

    }
  }
    return(
        <nav>
        <div className="nav-wrapper black">
          <a href={state?"/":"/login"} className="brand-logo left">TRVL</a>
          <ul id="nav-mobile" className="right">
            {renderList()}
          </ul>
        </div>
      </nav>
    )
}

export default NavBar