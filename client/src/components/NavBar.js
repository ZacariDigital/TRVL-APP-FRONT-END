import React,{useContext} from 'react'
import { createBrowserHistory } from "history";

import { UserContext } from '../App'


import '../App.css'


const NavBar = () =>{
  const history = createBrowserHistory()
  const {state,dispatch} = useContext(UserContext)
  const renderList = ()=>{
    if(state){
      return[
        <li><a href="/profile">Profile</a></li>,
        <li><a href="/createpost">Create post</a></li>,
        <li>
            <button className="btn waves-effect waves-light"
            onClick={()=>{
              localStorage.clear()
              dispatch({type:"CLEAR"})
              history.push('/login')
            }}>
             SignOut
            </button >
        </li>

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