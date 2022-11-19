import React from "react"
import { Link, Route } from "react-router-dom"
import './styles.css';
import {useCookies} from 'react-cookie'
import { useState } from "react";
export default function Navigation(props){
const [cookies, setCookie, removeCookie] = useCookies(["User"]);
let loggedIn= props.loggedIn
let loggedInRoutes =[]
  function logoutHandler(event){
  
  event.preventDefault()
  props.setLoggedIn(false);
   props.removeCookie("x-auth-token", {path: '/'})
   console.log('button pressed')
	}
  if(loggedIn){
    loggedInRoutes=[
      
      <li><Link to="/">Home</Link></li>,
      
      <li><Link to="/About">About</Link></li>,
      
      <li><Link to="/User/account">Account</Link></li>,
     
      <li><Link to="/Products">Trading Post</Link></li>,
      
      <li><Link to="/Forum">Trader's Forum</Link></li>,

      <li><Link to="/Contact">Contact Us</Link></li>,
      <li ><Link onClick={logoutHandler} to="/User/logout">Logout</Link></li>

    ]
  }else{
    loggedInRoutes =[
      
      <li><Link to="/">Home</Link></li>,
      
      <li><Link to="/About">About</Link></li>,
      <li><Link to="/Contact">Contact Us</Link></li>,
      <li><Link to="/User/register">Register</Link></li>,
      <li><Link to="/User/login">Login</Link></li>,
    ]
  }
    return (
       
      <nav className="main-navigation">
        <ul className="main-navigation-links">
        {loggedInRoutes.map(links=>{
          return (
           <li>{links}</li>
          )
        })}
       
       
 
   </ul>
   
    </nav>
   
       )

}

