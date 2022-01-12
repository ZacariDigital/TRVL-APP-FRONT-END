import React,{useState} from 'react'
import {Link} from 'react-router-dom'

const Signup = ()=>{
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const PostData = ()=>{
        fetch("http://localhost:5000/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:"",
                password:"",
                email:""
            })

        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }

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
                <button className="btn waves-effect waves-heavy"
                onClick={()=>PostData()}
                >
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