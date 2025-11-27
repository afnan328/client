import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react'
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateCategory() {

   const [update, setUpdate] = useState({
      update_name: '',
      update_description: ''
   });

   const { cid } = useParams();
   console.log(cid)
   const nav = useNavigate();
      useEffect(() => {
      axios.get(`http://localhost:7000/api/category/GetcategoryById/${cid}`)
         .then((res) => {
            // setUpdate(res.data.onecategory)
            // console.log(res.data.onecategory)
            const cat = res.data.onecategory
            setUpdate({
               update_name:cat.category_name,
               update_description:cat.category_desc
            })
         })
         .catch(() => {

         })
   }, [])
   const handleChange = (e) => {
      setUpdate({ ...update, [e.target.name]: e.target.value })
      console.log({ ...update, [e.target.name]: e.target.value })
   }




   const HandleUpdate = () => {
      const updatedcategory = { 
         category_name:update.update_name,
         category_desc:update.update_description
      }
      axios.put(`http://localhost:7000/api/category/Updatecategory/${cid}`, updatedcategory)
         .then((res) => {
            alert("updated successfully")
            nav("/Admin/ViewCategory")
         })
         .catch((error) => {
            console.log(error)
         })
   }

   return (
      <div>
         <Box style={{ display: 'flex', justifyContent: 'center', Margin: '30px' }}>
            <Paper elevation={4} style={{ width: '600px', padding: '20px' }}>
               <Typography><h1>Update Category</h1></Typography>

               <TextField variant='outlined' label='Update Name' onChange={handleChange} value={update.update_name} name='update_name' fullWidth sx={{ mb: 3 }} />

               <TextField variant='outlined' label='Update Description' onChange={handleChange} value={update.update_description} name='update_description' fullWidth sx={{ mb: 3 }} />

               <Button variant='contained' onClick={HandleUpdate} color='error'>Update Category</Button>
            </Paper>
         </Box>
      </div>
   )
}
