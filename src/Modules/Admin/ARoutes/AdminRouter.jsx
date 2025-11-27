import React from 'react'
import { Routes,Route } from 'react-router-dom'

import ClipDrawer from '../AComponents/ClipDrawer'
import Dashboard from '../AComponents/Dashboard'
import Viewuser from '../AComponents/Viewuser'
import AddCategory from '../AComponents/AddCategory'
import ViewCategory from '../AComponents/ViewCategory'
import UpdateCategory from '../AComponents/UpdateCategory'
import AddProduct from '../AComponents/AddProduct'
import ViewProduct from '../AComponents/ViewProduct'
import UpdateProduct from '../AComponents/UpdateProduct'
import ContextProvider from '../../../ContextProvider'


export default function AdminRouter() {
  return (
    <div>

      <ClipDrawer/>
      <ContextProvider>

       <Routes>
             
              <Route path="/" element={<Dashboard/>}/>  
              <Route path="/Viewuser" element={<Viewuser/>}/>
              <Route path="/AddCategory" element={<AddCategory/>}/>   
              <Route path="/ViewCategory" element={<ViewCategory/>}/> 
              <Route path="/UpdateCategory/:cid" element={<UpdateCategory/>}/>
              <Route path="/AddProduct" element={<AddProduct/>}/> 
              <Route path="/ViewProduct" element={<ViewProduct/>}/> 
              <Route path="/UpdateProduct" element={<UpdateProduct/>}/> 
             

            </Routes>
            </ContextProvider>
    </div>
  )  
}
