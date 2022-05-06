import React, { useState } from 'react'
import { AppBar, Box, Icon, IconButton, Toolbar, Typography, Link } from "@mui/material"
import {Search, Menu, Add} from "@mui/icons-material"
import NextLink from 'next/link'
import { LinkComponent } from './Link'

const Navbar = () => {
  
    
    return (
    <nav style={{marginBottom: "20px"}}>
      <AppBar sx={{background: "#131312"}} position="static">
        <Toolbar>
          <Box sx={{flexGrow: 1}}>
          <LinkComponent isIcon={false} href="/" text="FrasesMami"/>    
            </Box>
          <LinkComponent 
            isIcon href="add">
              <IconButton sx={{color: "white"}}>
                  <Add />
                </IconButton>
            </LinkComponent>
            <LinkComponent 
            isIcon href="search">
              <IconButton sx={{color: "white"}}>
                  <Search />
                </IconButton>
            </LinkComponent>
        </Toolbar>
      </AppBar>
   </nav>
  )
}

export default Navbar