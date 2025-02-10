import React, { useState } from 'react'
import './loginsignup.css'
import person from './person.png'
import email from './emailnew.png'
import password from './password.png'
export default function Loginsignup() {
    const[action,setaction] = useState("Login");
  return (
    <div className='Container'>
        <div className={action==="Login"?"header logintext":"header"}>
            <div className="text">{action}</div>
            <div className="underline"> </div>
        </div>
        <div className="inputs">
            {action==="Login"?<div className></div>:<div className="input">
                <img className='im' src={person} alt="name" />
                <input type="text" placeholder="Name"name="" id="" />
            </div>}

            <div className="input">
                <img className='im' src={email} alt="" />
                <input type="email" placeholder="Email id"name="" id="" />
            </div>
            <div className="input">
                <img className='im' src={password} alt="" />
                <input type="password" placeholder='password' name="" id="" />
            </div>
        </div>
        {action==="Signup"?<div></div>:<div className="forget-password">Lost Password ?<span>Click Here</span></div>}
        
        <div className="submit_container">
            <div className={action==="Login"?"submit grey ":"submit"} onClick={()=>{setaction("Signup")}}>signup</div>
            <div className={action==="Signup"?"submit grey":"submit"} onClick ={()=>{setaction("Login")}}>Login</div>
        </div>
    </div>
  )
}
