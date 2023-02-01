import React, { useState } from 'react'
function Login() {
 
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
function saveData()
{
  let data={email,password}

  fetch("http://localhost:5000/api/login", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  }).then((resp)=>{
    resp.json().then((result)=>{
      console.warn("result",result)
    })
  })
}
  return (
    <div className="Login">
      <input type="text" name="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /> <br />
      <input type="password" name="password"  value={password} onChange={(e)=>{setPassword(e.target.value)}}/> <br /> <br />
      <button type="button" onClick={saveData} >Log In</button>
    </div>
  );
}
export default Login;
