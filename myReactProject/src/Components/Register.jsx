import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const Register = ({setregData}) => {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    function getData(e){
        e.preventDefault();
        const data={name,email,password}
        setregData(data);
        alert("Registration Successfull")
    }

  return (
    <div>
        <form>
        <div class="mb-3">
    <label for="exampleInputUserName1" class="form-label">Name</label>
    <input type="text" onChange={(e)=>setName(e.target.value)} class="form-control" id="exampleInputUserName1" />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" onChange={(e)=>setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" onChange={(e)=>setPassword(e.target.value)} class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={getData} class="btn btn-primary">Register</button>
</form>
    </div>
  )
}

export default Register