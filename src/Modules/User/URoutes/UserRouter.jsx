import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Header from '../UComponents/Header'
import Home from '../UComponents/Home'
import Login from '../UComponents/Login'
import Register from '../UComponents/Register'
import Uregister from '../UComponents/Uregister'
import ManageUser from '../UComponents/ManageUser'
import ContextProvider from '../../../ContextProvider'





export default function UserRouter() {
  return (
    <div>
    <Header/>

    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    
      <ContextProvider>
      <Routes>
      
      
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
         <Route path="/Uregister" element={<Uregister/>}/>
         <Route path="/ManageUser" element={<ManageUser/>}/>
      </Routes>
      
    </ContextProvider>
    </div>
  )
}
