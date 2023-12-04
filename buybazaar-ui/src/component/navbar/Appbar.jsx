import { ShoppingCartCheckout } from '@mui/icons-material'
import { AppBar, Box, Button, Grid, Tab, Tabs,Toolbar, Typography, useMediaQuery, useThemeProps } from '@mui/material'
import React, { useState } from 'react'
import Drawer from './Drawer';
import { useTheme } from '@mui/material'
import MenuComponent from './MenuComponent';

function Appbar({linkArray}) {
  const [value,setValue]=useState();
  const theme=useTheme();
  const isMatch=useMediaQuery(theme.breakpoints.down('sm'));
console.log("ismatch",isMatch);



  
  return (
  <AppBar sx={{backgroundImage:'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'}}>
    <Toolbar>
      {
        isMatch?<>
         <ShoppingCartCheckout/>
         {/* <Drawer linkArray={linkArray}/> */}
         <MenuComponent linkArray={linkArray}/>
        
        </>: 
        <Grid sx={{placeItems:'center'}} container >
        <Grid item xs={2}>
          <ShoppingCartCheckout/>
        </Grid>
        <Grid item xs={6}>
          <Tabs value={value} textColor='inherit' indicatorColor='secondary'  onChange={(e,val)=>setValue(val)}>
            {linkArray.map((val)=>{
              return <Tab label={val}/>
            })}
          </Tabs>
  
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}>
          <Box display='flex'>
            <Button sx={{marginLeft:'auto'}} variant='contained'>Login</Button>
            <Button sx={{marginLeft:1}} variant='contained'Signup>Login</Button>
          </Box>
  
        </Grid>
  
      </Grid>
      }


   
   
    </Toolbar>
  </AppBar>
  )
}

export default Appbar