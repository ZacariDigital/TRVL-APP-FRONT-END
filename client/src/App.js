import React,{useEffect, createContext, useReducer} from 'react';
import NavBar from './components/NavBar'
import './App.css'
import {BrowserRouter, Routes, Route, useNavigate}  from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'
import Home from './components/Home'
import Createpost from './components/Createpost'
import {reducer, initialState} from './reducers/userReducer'

const UserContext = createContext()

const Routing = () =>{
  const navigate = useNavigate()
  return(
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/createpost" element={<Createpost/>}/>


      </Routes>

  )
}

export default function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <NavBar/>
    <Routing / >

    
    </BrowserRouter>
    </UserContext.Provider>
    );
}

