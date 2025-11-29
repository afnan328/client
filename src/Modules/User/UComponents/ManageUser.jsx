import { Margin } from '@mui/icons-material'
import { Box,Button,Paper,TextField,Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { UserContext } from '../../../ContextProvider';
import { useContext } from 'react';
import {useNavigate} from 'react-router-dom'


export default function ManageUser() {

const {host}=useContext(UserContext);

const nav =useNavigate();

    const[profile,setProfile]=useState({
        uname:"",
        uemail:"",
    
        uphone:""
    

    })

    //to handle updates in state
    const handlechange=(e)=>{
        setProfile({...profile,[e.target.name]:e.target.value});
        console.log({[e.target.name]:e.target.value});
    }

    useEffect(()=>{
        const token=localStorage.getItem('UserToken')
        console.log("user Token",token)
        if(token){
            axios.get('http://localhost:7000/api/user/GetProfile',{headers:{"auth-token":token}})
          .then((res)=>{
            // setProfile(res.data.user)
            // console.log(res.data.user)
            const userdata=res.data.user
            setProfile({
                uname:userdata.name,
                uemail:userdata.email,
    
                uphone:userdata.phone,
                uaddress:userdata.address
            })
        })

        .catch((error)=>{
            console.log(error)
        })
            
        }else{
            alert("token not found")
        }

       
    },[])


    const handleprofileUpdate=()=>{
        const token=localStorage.getItem('UserToken')
        console.log(token)
         axios.put(`${host}/api/user/UpdateProfile`,profile,{headers:{"auth-token":token}})

         .then((res)=>{
            alert(res.data.message);
            setProfile(res.data.user)
         })

         .catch((error)=>{
           console.log(error)
           alert(error.message)
         })
    }

    // const handleSubmit=()=>{
    //     console.log(profile);
    //     axios.post('http://localhost:7000/api/user/UpdateProfile',profile)
    //     .then((res)=>{
    //         console.log("User details",res.data)
    //         alert("user register successfully")

    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //         alert("server error")

    //     }
    // )
    // }
  return (
    <div>
      <Box style={{display:'flex',justifyContent:'center',margintop:'50px'}}>
        <Paper elevation={4} style={{width:"600px",padding:'20px'}}>
            <Typography>Manage Profile</Typography>

            <TextField Variant='outlined' label='Name'    onChange={handlechange} value={profile.uname}    name='uname' type='text' fullWidth sx={{mb:3}}/>
            <TextField Variant='outlined' label='Email'   onChange={handlechange} value={profile.uemail} name='uemail' type='email' fullWidth style={{marginBottom:"30px"}}/>
            <TextField Variant='outlined' label='Phone'   onChange={handlechange} value={profile.uphone}  name='uphone' type='number' fullWidth sx={{mb:3}}/>
            <TextField Variant='outlined' label='Address' onChange={handlechange} value={profile.uaddress}  name='uaddress' type='address' fullWidth sx={{mb:3}}  />

            <Button variant='contained' onClick={handleprofileUpdate} color='error'>UPDATE</Button>
        </Paper>
      </Box>
    </div>
  )
}
