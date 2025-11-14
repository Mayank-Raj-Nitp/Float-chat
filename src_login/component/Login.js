import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import Inputfield from './Inputfield'

export default function Login() {
  return (
    <div className='login-container'>

      <div className="box" id="left">
        <form action="#" className="login-form">
          <img src="floatchatlogo.png" alt="FloatChat logo" className='top-logo' />
          <h2 className='page-title'>Sign in</h2>

          <p> Don&apos;t have an account?<Link to="/signup">Create now</Link></p>
         {/*you can also use line17-21 instead of Inputfield */}
          {/* <div className="input-field-gmail">
            <input className='mail' type="Gmail" placeholder='example@gmail.com' required />
          </div>
          <div className="input-field-password"><input className='password' type="Password" placeholder='password' required />
           </div>  */}
            {/*making inputfield a component*/}
           <Inputfield className="mail" type="email" placeholder="example@gmail.com"/>
           <Inputfield className="password" type="password" placeholder="password"/>
           {/* <img  className ="mail-icon" src="mail.svg" alt="" /> */}
          <br />
          <input type="checkbox" /> Remember me
          <br />
          <a href="/"> Forgot Password?</a>
          <button type="submit" className='sign-in' > Sign in</button>
        </form>

        <p className="separator"><span>OR</span></p>

        <div className="container2">
          <button className="google-button">
            <img src="/googlelogo.svg" alt="" className='google-logo' />
            Continue With Google
          </button>
          <button className="facebook-button">
            <img src="/facebook.svg" alt="" className='facebook-logo' />
            Continue With Facebook
          </button>

        </div>

      </div>
      <div className="box" id="right">

        <div className="first">
          <div className="first-step"><h1 className='step'>1</h1></div>
          <p className='content1'>Create Account</p>
        </div>
        <div className="second">
          <div className="second-step"><h1 className='step'>2</h1></div>
          <p className='content2'>Select Data Sources</p>
        </div>
        <div className="third">
          <div className="third-step"><h1 className='step'>3</h1></div>
          <p className='content3'>Get Data</p>
        </div>

      </div>
    </div>
  )
}
/*
1- Login container-contains both the boxes left for sign-in and right for the image and steps
2-box -there are two boxes lefy and right
3-login form contains all the things like logo of floatchat,inputs(mail,password) and other things till the separator
4- use sign-in class for the signin button and use type submit so that on click it will submit the details.
5- container-2 is also inside the left box but it is the dib contains the continue with google and facebook options
6-then inside the right box there are three divs ,class named as first,sec,third used to show the no. of steps and the text of the step like what we will do in that step
7- separator used to draw a line left amnd right side of the span (OR)
*/