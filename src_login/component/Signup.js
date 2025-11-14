import React from 'react'
import './Signup.css'
import {Link} from 'react-router-dom'


export default function Signup() {
  return (
  <div className='signup-container'>
    <h1> FloatChat</h1>
    <div className='sign-up-page'> 
      <form>
    <h3 className='Signup-title'>Create an Account</h3>
   
     <p className='text'>Full Name</p>
    <input type="text"  className='name' required/>
    <p className='text'>Email Id</p>
    <input type="email" className='signup-mail' required/>
    <p className='text'>Passwrod</p>
    <input type="password" className='signup-password' required/>
    <p className='text'>Confirm Password</p>
    <input type='password' className='confirm-pass' required/>
    <br/>
    <button type="submit" className='sign-up-button'>Sign up</button>  
   
    <p className='signup-text'>Already have an account?<Link to='/login'>Sign in</Link></p>    
   </form> 
    </div> 
    </div>
  )
}
/*
use required in the input tag so that when someone is trying to submit the form without fillinf these details then it will show input field required 
sign-up text is fir the line where we can show that if user want to sign in instead of signup then he/she can go to login page directly from here
sign-up title for the title of our this form
*/ 
