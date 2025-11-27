import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper, Typography } from '@mui/material';
import { Category, Margin } from '@mui/icons-material';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function AddCategory() {

   const[category,setCategory]=useState({
    cname:'',
    cdesc:''
   })

   const handlechange=(e)=>{
    setCategory({...category,[e.target.name]:e.target.value})
    console.log({...category,[e.target.name]:e.target.value})

   }

   const handleSubmit=()=>{
    console.log(category)
    alert("successfull")
axios.post("http://localhost:7000/api/category/AddCategory", category)
.then((res)=>{
  console.log(res.data)
})
.catch((err)=>{
  console.log(err.mesage)
})
   }

   return(
    <div>
      <Box>
        <Link to={"/admin/ViewCategory"}><Button variant='contained' color='error' style={{marginLeft:'1000px' }}>View Category</Button></Link>
      </Box>
      <Box style={{display:'flex',justifyContent:'center',Margin:"30px",padding:'100px'}}>
        
        
        <Paper elevation={4} style={{width:"600px",padding:'50px'}}>
      <Typography variant='h4' style={{marginBottom:'20px',fontSize:'30px',fontFamily:'cursive'}}>ADD CATEGORY</Typography>

      <TextField id="outlined-basic" label="Category Name"   variant="outlined"      onChange={handlechange} value={category.cname} name='cname' fullWidth style={{marginBottom:'30px'}}  />
      <TextField id="filled-basic"   label="Category Description" variant="filled"  onChange={handlechange} value={category.cdesc}    name='cdesc' type='text' fullWidth style={{marginBottom:'30px'}}/>

       <Button variant='contained' onClick={handleSubmit}>Add Category</Button>
      </Paper>
    
    </Box>
    </div>
  
)}
