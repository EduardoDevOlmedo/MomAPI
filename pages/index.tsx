import Image from 'next/image'
import { Grid, Typography } from '@mui/material'

import { useContext, useEffect } from 'react'
import { PhrasesContext } from '../context'

import { NextPage } from 'next'
import PhraseCard from '../components/Card'
import MainLayout from '../layout/MainLayout'
import { Box } from '@mui/system'
import { LinkComponent } from '../components/Link'



const Home: NextPage = () => {
  
  const {phrases} = useContext(PhrasesContext)

  
  


  return (
    <>
      <MainLayout>
        <Box sx={{ background: "#131312", color: "white",  width: "fit-content", padding: "10px",
        borderRadius: "10px",
        margin: "5px auto",
        }}>
          <Typography variant="h3" className="subs" sx={{fontSize: "1rem"}} component="h3">Actualmente hay {phrases.length} mami frases. !Te amamos mamá!</Typography>
          <div style={{textAlign: "center"}}>
         <LinkComponent isIcon={false}  text='Ver regaños' href="scolding"></LinkComponent>ó<LinkComponent isIcon={false} text='Ver felicitaciones' href="greet"/>
          </div>
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
