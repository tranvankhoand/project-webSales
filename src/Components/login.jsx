import React, { useState ,useRef} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
 
 const handleSignin = (e) => {
  
 }
  return (

    <div className="login-style" style={{display:'flex',margin:'auto',height:'100vh',alignItems:'center',width: '900px'}}>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form className="login-form" action="#">
            <h1 className="login-h1">Create Account</h1>
            <div className="social-container">
              <a href="#" className="login-a social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="login-a social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="login-a social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span className="login-span">or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="login-button right-panel-active"  >Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="login-a social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="login-a social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="login-a social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span className="login-span">or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a className="login-a" href="#">Forgot your password?</a>
            <button className="login-button">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="login-h1">Welcome Back!</h1>
              <p className="login-p">To keep connected with us please login with your personal info</p>
              <button className="login-button ghost" id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="login-h1">Hello, Friend!</h1>
              <p className="login-p">Enter your personal details and start journey with us</p>
              <button className="login-button ghost" id="signUp" onClick={handleSignin}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Login;
