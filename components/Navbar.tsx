import React, { useState } from 'react'
import { AppBar, Box, Icon, IconButton, Toolbar, Typography, Link } from "@mui/material"
import {Search, Menu, Add} from "@mui/icons-material"
import NextLink from 'next/link'

const Navbar = () => {
  
    
    return (
    <nav style={{marginBottom: "20px"}}>
   <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{background: "#131312"}}  position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Box sx={{flexGrow: 1}}>
          <NextLink passHref href={"/"}>
              <Link sx={{color: "white"}} underline="none">
              <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
            FrasesMami
          </Typography>
            </Link>
            </NextLink>      
            </Box>
          <NextLink passHref href={"/add"}>
              <Link>
              <IconButton 
                sx={{color: "white"}}
                >
                        <Add />
              </IconButton>  
            </Link>
            </NextLink>
            <NextLink passHref href={"/search"}>
              <Link>
              <IconButton 
                sx={{color: "white"}}
                >
                        <Search />
              </IconButton>  
            </Link>
            </NextLink>
        </Toolbar>
      </AppBar>
    </Box>
   </nav>
  )
}

export default Navbar