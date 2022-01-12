import React from 'react'
import {Link} from 'react-router-dom'


const Login = ()=>{
    return(
        <div className="mycard">
            <div className="authcard">
                <h2>TRVL</h2>
                <input 
                type="text"
                placeholder="email"
                />
                <input 
                type="text"
                placeholder="password"
                />
                <button className="btn waves-effect waves-light">
                    Login
                </button>
                <h5>
                <Link to="/login">Dont have an account?</Link>
                </h5>
            </div>
        </div>
        )
}

export default Login