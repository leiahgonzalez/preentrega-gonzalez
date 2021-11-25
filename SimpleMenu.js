import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { CartWidget } from './CartWidget';



function SimpleMenu() {
  
   return (
     <Box sx={{ flexGrow: 1 }}>
       <AppBar position="static">
         <Toolbar>
           <img alt="logo" src="../logo.svg"/>
           <IconButton
             size="large"
             edge="start"
             color="inherit"
             aria-label="menu"
             sx={{ mr: 2 }}
           >
            
           </IconButton>
           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <nav>
              <a href="" class="menu">Inicio</a>
              <a href="" class="menu">Sillones</a>
              <a href="" class="menu">Mesas</a>
              <a href="" class="menu">Sillas</a>
            </nav>
            </Typography>
              
          </Toolbar>
        </AppBar>
      </Box>
    );
}






export default SimpleMenu;