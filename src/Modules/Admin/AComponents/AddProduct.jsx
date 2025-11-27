import React, { useEffect, useState } from 'react'
import { Margin } from '@mui/icons-material'
import { Box,Button,Paper,TextField,Typography,Link } from '@mui/material'
import axios from 'axios'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function AddProduct() {

    const[product,setProduct]=useState({
        pname:'',
        pdesc:'',
        pprice:'',
        pimage:'',
        catid:'',
        pqty:''
    })

    const[categories,setCategories]=useState([]);

    useEffect(()=>{
    axios.get('http://localhost:7000/api/category/Getcategory')
    .then((res)=>{
        console.log(res.data)
        setCategories(res.data.getcategory)

    })
    .catch(()=>{
        console.log(console.error);
        

    })
    },[])


     const handlechange = (e) => {
  if (e.target.name === 'pimage') {
    setProduct({...product, pimage: e.target.files[0]});
  } else {
    setProduct({...product, [e.target.name]: e.target.value});
  }
};


   const handleSubmit=()=>{
        console.log(product);
        const data=new FormData();
        data.append('pname',product.pname);
        data.append('pdesc',product.pdesc);
        data.append('pprice',product.pprice);
        data.append('catid',product.catid);
        data.append('pqty',product.pqty);
        data.append('pimage',product.pimage);

        axios.post('http://localhost:7000/api/product/Addproduct',data,
          {headers:{'Content-type':'multipart/form-data'}})
        .then((res)=>{
            console.log("User details",res.data)
            alert("product added successfully")

        })
    }
  return (
    <div>
      <Box>
        <Link to={"/Admin/ViewProduct"}><Button variant='contained' color='error' style={{marginLeft:'1000px' }}>View product</Button></Link>
      </Box>
        <Box style={{display:'flex',justifyContent:'center',Margin:'30px'}}>
              <Paper elevation={4} style={{width:"600px",padding:'20px'}}>
                  <Typography>Add product</Typography>
      
                  <TextField variant='outlined' label='Product Name'        onChange={handlechange} value={product.pname}    name='pname' type='text' fullWidth sx={{mb:3}}/>
                  <TextField variant='outlined' label='Product description' onChange={handlechange} value={product.pdesc} name='pdesc' type='email' fullWidth style={{marginBottom:"30px"}}/>
                  <TextField variant='outlined' label='Product price'       onChange={handlechange} value={product.pprice}  name='pprice' type='number' fullWidth sx={{mb:3}}/>
                  <TextField variant='outlined' label='Product image'   InputLabelProps={{shrink:true}}   onChange={handlechange}  name='pimage' type='file' fullWidth sx={{mb:3}}/>
                  <TextField variant='outlined' label='Product quantity'      onChange={handlechange} value={product.pqty}  name='pqty' type='text' fullWidth sx={{mb:3}}/>
                  
                  
      <FormControl sx={{  minWidth: 560,mb:'7px', mt:'7px' }}>
        <InputLabel id="demo-simple-select-autowidth-label">category</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={product.catid}
          onChange={handlechange}
          autoWidth
          name='catid'
          label="Age"
        >
          {categories.map((catdata)=>(
            
            
          <MenuItem key={catdata._id} value={catdata._id}>{catdata.category_name}</MenuItem>
          
            

          ))}
        </Select>
      </FormControl>
                  <Button variant='contained' onClick={handleSubmit} color='error'>Add Product</Button>
              </Paper>
            </Box>

            

    </div>
  )
}
