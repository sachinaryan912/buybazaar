import { ShoppingCartCheckout } from '@mui/icons-material'
import { AppBar, Avatar, Box, Button, Grid, IconButton, ListItemIcon, Menu, MenuItem, Tab, Tabs,TextField,Toolbar, Tooltip, Typography, useMediaQuery, useThemeProps } from '@mui/material'
import React, { useState } from 'react'
import Drawer from './Drawer';
import { useTheme } from '@mui/material'
import MenuComponent from './MenuComponent';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AssignmentIcon from '@mui/icons-material/Assignment';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SearchIcon from '@mui/icons-material/Search';
import SearchField from './SearchBar';

function Appbar2({linkArray}) {
  const [value,setValue]=useState();
  const settings = ["Login/Signup", "Cart", "Wishlist", "My orders", "Enquiry"];
  const theme=useTheme();
  const isMatch=useMediaQuery(theme.breakpoints.down('sm'));
console.log("ismatch",isMatch);



  
  return (
  <AppBar sx={{background:'black'}}>
    <Toolbar>
      {
        isMatch?<>
         <ShoppingCartCheckout/>
         {/* <Drawer linkArray={linkArray}/> */}
         <MenuComponent linkArray={linkArray}/>
        
        </>: 
        <Grid sx={{placeItems:'center'}} container >
        <Grid item xs={2}>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                fontFamily: "Shizuru, sans-serif",
                fontWeight: 700,
                letterSpacing: ".1rem",
                textTransform: "uppercase", // Make the text uppercase
                color: "white",
                textDecoration: "none",
                display: { xs: "flex", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>buybazaar</span>
            </Typography>
          </Box>

        </Grid>
        <Grid item xs={8}>
           <Box className='search-bar'>
             <SearchField/>
            </Box> 
          <Tabs value={value} textColor='inherit' indicatorColor='secondary'  onChange={(e,val)=>setValue(val)}>
            {linkArray.map((val)=>{
              return <Tab label={val}/>
            })}
          </Tabs>
  
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={1}>
        <Box sx={{ flexGrow: 0 }}>
           
           <MenuComponent linkArray={settings} avtaar={true}/>
          </Box>
  
        </Grid>
  
      </Grid>
      }


   
   
    </Toolbar>
  </AppBar>
  )
}

export default Appbar2