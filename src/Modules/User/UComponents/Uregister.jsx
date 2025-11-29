import { Margin } from '@mui/icons-material'
import { Box,Button,Paper,TextField,Typography } from '@mui/material'
import axios from 'axios'
import React, { useState} from 'react'
import { UserContext } from '../../../ContextProvider'
import { useContext } from 'react'
import {useNavigate} from 'react-router-dom'


export default function Uregister() {

  const {host}=useContext(UserContext);

  const nav =useNavigate();

    const[user,setUser]=useState({
        uname:"",
        uemail:"",
        upassword:"",
        uphone:""
    

    })

    //to handle updates in state
    const handlechange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
        console.log({[e.target.name]:e.target.value});
    }

    const handleSubmit=()=>{
        console.log(user);
        axios.post(`${host}/api/user/Adduser`,user)
        .then((res)=>{
            console.log("User details",res.data)
            alert("user register successfully")

        })
        .catch((err)=>{
            console.log(err)
            alert("server error")

        })
    }
  return (
    <div>
      <Box style={{display:'flex',justifyContent:'center',Margin:'30px'}}>
        <Paper elevation={4} style={{width:"600px",padding:'20px'}}>
            <Typography>REGISTER PAGE</Typography>

            <TextField Variant='outlined' label='Name'    onChange={handlechange} value={user.uname}    name='uname' type='text' fullWidth sx={{mb:3}}/>
            <TextField Variant='outlined' label='Email'   onChange={handlechange} value={user.uemail} name='uemail' type='email' fullWidth style={{marginBottom:"30px"}}/>
            <TextField Variant='outlined' label='Password'onChange={handlechange} value={user.upassword}  name='upassword' type='password' fullWidth sx={{mb:3}}/>
            <TextField Variant='outlined' label='Phone'   onChange={handlechange} value={user.uphone}  name='uphone' type='number' fullWidth sx={{mb:3}}/>
            <TextField Variant='outlined' label='Address' onChange={handlechange} value={user.uaddress}  name='uaddress' type='address' fullWidth sx={{mb:3}}  />

            <Button variant='contained' onClick={handleSubmit} color='error'>Register</Button>
        </Paper>
      </Box>
    </div>
  )
}
