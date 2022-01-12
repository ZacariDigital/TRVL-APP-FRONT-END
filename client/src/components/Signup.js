import React,{useState} from 'react'
import {Link} from 'react-router-dom'

const Signup = ()=>{
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")

    return(
        <div className="mycard">
            <div className="authcard">
                <h2>Join Today!</h2>
                <input 
                type="text"
                placeholder="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                <input 
                type="text"
                placeholder="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input 
                type="text"
                placeholder="password"
                onChange={(e)=>setPassword(e.target.value)}

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