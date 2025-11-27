import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import { Link } from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';

const drawerWidth = 240;


export default function ClipDrawer() {
  return (
    <div>
       <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        
        <Toolbar />
        <Divider />
        <List>

                <ListItem disablePadding>
             
              <ListItemButton component={Link} to={"/admin/"}> 
                <ListItemIcon>
                  <PersonIcon/>
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>

           
              <ListItemButton component={Link} to="/admin/Viewuser">
                <ListItemIcon>
                  <PeopleIcon/>
                </ListItemIcon>
                <ListItemText primary="Manage User" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                
              <ListItemButton component={Link} to="/admin/ViewProduct">
                <ListItemIcon>
                    <CategoryIcon/>
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText primary="Manage product" />
              </ListItemButton>
              
            </ListItem>

            


            <ListItem disablePadding>
             
              <ListItemButton component={Link} to={"/admin/AddCategory"}> 
                <ListItemIcon>
                  <CategoryIcon/>
                </ListItemIcon>
                <ListItemText primary="AddCategory" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding></ListItem>

             <ListItem disablePadding>
             
              <ListItemButton component={Link} to={"/admin/AddProduct"}> 
                <ListItemIcon>
                  <CategoryIcon/>
                </ListItemIcon>
                <ListItemText primary="AddProduct" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding></ListItem>

           
             
              

            
          
          
              
            
        </List>
      
        
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography sx={{ marginBottom: 2 }}>
         
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          
        </Typography>
      </Box>
    </Box>
    </div>
  )
}
