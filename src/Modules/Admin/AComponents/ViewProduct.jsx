// import React, { useEffect, useState } from 'react'
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import axios from 'axios';
// import { Typography, Button } from '@mui/material'; // ✅ Added missing Button import
// import { Link } from 'react-router-dom';
// 
// export default function ViewProduct() {

//   const [allusers, setAllusers] = useState([]);

//   useEffect(() => {
//     const fetchusers = async () => {
//       try {
//         const response = await axios.get('http://localhost:7000/api/product/Getproduct')
//         setAllusers(response.data.getproducts)
//         console.log('All user', response.data.getproducts)
//       } catch (error) {
//         console.log(error)
//       }
//     }

//     fetchusers(); // ✅ You forgot to call it

//   }, []);

//   const HandleDelete = (mid) => {
//     console.log("user_id" + mid)
//     axios.delete(`http://localhost:7000/api/user/Deleteuser/${mid}`)
//       .then(() => {
//         alert("Category deleted successfully")
//         // ✅ You cannot use [] inside .then() — that caused syntax error
//         // Just call fetchusers again here
//         window.location.reload(); // simplest fix without restructuring
//       })
//       .catch((err) => {
//         console.log(err)
//       });
//   }

//   return (
//     <div>
//       <TableContainer>
//         <Typography variant='h4'>VIEW PRODUCT</Typography>
//         <Table style={{ marginLeft: '210px', width: '1000px' }}>
//           <TableHead style={{ backgroundColor: 'aquamarine' }}>
//   <TableRow>

//     <TableCell align="right" style={{ color: 'white' }}>SL.NO</TableCell>
//     <TableCell align="right" style={{ color: 'white' }}>Product name</TableCell>
//     <TableCell align="right" style={{ color: 'white' }}>Product Description</TableCell>
//     <TableCell align="right" style={{ color: 'white' }}>Product price</TableCell>
//     <TableCell align="right" style={{ color: 'white' }}>Product Image</TableCell>
//     <TableCell align="right" style={{ color: 'white' }}>quantity</TableCell>
//     <TableCell align="right" style={{ color: 'white' }}>ACTIONS</TableCell>
   

//   </TableRow>
// </TableHead>

// <TableBody>
//   {allusers.map((userdata, index) => (
//     <TableRow key={index}>
//       <TableCell align="right">{index + 1}</TableCell>
//       <TableCell align="right">{userdata.product_name}</TableCell>
//       <TableCell align="right">{userdata.product_desc}</TableCell>
//       <TableCell align="right">{userdata.product_qty}</TableCell>
//        <TableCell>
//       <img src={`http://localhost:7000/api/image/${userdata.product_image}`} alt="myimage" style={{width:"100px"}}/>
//     </TableCell>
//       <TableCell align="right">
//        <Link to={'/Admin/Updateproduct/'}>
//   <Button variant='contained' style={{ marginBottom:'10px', marginRight:'10px' }}>
//     <EditIcon /> Update
//   </Button>
// </Link>

//         <Button
//           variant='contained'
//           color="error"
//           onClick={() => HandleDelete(userdata._id)}
//         >
//           <DeleteIcon />Delete
//         </Button>
//       </TableCell>
//     </TableRow>
//   ))}
// </TableBody>

//         </Table>
//       </TableContainer>
//     </div>
//   )
// }



import React, { useEffect, useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Typography, Button
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../ContextProvider';
import { useContext } from 'react';

export default function ViewProduct() {
  const {host}=useContext(UserContext);

const nav =useNavigate();

  const [allusers, setAllusers] = useState([]);

  const fetchusers = async () => {
    try {
      const response = await axios.get('http://localhost:7000/api/product/Getproduct');
      setAllusers(response.data.getproducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchusers();
  }, []);

  const HandleDelete = (id) => {
    axios.delete(`${host}/api/user/Deleteuser/${id}`)
      .then(() => {
        alert("Product deleted successfully");
        fetchusers();  // better than reload
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <TableContainer>
        <Typography variant='h4'>VIEW PRODUCT</Typography>

        <Table style={{ marginLeft: '210px', width: '1000px' }}>
          <TableHead style={{ backgroundColor: 'aquamarine' }}>
            <TableRow>
              <TableCell>SL.NO</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>ACTIONS</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {allusers.map((item, index) => (
              <TableRow key={item._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.product_name}</TableCell>
                <TableCell>{item.product_desc}</TableCell>
                <TableCell>{item.product_qty}</TableCell>

                <TableCell>
                  <img
                    src={`http://localhost:7000/api/image/${item.product_image}`}
                    alt="product"
                    style={{ width: "100px" }}
                  />
                </TableCell>

                <TableCell>

                  <Link to={`/Admin/Updateproduct/${item._id}`}>
                    <Button variant='contained' style={{ marginBottom: 10, marginRight: 10 }}>
                      <EditIcon /> Update
                    </Button>
                  </Link>

                  <Button
                    variant='contained'
                    color="error"
                    onClick={() => HandleDelete(item._id)}
                  >
                    <DeleteIcon /> Delete
                  </Button>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
    </div>
  );
}
