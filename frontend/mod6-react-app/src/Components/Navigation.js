import React from "react"
import { Link } from "react-router-dom"
export default function Navigation(){

    return (
       
      <nav className="main-navigation">
        <ul className="main-navigation-links">
     
        <li><Link to="/">Home</Link></li>
      
        <li><Link to="/About">About</Link></li>
        
        <li><Link to="/User/account">Account</Link></li>
       
        <li><Link to="/Products">Products</Link></li>
        
        <li><Link to="/Forum">Forum</Link></li>
  
        <li><Link to="/Contact">Contact Us</Link></li>
        
        <li><Link to="/User/login">Login</Link></li>
       
        <li><Link to="/User/register">Register</Link></li>
        <li><Link to="/User/logout">Logout</Link></li>
 
   </ul>
    </nav>
       )

}

