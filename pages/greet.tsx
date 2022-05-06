import React, {useContext} from 'react'
import MainLayout from '../layout/MainLayout'
import { PhrasesContext } from '../context'
import { Grid, Box, Typography } from '@mui/material'
import PhraseCard from '../components/Card'

const GreetPage = () => {
    const {phrases} = useContext(PhrasesContext)
  
    const filteredPhrases = phrases.filter(phrase => phrase.type === "Buena")
  
    return (
        <MainLayout>
          <Box sx={{display: "flex", background: "#131312", color: "white", alignItems: "center", width: "fit-content", padding: "10px",
        borderRadius: "10px",
        margin: "5px auto",
        justifyContent: "center"}}>
          <Typography variant="h3" className="subs" sx={{fontSize: "1rem"}} component="h3">Actualmente hay {filteredPhrases.length} frases de felicitación de mami🥰. Te amamos mamá!</Typography>
        </Box>
        <Grid  container display="flex" sx={{padding: "10px", gap: 2}} alignItems="center" justifyContent="center">
           {
            <PhraseCard phrases={filteredPhrases} />
           }        
         </Grid>
        </MainLayout>
  )
}

export default GreetPage