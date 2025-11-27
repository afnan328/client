import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { Typography, Button } from '@mui/material'; // ✅ Added missing Button import
import { UserContext } from '../../../ContextProvider';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Viewuser() {

  const {host}=useContext(UserContext);

const nav =useNavigate();


  const [allusers, setAllusers] = useState([]);

  useEffect(() => {
    const fetchusers = async () => {
      try {
        const response = await axios.get('http://localhost:7000/api/user/Getuser')
        setAllusers(response.data.getusers)
        console.log('All user', response.data.getusers)
      } catch (error) {
        console.log(error)
      }
    }

    fetchusers(); // ✅ You forgot to call it

  }, []);

  const HandleDelete = (mid) => {
    console.log("user_id" + mid)
    axios.delete(`${host}/api/user/Deleteuser/${mid}`)
      .then(() => {
        alert("Category deleted successfully")
        // ✅ You cannot use [] inside .then() — that caused syntax error
        // Just call fetchusers again here
        window.location.reload(); // simplest fix without restructuring
      })
      .catch((err) => {
        console.log(err)
      });
  }

  return (
    <div>
      <TableContainer>
        <Typography variant='h4'>VIEW USERS</Typography>
        <Table style={{ marginLeft: '210px', width: '1000px' }}>
          <TableHead style={{ backgroundColor: 'aquamarine' }}>
  <TableRow>
    <TableCell align="right" style={{ color: 'white' }}>SL.NO</TableCell>
    <TableCell align="right" style={{ color: 'white' }}>NAME</TableCell>
    <TableCell align="right" style={{ color: 'white' }}>EMAIL</TableCell>
    <TableCell align="right" style={{ color: 'white' }}>PHONE</TableCell>
    <TableCell align="right" style={{ color: 'white' }}>ADDRESS</TableCell>
    <TableCell align="right" style={{ color: 'white' }}>ACTIONS</TableCell>
  </TableRow>
</TableHead>

<TableBody>
  {allusers.map((userdata, index) => (
    <TableRow key={index}>
      <TableCell align="right">{index + 1}</TableCell>
      <TableCell align="right">{userdata.name}</TableCell>
      <TableCell align="right">{userdata.email}</TableCell>
      <TableCell align="right">{userdata.phone}</TableCell>
      <TableCell align="right">{userdata.address}</TableCell>
      <TableCell align="right">
        <Button variant='contained' style={{marginBottom:'10px'}}><EditIcon />Update</Button>
        <Button
          variant='contained'
          color="error"
          onClick={() => HandleDelete(userdata._id)}
        >
          <DeleteIcon />Delete
        </Button>
      </TableCell>
    </TableRow>
  ))}
</TableBody>

        </Table>
      </TableContainer>
    </div>
  )
}
