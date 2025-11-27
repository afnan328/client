import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {Link, useNavigate} from 'react-router-dom'
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { UserContext } from '../../../ContextProvider';
import { useContext } from 'react';

// import login from '../../../Assets/login.png'

export default function Login() {

const {host}=useContext(UserContext);

const nav =useNavigate();

const[user,setUser]=useState({
        
        uemail:"",
        upassword:"",
        
    

    })

    //to handle updates in state
    const handlechange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
        console.log({[e.target.name]:e.target.value});
    }

    const handleLogin=()=>{
      axios.post(`${host}/api/user/Login`,user)

      .then((res)=>{
        console.log("Login details",res.data)
        
        if(res.data.success){
          localStorage.setItem("UserToken",res.data.Token)
          alert("Login succesfull")
        }
      })

      .catch((error)=>{
          console.log(error)
      })
    }

  return (
    <div>
       <Box
            // component="form"
            // sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            // noValidate
sx={{
    height: '100vh',
    width: '100%',
    // backgroundImage: url(${login}),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
          
          >
        
          <div >
              <Paper elevation={6}
  style={{
    padding: "30px",
    width: "400px",
    textAlign: "center",
    backdropFilter: "blur(8px)",      // <-- NEW (glass effect)
    background: "rgba(255,255,255,0.85)" // <-- NEW (transparent white)
  }}>
                <Typography style={{fontFamily:"unset",marginBottom:"30px"}} variant='h4'>User Login!</Typography>
                  <Grid size={12}>
              <TextField
                required
                id="standard-required"
                label="E-Mail"
                fullWidth
                placeholder="Enter your E-Mail"
                variant="filled"
                name='uemail'
                onChange={handlechange}
                
                sx={{mb:3}}
              />
      </Grid>
      
         <Grid size={12}>
              <TextField
                required
                id="standard-required"
                label="Password"
                type='password'
                placeholder="Enter your password"
                variant="filled"
                name='upassword'
                fullWidth
                onChange={handlechange}
                sx={{mb:3}}
              />
      </Grid>

      <Grid >
        <Button variant="contained" onClick={handleLogin} fullWidth>LOGIN</Button>
      <Typography style={{fontFamily:"unset"}}>Dont have Account????<Link to="/Register">Register</Link></Typography>
        
      </Grid>
      </Paper>
      </div>
      </Box>
    </div>
    
  )
}