import React, { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'

const App = () => {
  const [regData,setRegData]=useState();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}>
        <Route path="/login" element={<Login regData={regData}/>}></Route>
        <Route path="/register" element={<Register setregData={setRegData}/>}></Route>
        </Route>
        <Route path="/dashboard" element={<Dashboard regdash={regData}/>}></Route> 
        <Route path="/Logout" element={<h1>Logout Page</h1>}></Route>
        <Route path="/*" element={<h1>No Page Available</h1>}></Route>

      </Routes>
    </div>
  )
}

export default App