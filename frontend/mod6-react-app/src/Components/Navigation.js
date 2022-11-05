import React from "react"
import { Link } from "react-router-dom"
import './styles.css';
export default function Navigation(){

    return (
       
      <nav className="main-navigation">
        <ul className="main-navigation-links">
     
        <li><Link to="/">Home</Link></li>
      
        <li><Link to="/About">About</Link></li>

        <li><Link to="/User/register">Register</Link></li>
        
        <li><Link to="/User/account">Account</Link></li>
       
        <li><Link to="/Products">Trading Post</Link></li>
        
        <li><Link to="/Forum">Trader's Forum</Link></li>
  
        <li><Link to="/Contact">Contact Us</Link></li>

        
        <li><Link to="/User/login">Login</Link></li>
       
        <li><Link to="/User/logout">Logout</Link></li>
 
   </ul>
   
    </nav>
   
       )

}

