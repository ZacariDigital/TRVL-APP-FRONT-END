import React from 'react'
import {Link} from 'react-router-dom'

const Signup = ()=>{
    return(
        <div className="mycard">
            <div className="authcard">
                <h2>Join Today!</h2>
                <input 
                type="text"
                placeholder="name"
                />
                <input 
                type="text"
                placeholder="email"
                />
                <input 
                type="text"
                placeholder="password"
                />
                <button className="btn waves-effect waves-heavy">
                    Sign Up
                </button>
                <h5>
                    <Link to="/login">Already a registered user?</Link>
                </h5>
            </div>
        </div>
        )
}

export default Signup