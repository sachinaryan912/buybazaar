import { MenuOpenRounded, TrendingUpRounded } from '@mui/icons-material'
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'

function DrawerComponent({linkArray}) {
    const [open,setOpen]=useState(false)
  return (
   <>
   <Drawer open={open} onClose={()=>setOpen(false)}>
  <List>
   {linkArray.map((val)=>{
    return <ListItemButton onClick={()=>setOpen(false)}>
      <ListItemIcon>
         <ListItemText>{val}</ListItemText>
     </ListItemIcon>
 </ListItemButton>

   })}
  </List>
  </Drawer>

   <IconButton sx={{marginLeft:'auto',color:'white'}} onClick={()=>setOpen(true)}>
    <MenuOpenRounded/>

   </IconButton>
   </>
  )
}

export default DrawerComponent;