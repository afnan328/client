



import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { Button, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../ContextProvider';
import { useContext } from 'react';

export default function ViewCategory() {
  const {host}=useContext(UserContext);

const nav =useNavigate();

    const [allusers,setAllusers]=useState([]);

    useEffect(()=>{
      
      fetchusers();
    },[])



const fetchusers=async()=>{
        try {
            const response=await axios.get(`${host}/api/category/Getcategory`)
            setAllusers(response.data.getcategory)
            console.log('All user',response.data.getcategory)
        } catch (error) {
            
        }
      }
    const Handledelete=(cid)=>{
    console.log('category id' +cid)
    axios.delete(`${host}/api/category/DeleteCategory/${cid}`)
    
    .then(()=>{
     alert("category deleted successfully")
     fetchusers();
     
    })

    .catch((error)=>{
     console.log(error)
    })

    }

  return (
    <div>
      <TableContainer>
        <Typography variant='h4'>VIEW USERS</Typography>
        <Table style={{marginLeft:'210px',width:'1200px'}}>

            <TableHead style={{backgroundColor:'aquamarine'}}>

                <TableRow>
                    <TableCell align="right" style={{color:'white'}} >SL.NO</TableCell>
                    <TableCell align="right" style={{color:'white'}}>CATEGORY NAME</TableCell>
                    <TableCell align="right" style={{color:'white'}}>CATEGORY DESCRIPTION</TableCell>
                    <TableCell align="right" style={{color:'white'}}>DATE</TableCell>
                    <TableCell align="right" style={{color:'white'}}>ACTION</TableCell>
                    <TableCell align="right"> 
                        
                    </TableCell>

                       
                    
                           
                 
                </TableRow>

            </TableHead>

            <TableBody>
                {allusers.map((userdata,index)=>(
                    <TableRow >
                        <TableCell align="right">{index+1}</TableCell>
                        <TableCell align="right">{userdata.category_name}</TableCell>
                        <TableCell align="right">{userdata.category_desc}</TableCell>
                        <TableCell align="right">{userdata.date}</TableCell>
                        <TableCell align="right">
                         <Link to={`/Admin/UpdateCategory/${userdata._id}`}> <Button ><EditIcon/>UPDATE</Button></Link>  
                            <Button onClick={()=>Handledelete(userdata._id)}><DeleteIcon/>DELETE</Button></TableCell>
                        
                    </TableRow>
                ))}

            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
