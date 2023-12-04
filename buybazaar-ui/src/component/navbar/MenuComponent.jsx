import { MenuOpenRounded } from '@mui/icons-material'
import { Menu, MenuItem,IconButton } from '@mui/material'
import React, { useState } from 'react'

function MenuComponent({linkArray}) {
    const [open,setOpen]=useState(false)
  return (
   <>
   <Menu open={open}
    anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      
     
   
   
   >
    {linkArray.map((val)=>{
        return <MenuItem onClick={()=>setOpen(false)}>{val}</MenuItem>
    })}
   </Menu>
   <IconButton sx={{marginLeft:'auto',color:'white'}} onClick={()=>setOpen(true)}>
    <MenuOpenRounded/>
   </IconButton>
   </>
  )
}

export default MenuComponent