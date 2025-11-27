import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';
import {Link, useNavigate} from 'react-router-dom'
import Typography from '@mui/material/Typography';
import { UserContext } from '../../../ContextProvider';
import { useContext } from 'react';
// import login from '../../../Assets/login.png'




export default function Register() {

  const {host}=useContext(UserContext);
  
  const nav =useNavigate();
  return (
    <div>
       <Box
            // component="form"
            // sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            // noValidate
            // autoComplete="off"

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
          <div>
              <Paper elevation={6}
  style={{
    padding: "30px",
    width: "400px",
    textAlign: "center",
    backdropFilter: "blur(8px)",      // <-- NEW (glass effect)
    background: "rgba(255,255,255,0.85)" // <-- NEW (transparent white)
  }}>
                <Typography style={{fontFamily:"unset",marginBottom:"30px"}} variant='h4'>User Registration!</Typography>
                  <Grid>
      
                       <TextField
                required
                id="standard-required"
                label="Name"
                name='name'
                
                placeholder="Enter your name"
                variant="filled"
                fullWidth
                sx={{mb:3}}
              />

              </Grid>
               <Grid size={12}>
            <TextField
                required
                id="standard-required"
                name="number"
                label="Phone. no"
                
                placeholder="Enter your phone number"
                variant="filled"
                fullWidth
                sx={{mb:3}}
              />
              
                  </Grid>
           
         <Grid size={12}>
              <TextField
                required
                id="standard-required"
                name="email"
                
                label="E-Mail"
                placeholder="Enter your E-Mail"
                variant="filled"
                fullWidth
                sx={{mb:3}}
              />
      </Grid>
      
         <Grid size={12}>
              <TextField
                required
                id="standard-required"
                label="Password"
                name="password"
                type='password'
                
                placeholder="Enter your password"
                variant="filled"
                fullWidth
                sx={{mb:3}}
              />
      </Grid>
              <TextField
                id="filled-textarea"
                label="Address"
                
                name="address"
                placeholder="Enter your address"
                multiline
                fullWidth
                variant="filled"
                sx={{mb:3}}
              />
      
              <Grid>
              <Button variant="contained"fullWidth>REGISTER</Button>
              </Grid>

                    <Typography style={{fontFamily:"unset"}}>Already have an account?<Link to="/Login">Login</Link></Typography>


    
              </Paper>
          </div>
          
          </Box>
    </div>
  )
}