import React from 'react';
import NavBar from './components/NavBar'
import './App.css'
import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'
import Home from './components/Home'
import Createpost from './components/Createpost'



export default function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/createpost" element={<Createpost/>}/>



      </Routes>

    
    </BrowserRouter>
    );
}

