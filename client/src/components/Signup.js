import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import M from 'materialize-css'

const Signup = ()=>{
    const navigate = useNavigate()
    const [name,setName] = useState("")
    const [password,setPassword] = useState()
    const [email,setEmail] = useState("")
    const PostData = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html:"Invalid Email Format"})
            return
        }    
        fetch("./signup",{
            method:"post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name,
                password,
                email
            })

        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html: data.error})
            }
            else{
                M.toast({html: data.message,classes:"#43a047 green-darken 1"})
                navigate('/login')


            }
        }).catch(err=>{
            console.log(err)
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
                value={password}
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