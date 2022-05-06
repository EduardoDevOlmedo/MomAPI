import { Grid, Input, MenuItem, Select, Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, {useContext, useState} from 'react'
import { PhrasesContext } from '../context'
import MainLayout from '../layout/MainLayout'

type grade = 'Buena' | 'Mala' 

interface stateProps {
    message: string,
    type: grade
}

const AddPage = () => {
  
    const {addValues} = useContext(PhrasesContext)

    const [phrase, setPhrase] = useState<stateProps>({
        message: "",
        type: "Mala"
    })

    const handleChange = (e: any) => {
      const value = e.target.value;
      setPhrase({
          ...phrase,
          [e.target.name]: value
      })
    }
  


    return (
    <MainLayout>
        <Grid sx={{height: "calc(100vh - 200px)"}} container justifyContent="center" alignItems="center">
            <Grid item>
            <Box>
                <Input onChange={handleChange} name="message" placeholder="Anda a barrer!"/>
                <Select value={phrase.type} name='type' onChange={handleChange} sx={{height: "20px", width: "100px"}}>
                    <MenuItem value={"Mala"}>Regaño</MenuItem>
                    <MenuItem value={"Buena"}>Felicitacion</MenuItem>
                </Select>
            </Box>
            <Box sx={{margin: "10px", textAlign: "center"}}>
            <Button onClick={() => addValues(phrase)} variant="contained">
                <Typography>
                    Añadir frase
                </Typography>
            </Button>
            </Box>
            </Grid>
        </Grid>
    </MainLayout>
  )
}

export default AddPage