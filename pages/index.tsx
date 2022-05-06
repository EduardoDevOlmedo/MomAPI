import Image from 'next/image'
import { Grid, Typography } from '@mui/material'

import { useContext, useEffect } from 'react'
import { PhrasesContext } from '../context'

import { NextPage } from 'next'
import PhraseCard from '../components/Card'
import MainLayout from '../layout/MainLayout'
import { Box } from '@mui/system'



const Home: NextPage = () => {
  
  const {phrases} = useContext(PhrasesContext)

  
  


  return (
    <>
      <MainLayout>
        <Box sx={{display: "flex", background: "#131312", color: "white", alignItems: "center", width: "fit-content", padding: "10px",
        borderRadius: "10px",
        margin: "5px auto",
        justifyContent: "center"}}>
          <Typography variant="h1" sx={{fontSize: "30px"}} component="h1">Actualmente hay {phrases.length} mami frases. Te amamos mamá!</Typography>
        </Box>
      <Grid  container display="flex" sx={{padding: "10px", gap: 2}} alignItems="center" justifyContent="center">
           {
            <PhraseCard phrases={phrases} />
           }        
      </Grid>
      </MainLayout>
    </>
  )
}




export default Home
