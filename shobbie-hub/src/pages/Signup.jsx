import React, { useState } from 'react'
import './Signup.css'
import user_icon from '../Assets/user.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
// import axios from 'axios'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  // console.log(email)
  const[action,setAction] = useState("Sign Up")

  function handleRegister(){
    let form = {email, password, firstname, lastname}
    axios.post('http://localhost:5000/api/v1/users/register', form).then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err.response.data)
    })
  }
  function handleLogin(){
    let form = {email, password}
      axios.post('http://localhost:5000/api/v1/users/login', form).then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err.response.data)
    })
  }

  return (
    <>
    <div className='ho'>
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action==="Login"?<div></div>: <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder='First Name' onChange={(e) => setFirstname(e.target.value)} />
        </div>
        }
        {action==="Login"?<div></div>: <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder='Last Name' onChange={(e) => setLasttname(e.target.value)} />
        </div>
        }
       

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='john.doe@example.com' onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='••••••••'onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>

        {action==="Sign Up"?<div></div>:<p className="forgot-password">Lost Password? <span>Click Here!</span></p>}
      
      <div className="submit-container">
        <div className={action==="Login"?"submit grey":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit grey":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>


          {action === "Sign Up" ?
          <div className='submite' onClick={handleRegister}>Submit</div> 
          : <div className='submite' onClick={handleLogin}>Login</div>
          }
    </div>
    </div>
     </>
  )
 
}

export default Signup;