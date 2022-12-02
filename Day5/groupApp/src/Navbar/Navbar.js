import img from "../../images/reactLogo.png";
import imgA from "../../images/avatar1.png";

import './style.css';
import data from '../data.json';
import { useState } from "react";


const Navbar = ()=>{
    

    return <div className="innerDiv">
<div className="logoDiv">
  <p className="logotext">STROM</p>
   <img className="logo" src={img} alt="imgLogo" />
   <p className="logotext">TROOPERS</p>
   </div>
   

      <img className="avatar" src={imgA} alt="imgAvatar" />

    </div>
}
export default Navbar;