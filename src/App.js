import React, { useEffect, useState } from "react";
import {Routes, Route} from "react-router-dom"
import Header from "./Header";
import Login from "./login";
import  Dashboard from "./Home/Dashboard";
import Home from "./Home/Home";
import SignUp from "./reg";
import Member from "./Home/member/Member";
import Umbrella from "./Home/Umbrella/Umbrella";
import axios from "axios";

const App = ({name}) => { 

  return (
    <React.Fragment>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/member" element={<Member/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/> 
        <Route path="/umbrella" element={<Umbrella/>}/> 
      </Routes>
    </React.Fragment>
  )
}
export default App