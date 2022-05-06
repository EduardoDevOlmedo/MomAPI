import React from 'react'
import { AppBar, Box, Icon, IconButton, Toolbar, Typography, Link } from "@mui/material"
import NextLink from 'next/link'

interface Props {
    href: string;
    text?: string;
    isIcon: boolean;
    children?: JSX.Element[] | JSX.Element
}

export const LinkComponent: React.FC<Props> = ({href, text, isIcon, children}) => {
  return (
    <NextLink passHref href={`/${href}`}>
              <Link sx={{color: "white"}} underline="none">
              <Typography
                variant="h6"
                 noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: "white" }}
            >
              {
                  isIcon ? 
                  (children)
                  : text
              }
          </Typography>
            </Link>
    </NextLink> 
  )
}

