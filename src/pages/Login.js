import  { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
const [email, setEmail]= useState("")
const[password, setPassword]= useState("")
const navigate= useNavigate()
    const loginHandler= (event) => {
        event.preventDefault();
        
        
    const user={
      email:email,
     password:password,
    }
    console.log(user);
    }
    const resetPassword=() => {

    }
    const register= () => {
     navigate("/register")
    }
  return (
    <div>
      <form onSubmit={loginHandler}>
        <label>Email</label>
        <input
         type="text" 
         placeholder="Email" 
         value={email}
         onChange={(e) => setEmail(e.target.value)}/>
        <label>Password</label>
        <input 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Login</button>
        <button onClick={resetPassword}>Forget Password</button>
        <button onClick={register}>Register</button>
    
      </form>
    </div>
  );
};

export default Login;
