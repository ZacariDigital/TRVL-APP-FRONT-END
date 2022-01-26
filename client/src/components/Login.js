import React,{useState,useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {UserContext} from '../App'
import M from 'materialize-css'


const Login = ()=>{
    const {state,dispatch} = useContext(UserContext)
    const navigate = useNavigate()
    const [password,setPassword] = useState()
    const [email,setEmail] = useState("")
    const PostData = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html:"Invalid Email Format"})
            return
        }    
        fetch("./signin",{
            method:"post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({

                password,
                email
            })

        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.error){
                M.toast({html: data.error})
            }
            else{
                localStorage.setItem("jwt", data.token)
                localStorage.setItem("user", JSON.stringify(data.user))
                dispatch({type:"USER", payload:data.user})

                M.toast({html:"Signed in Successfuly",classes:"#43a047 green-darken 1"})
                navigate('/')


            }
        }).catch(err=>{
            console.log(err)
        })
    }
    return(
        <div className="mycard">
            <div className="authcard">
                <h2>TRVL</h2>
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
                <button className="btn waves-effect waves-light"
                onClick={()=>PostData()}>
                    Login
                </button>
                <h5>
                <Link to="/Signup">Dont have an account?</Link>
                </h5>
            </div>
        </div>
        )
}

export default Login