
import { Button,Input, Grid, Chip } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useContext, useEffect, useState, useCallback} from 'react'
import PhraseCard from '../components/Card'
import { PhrasesContext } from '../context'
import { Phrase } from '../interfaces/Phrase'
import MainLayout from '../layout/MainLayout'



const SearchPage = () => {
  
    const {phrases} = useContext(PhrasesContext)
  
    const [input, setInput] = useState("")
    const [selectedPhrases, setSelectedPhrases] = useState<any>([])

    const handleChange = (e: any) => {
        setInput(e.target.value)
    }
    
    const getData = useCallback(
      () => {
        if(input.trim() !== ""){
          const value = input.toLowerCase()
          const foundPhrases = phrases.filter((phrase) => phrase.message.toLowerCase().includes(value))
          setSelectedPhrases(foundPhrases)
          console.log(
            foundPhrases
          )
        }
        else {
          setSelectedPhrases([])
        }
      },
      [input, phrases],
    )

    useEffect(() => {
      getData()
    }, [input, getData])
    
    
    const handleClick = () => {
      getData()
    }

    

    return (
       <MainLayout>
        <Box sx={{margin: "20px"}}>
            <Grid  container alignItems="center" justifyContent="center" sx={{height: "calc(100% - 200px)", gap: 2}}>
                <Input onChange={handleChange} placeholder="Busca frases de mami"/>
                <Button onClick={handleClick} variant="outlined" color="secondary">Buscar mamiFrases</Button>
            </Grid>
        </Box>
        <Grid  container alignItems="center" justifyContent="center" sx={{height: "calc(100% - 200px)", gap: 2}}>
        {
            selectedPhrases.length === 0 ? 
            (
                <Chip 
                    sx={{margin: 10}}
                    label="Esa frase de mami no existe"
                    variant="outlined"
                />
            )
            : <PhraseCard phrases={selectedPhrases}/>
        }
        </Grid>
       </MainLayout>
    )
}

export default SearchPage