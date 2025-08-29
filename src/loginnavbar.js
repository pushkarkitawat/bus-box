import React from 'react';
import './loginnavbar.css';
import { Link } from "react-router-dom";
export default function Loginnavbar() {
   
  return (
    <div className='login-navbar'>
        <div className='login-navbar-logo'>
<h1>BOX-BUS</h1>     
   </div>
        <div className='login-navbar-title'>
           <div className='links'> <ul>
                <li> <Link style={{textDecoration: 'none'}} to="/home">Home</Link></li>
                <li> <Link style={{textDecoration: 'none'}} to="/About" >About</Link></li>
                <li> <Link style={{textDecoration: 'none'}} to="/Contact">Contact</Link></li>
            </ul></div>
            
        </div>
      
    </div>
  )
}
